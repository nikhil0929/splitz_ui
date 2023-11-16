import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import PrimaryButton from "../components/ButtonText";
import SecondaryButton from "../components/SecondaryButton";
import HeadingText from "../components/HeadingText";
import TopLogo from "../components/TopLogo";
import ButtonText from "../components/ButtonText";
import ButtonText2 from "../components/ButtonText2";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const LandingScreen = ({ route }) => {
  const { baseURL } = route.params;
  const navigation = useNavigation();
  handlePress = async () => {
    console.log("Verify User");
    let token = await SecureStore.getItemAsync("access_token");
    if (!token) {
      console.log("User is not logged in");
      navigation.navigate("PhoneVerifyScreen1");
    }
    axios
      .get(baseURL + "/user/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      })
      .then((res) => {
        console.log("User is logged in");
        navigation.navigate("BottomTabNavigator", { baseURL: baseURL });
      })
      .catch((error) => {
        console.log("Error: User is not logged in");
        navigation.navigate("PhoneVerifyScreen1");
      });
  };

  return (
    <View style={styles.container}>
      <TopLogo />
      <Image
        style={styles.LandingScreenImage}
        source={require("../assets/LandingScreenPicture.png")}
      ></Image>
      <View style={styles.buttonBox}>
        <View style={styles.textBox}>
          <HeadingText>
            Group payments made simple, social, and central.
          </HeadingText>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={handlePress}>
          <ButtonText>Sign Up</ButtonText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handlePress}>
          <ButtonText2>Login</ButtonText2>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },

  LandingScreenImage: {
    justifyContent: "center",
    top: 40,
    width: 420,
    height: 500,
  },
  buttonBox: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textBox: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
    bottom: 10,
  },
  topLogo: {
    justifyContent: "flex-start",
    width: 164,
    height: 55,
    top: 60,
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
  secondaryButton: {
    backgroundColor: colors.white,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    width: 355,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default LandingScreen;
