import React, { useState } from "react";
import { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

import colors from "../config/colors";
import ButtonText from "../components/ButtonText";
import PhoneInput from "react-native-phone-number-input";
import LoginLayout from "../layouts/LoginLayout";

const PhoneVerifyScreen1 = ({ route }) => {
  console.log("PhoneVerifyScreen1");
  const { baseURL } = route.params;
  const [number, setNumber] = useState("");
  const navigation = useNavigation();

  handleIntializeVerification = () => {
    axios
      .post(baseURL + "/user/initialize-verification", {
        phone_number: number,
      })
      .then((res) => {
        console.log(number);
        navigation.navigate("PhoneVerifyScreen2", { phone_number: number });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginLayout
      headerText="What's your phone number?"
      greyText="We'll text you a confirmation code after!"
      titleText="Phone Number:"
    >
      <PhoneInput
        defaultCode="US"
        value={number}
        onChangeFormattedText={(text) => {
          setNumber(text);
        }}
        containerStyle={styles.phoneNumberBox}
        textInputProps={{ maxLength: 10 }}
        autoFocus={true}
      />
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleIntializeVerification}
      >
        <ButtonText>Continue</ButtonText>
      </TouchableOpacity>
    </LoginLayout>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
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
  phoneNumberInput: {
    fontSize: 25,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 355,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default PhoneVerifyScreen1;
