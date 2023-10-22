import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";

import ManageViewScreen1 from "../screens/ManageViewScreen1";
import ManageViewScreen2 from "../screens/ManageViewScreen2";

const Stack = createStackNavigator();

const HomeStack = ({ baseURL }) => {
  console.log("Home Stack");
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
    >
      <Stack.Screen
        name="Bills"
        component={ManageViewScreen1}
        initialParams={{ baseURL: baseURL }}
      />
      <Stack.Screen
        name="Groups"
        component={ManageViewScreen2}
        initialParams={{ baseURL: baseURL }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
