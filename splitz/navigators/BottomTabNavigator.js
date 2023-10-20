import React from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageStack from "./ManageStack";
import ProfileScreen from "../screens/ProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import GroupStack from "./GroupStack";
import CustomBottomTabBar from "./CustomBottomTabBar";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  console.log("Bottom Tab Navigator");
  return (
    <Tab.Navigator
      initialRouteName="Create/Join"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomBottomTabBar {...props} />}
    >
      <Tab.Screen
        name="Create_Join"
        component={CreateGroupScreen}
        screenOptions={{
          tabBarLabel: "Create_Join",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ManageStack}
        screenOptions={{
          tabBarLabel: "Manage",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        screenOptions={{
          tabBarLabel: "Profile",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
