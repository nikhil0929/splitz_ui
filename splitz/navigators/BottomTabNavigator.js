import React, { useEffect, useState } from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/ProfileScreen";
import GroupActionStack from "./GroupActionStack";
import GroupDetailsStack from "./GroupDetailsStack";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { AxiosContext } from "../axiosCaller";

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ route }) {
  const { baseURL } = route.params;
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const access_token = await SecureStore.getItemAsync("access_token");
      setToken(access_token);
    };

    fetchToken();
  }, []);

  const axiosCaller = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  if (!token) {
    // You can return a loading screen or null here until the token is available
    return null;
  }

  return (
    <AxiosContext.Provider value={axiosCaller}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="GroupAction" component={GroupActionStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </AxiosContext.Provider>
  );
}

export default BottomTabNavigator;
