import React from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import JoinGroupScreen from "../screens/JoinGroupScreen";
import ReceiptScreen from "../screens/ReceiptScreen";
import ManualEntryScreen from "../screens/ManualEntryScreen";
import SplitScreen from "../screens/SplitScreen";
import BillTotalScreen from "../screens/BillTotalScreen";
import GroupViewStack from "./GroupViewStack";
import BottomTabNavigator from "./BottomTabNavigator";
import ManageStack from "./ManageStack";
import Profile from "../components/Profile";
import MainContent from "./MainContent";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateJoinStack from "./CreateJoinStack";
import GroupViewScreen1 from "../screens/GroupViewScreen1";

const MainStack = createStackNavigator();

const GroupStack = ({ baseURL }) => {
  console.log("Base Stack");
  <MainStack.Navigator
    initialRouteName="Split"
    screenOptions={{ headerShown: false }}
    initialParams={{ baseURL: baseURL }}
  >
    <MainStack.Screen
      name="Tabs"
      component={BottomTabNavigator}
      initialParams={{ baseURL: baseURL }}
    />
    <MainStack.Screen
      name="GroupView"
      component={GroupViewStack}
      initialParams={{ baseURL: baseURL }}
    />
    <MainStack.Screen
      name="BillTotal"
      component={BillTotalScreen}
      initialParams={{ baseURL: baseURL }}
    />
    <MainStack.Screen
      name="Receipt"
      component={ReceiptScreen}
      initialParams={{ baseURL: baseURL }}
    />
    <MainStack.Screen
      name="ManualEntry"
      component={ManualEntryScreen}
      initialParams={{ baseURL: baseURL }}
    />
    <MainStack.Screen
      name="Split"
      component={SplitScreen}
      initialParams={{ baseURL: baseURL }}
    />
  </MainStack.Navigator>;
};

export default GroupStack;
