import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";

import ManageViewScreen from "../screens/UserBillsListScreen";
import GroupDetailsStack from "./GroupDetailsStack";
import CreateBillStack from "./CreateBillStack";
import MainNavigator from "./MainStack";

const Stack = createStackNavigator();

const HomeStack = () => {
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
      <Stack.Screen name="Bills" component={ManageViewScreen} />
      <Stack.Screen name="MainStack" component={MainNavigator} />
      {/* <Stack.Screen name="GroupDetailsStack" component={GroupDetailsStack} />
      <Stack.Screen name="CreateBillStack" component={CreateBillStack} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
