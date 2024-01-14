import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";

import LandingScreen from "../screens/LandingScreen";
import PhoneVerifyScreen1 from "../screens/PhoneVerifyScreen1";
import PhoneVerifyScreen2 from "../screens/PhoneVerifyScreen2";
import PhoneVerifyScreen3 from "../screens/PhoneVerifyScreen3";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const LoginStack = ({ baseURL }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyled: {
          backgroundColor: "transparent",
        },
        headerTitle: "",
        headerLeft: () => null,
        headerTintColor: colors.white,
        headerTransparent: true,
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
      initialRouteName="LandingScreen"
    >
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        initialParams={{ baseURL: baseURL }}
      />
      <Stack.Screen
        name="PhoneVerifyScreen1"
        component={PhoneVerifyScreen1}
        initialParams={{ baseURL: baseURL }}
      />
      <Stack.Screen
        name="PhoneVerifyScreen2"
        component={PhoneVerifyScreen2}
        initialParams={{ baseURL: baseURL }}
      />
      <Stack.Screen
        name="PhoneVerifyScreen3"
        component={PhoneVerifyScreen3}
        initialParams={{ baseURL: baseURL }}
      />
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        initialParams={{ baseURL: baseURL }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
