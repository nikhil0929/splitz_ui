import React, { useState } from "react";
import { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import * as SecureStore from "expo-secure-store";
import LoginLayout from "../layouts/LoginLayout";

const PhoneVerifyScreen3 = ({ route }) => {
  console.log("PhoneVerifyScreen3");
  const { baseURL } = route.params;
  const inputRef = useRef();
  const secondBox = useRef();

  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");

  const allNames = fullName + ";" + userName;

  const navigation = useNavigation();

  const handleOnPress2 = async () => {
    if (fullName == "" || userName == "") {
      Alert.alert("Please fill in all fields");
      return;
    }

    const access_token = await SecureStore.getItemAsync("access_token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const data = {
      name: fullName,
      username: userName,
    };

    axios
      .put(`${baseURL}/user/update`, data, { headers: headers })
      .then((response) => {
        console.log(response.data);
        Alert.alert("Update Success!");
        navigation.navigate("BottomTabNavigator", { baseURL: baseURL });
      })
      .catch((error) => {
        Alert.alert("Failed!");
        console.log("error", error);
      });
    // axios
    //   .put(baseURL + "/user/update/", data, headers)
    //   .then((res) => {
    //     console.log("IN here");
    //     // let result = await SecureStore.getItemAsync("access_token");

    //     // Alert.alert(`token! ${result}`);
    //     console.log(res.data);
    //     Alert.alert("Update Success!");
    //     navigation.navigate("GroupActionStack", { baseURL: baseURL });
    //   })
    //   .catch((error) => {
    //     Alert.alert("Failed!");
    //     console.log(error);
    //   });
  };

  return (
    <LoginLayout
      headerText="Just some final touches!"
      greyText="Set your full name and username below:"
    >
      <View style={styles.inputContainer}>
        <TitleText>Your name:</TitleText>
        <View style={styles.phoneNumberBox}>
          <TextInput
            style={styles.nameInput}
            ref={inputRef}
            value={fullName}
            keyboardType="name-phone-pad"
            autoCapitalize="words"
            autoFocus={true}
            onChangeText={(text) => setfullName(text)}
            onSubmitEditing={() => {
              {
                secondBox.current.focus();
              }
            }}
          />
        </View>
        <TitleText>Your username:</TitleText>
        <View style={styles.phoneNumberBox}>
          <TextInput
            style={styles.nameInput}
            ref={secondBox}
            value={userName}
            onChangeText={(text) => setuserName(text)}
            keyboardType="name-phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={handleOnPress2}>
          <ButtonText>Continue</ButtonText>
        </TouchableOpacity>
      </View>
    </LoginLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: "flex-end",
    flex: 1,
  },
  inputContainer: {
    width: "100%",
  },
  logo: {
    marginTop: 10,
    marginBottom: 45,
    justifyContent: "center",
    alignContent: "center",
    width: "70%",
    height: 100,
    alignSelf: "center",
  },
  verificationBox: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "flex-start",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingTop: 40,
  },
  phoneNumberBox: {
    borderWidth: 2,
    borderColor: "#CFCFCF",
    borderRadius: 10,
    height: 60,
    marginTop: 25,
    marginBottom: 30,
    flexDirection: "row",
    width: "85%",
  },
  nameInput: {
    fontSize: 20,
    padding: 10,
    marginLeft: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    width: "95%",
  },
});

export default PhoneVerifyScreen3;
