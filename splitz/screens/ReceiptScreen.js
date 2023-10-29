import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  Pressable,
  LogBox,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ReceiptScreen = ({ route }) => {
  const { baseURL } = route.params;
  LogBox.ignoreLogs([
    'Key "cancelled" in the image picker result is deprecated and will be removed in SDK 48, use "canceled" instead',
    'Key "uri" in the image picker result is deprecated and will be removed in SDK 48, you can access selected assets through the "assets" array instead',
  ]);

  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [16, 9],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      navigation.navigate("ManualEntry", { baseURL: baseURL });
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Access Denied", "Please allow camera access for splitz!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      navigation.navigate("ManualEntry", { baseURL: baseURL });
    }
  };

  handleOnPress1 = () => {
    console.log("Camera");
  };
  handleOnPress2 = () => {
    console.log("Camera Roll");
  };
  handleOnPress3 = () => {
    console.log("Enter Manually");
    navigation.navigate("ManualEntry", { baseURL: baseURL });
  };
  handleOnPress4 = () => {
    console.log("Exit");
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <View style={styles.containerBox}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Exit the Bill?", "You're about to leave the bill", [
              {
                text: "Continue",
                style: "cancel",
              },
              {
                text: "Exit",
                onPress: () =>
                  navigation.navigate("GroupDetails", { baseURL: baseURL }),
              },
            ]);
          }}
        >
          <Image
            source={require("../assets/exit.png")}
            style={styles.exitButton}
          />
        </TouchableOpacity>
        <View style={styles.newView}>
          <TitleText>Please provide a receipt:</TitleText>
        </View>
        <View style={styles.buttonBoxes}>
          <TouchableOpacity style={styles.receiptButton} onPress={openCamera}>
            <Text style={styles.buttonText}>Camera</Text>
            <Image
              style={styles.buttonPicture}
              source={require("../assets/camera.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.receiptButton} onPress={pickImage}>
            <Image
              style={styles.buttonPicture}
              source={require("../assets/cameraroll.png")}
            ></Image>
            <Text style={styles.buttonText}>Camera Roll</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.receiptButton}
            onPress={this.handleOnPress3}
          >
            <Image
              style={styles.buttonPicture}
              source={require("../assets/pencil.png")}
            ></Image>
            <Text style={styles.buttonText}>Enter Manually</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: "flex-end",
    flex: 1,
  },
  logo: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    justifyContent: "center",
    alignContent: "center",
    width: "40%",
    height: 50,
    alignSelf: "flex-start",
  },
  buttonPicture: {
    marginBottom: 40,
    height: 50,
    width: 50,
  },
  containerBox: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingTop: 30,
  },
  phoneNumberBox: {
    borderWidth: 2,
    borderColor: "#CFCFCF",
    borderRadius: 10,
    width: 350,
    height: 60,
    marginTop: 25,
    marginBottom: 30,
    flexDirection: "row",
  },
  nameInput: {
    fontSize: 20,
    padding: 10,
    marginLeft: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 355,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  newView: {
    marginTop: 5,
    marginBottom: 30,
  },
  buttonBoxes: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: "0.4",
    shadowRadius: 3,
  },
  receiptButton: {
    marginBottom: 20,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  exitButton: {
    height: 35,
    width: 35,
    alignSelf: "flex-end",
  },
});

export default ReceiptScreen;
