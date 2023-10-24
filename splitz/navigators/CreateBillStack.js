import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReceiptScreen from "../screens/ReceiptScreen";
import ManualEntryScreen from "../screens/ManualEntryScreen";
import SplitScreen from "../screens/SplitScreen";

const CreateBillStackNavigavtor = createBottomTabNavigator();

const CreateBillStack = ({ baseURL }) => (
  <CreateBillStackNavigavtor.Navigator
    screenOptions={{
      headerShown: false, // This hides the header
    }}
    tabBar={() => null} // This hides the tab bar
  >
    <CreateBillStackNavigavtor.Screen
      name="ReceiptUpload"
      component={ReceiptScreen}
      initialParams={{ baseURL: baseURL }}
    />
    <CreateBillStackNavigavtor.Screen
      name="ManualEntry"
      component={ManualEntryScreen}
      initialParams={{ baseURL: baseURL }}
    />
    <CreateBillStackNavigavtor.Screen
      name="Split"
      component={SplitScreen}
      initialParams={{ baseURL: baseURL }}
    />
  </CreateBillStackNavigavtor.Navigator>
);

export default CreateBillStack;
