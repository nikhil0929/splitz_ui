import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserBillsListScreen from "../screens/UserBillsListScreen";
import GroupDetailsStack from "./GroupDetailsStack";

const GroupTab = createBottomTabNavigator();

const ManageStack = () => (
  <GroupTab.Navigator
    initialRouteName="Bills"
    screenOptions={{
      headerShown: false, // This hides the header
    }}
    tabBar={() => null} // This hides the tab bar
  >
    <GroupTab.Screen
      name="Bills"
      component={UserBillsListScreen}
      initialParams={{ baseURL: baseURL }}
    />
    <GroupTab.Screen
      name="GroupDetailsStack"
      component={GroupDetailsStack}
      initialParams={{ baseURL: baseURL }}
    />
  </GroupTab.Navigator>
);

export default ManageStack;
