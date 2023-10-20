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
  const { baseURL } = route.params;
  const inputRef = useRef();
  const secondBox = useRef();

  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");

  const allNames = fullName + ";" + userName;

  const navigation = useNavigation();
  //   const route = useRoute();

  handleOnPress1 = () => {
    console.log(allNames);
  };
  handleOnPress2 = () => {
    axios
      .post(baseURL + "/user/update/", {
        name: fullName,
        username: userName,
      })
      .then((res) => {
        console.log("IN here");
        // let result = await SecureStore.getItemAsync("access_token");

        // Alert.alert(`token! ${result}`);
        navigation.navigate("GroupStack", {
          screen: "Tabs",
          params: {
            screen: "Create/Join",
            params: { baseURL: baseURL },
          },
        });
      })
      .catch((error) => {
        Alert("Failed!");
        console.log(error);
      });
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
