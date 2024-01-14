import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import OTPInputField from "../components/OTPInputField";

import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import ButtonText from "../components/ButtonText";
import LoginLayout from "../layouts/LoginLayout";
import * as SecureStore from "expo-secure-store";

const PhoneVerifyScreen2 = ({ route }) => {
  console.log("PhoneVerifyScreen2");
  const navigation = useNavigation();

  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 5;

  const { baseURL, phone_number } = route.params;

  // saves the access token to the secure storage
  async function saveKey(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  sendNewCode = () => {
    axios
      .post(baseURL + "/user/initialize-verification", {
        phone_number: phone_number,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // a better version of the below function
  // first login user and get the access token
  // then use the access token to get the user's information
  // if the user's name exists, then navigate to the group stack
  // else navigate to the name screen
  const handleOTPSubmit = async () => {
    axios
      .post(baseURL + "/user/complete-verification", {
        phone_number: phone_number,
        otp: code,
      })
      .then(async (res) => {
        // extract the access token from the response
        // const access_token = res.data.access_token;
        saveKey("access_token", res.data.access_token);
        const access_token = await SecureStore.getItemAsync("access_token");
        console.log("access token: ", access_token);
        // GET request to retrieve the user's information
        axios
          .get(`${baseURL}/user/`, {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((res) => {
            // Checking if the name field exists

            console.log(
              "HERE: ",
              res.data.name ? console.log("true") : console.log("false")
            );
            if (!res.data.name) {
              navigation.navigate("PhoneVerifyScreen3");
            } else {
              navigation.navigate("BottomTabNavigator", {
                baseURL: baseURL,
              });
            }
          })
          .catch((error) => {
            console.log("error here 1: ", error);
          });
      })
      .catch((error) => {
        console.log("error here 2: ", error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <LoginLayout
        headerText="Enter the code we just sent!"
        greyText={`We texted you at ${phone_number}`}
        titleText="Enter Code:"
      >
        <OTPInputField
          setPinReady={setPinReady}
          code={code}
          setCode={setCode}
          maxLength={MAX_CODE_LENGTH}
        ></OTPInputField>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <GreyText>Didn't get anything?</GreyText>
          <TouchableOpacity onPress={sendNewCode}>
            <Text style={styles.againText}>Get another code here</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleOTPSubmit}
          disabled={!pinReady}
        >
          <ButtonText>Continue</ButtonText>
        </TouchableOpacity>
      </LoginLayout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignContent: "center",
    justifyContent: "flex-end",
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
    flex: 0.9,
    backgroundColor: colors.white,
    alignContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingTop: 40,
  },
  numberBox: {
    borderWidth: 2,
    borderColor: "#CFCFCF",
    borderRadius: 10,
    width: 62,
    height: 72,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  againText: {
    color: colors.primary,
    fontSize: 16,
    marginTop: 5,
    marginLeft: 8,
  },
  numberInput: {
    fontSize: 30,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 355,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  hiddenBox: {
    position: "absolute",
    height: 0,
    width: 0,
    opacity: 0,
  },
});
export default PhoneVerifyScreen2;
