import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupViewScreen1 from "../screens/GroupViewScreen1";
import GroupViewScreen2 from "../screens/GroupViewScreen2";

const GroupTab = createBottomTabNavigator();

const GroupViewStack = () => (
    <GroupTab.Navigator
        initialRouteName="GroupViewScreen1"
        screenOptions={{
            headerShown: false // This hides the header
        }}
        tabBar={() => null} // This hides the tab bar
    >
        <GroupTab.Screen name="GroupViewScreen1" component={GroupViewScreen1} />
        <GroupTab.Screen name="GroupViewScreen2" component={GroupViewScreen2} />
    </GroupTab.Navigator>
);

export default GroupViewStack;