import React from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/ProfileScreen";
import GroupActionStack from "./GroupActionStack";
import GroupDetailsStack from "./GroupDetailsStack";

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ baseURL }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        initialParams={{ baseURL: baseURL }}
      />
      <Tab.Screen
        name="GroupAction"
        component={GroupActionStack}
        initialParams={{ baseURL: baseURL }}
      />
      <Tab.Screen
        name="GroupDetails"
        component={GroupDetailsStack}
        initialParams={{ baseURL: baseURL }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ baseURL: baseURL }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
