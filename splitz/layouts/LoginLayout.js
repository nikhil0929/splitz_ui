import React, { useState } from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";

const LoginLayout = ({ children, headerText, greyText, titleText }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <View style={styles.contentContainer}>
        <HeadingText>{headerText}</HeadingText>
        <GreyText>{greyText}</GreyText>
        <TitleText>{titleText}</TitleText>
        {children}
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
    marginBottom: 45,
    justifyContent: "center",
    alignContent: "center",
    width: "70%",
    height: 100,
    alignSelf: "center",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "left",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    paddingLeft: 20,
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

export default LoginLayout;
