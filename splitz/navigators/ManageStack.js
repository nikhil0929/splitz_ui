import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageViewScreen1 from "../screens/ManageViewScreen1";
import ManageViewScreen2 from "../screens/ManageViewScreen2";

const GroupTab = createBottomTabNavigator();

const GroupStack = () => (
    <GroupTab.Navigator
        initialRouteName="Bills"
        screenOptions={{
            headerShown: false // This hides the header
        }}
        tabBar={() => null} // This hides the tab bar
    >
        <GroupTab.Screen name="Bills" component={ManageViewScreen1} />
        <GroupTab.Screen name="Groups" component={ManageViewScreen2} />
    </GroupTab.Navigator>
);

export default GroupStack;