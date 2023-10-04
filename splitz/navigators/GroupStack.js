import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateGroupScreen from "../screens/CreateGroupScreen";
import JoinGroupScreen from "../screens/JoinGroupScreen";
import ReceiptScreen from "../screens/ReceiptScreen";
import ManualEntryScreen from "../screens/ManualEntryScreen";
import SplitScreen from "../screens/SplitScreen";
import BillTotalScreen from "../screens/BillTotalScreen";
import GroupViewScreen1 from "../screens/GroupViewScreen1";
import GroupViewScreen2 from "../screens/GroupViewScreen2";

const GroupTab = createBottomTabNavigator();

const GroupStack = () => (
    <GroupTab.Navigator
        initialRouteName="CreateGroup"
        screenOptions={{
            headerShown: false // This hides the header
        }}
        tabBar={() => null} // This hides the tab bar
    >
        <GroupTab.Screen name="CreateGroup" component={CreateGroupScreen} />
        <GroupTab.Screen name="JoinGroup" component={JoinGroupScreen} />
        <GroupTab.Screen name="GroupViewScreen1" component={GroupViewScreen1} />
        <GroupTab.Screen name="GroupViewScreen2" component={GroupViewScreen2} />
        <GroupTab.Screen name="Receipt" component={ReceiptScreen} />
        <GroupTab.Screen name="ManualEntryScreen" component={ManualEntryScreen} />
        <GroupTab.Screen name="Split" component={SplitScreen} />
        <GroupTab.Screen name="BillTotalScreen" component={BillTotalScreen} />
    </GroupTab.Navigator>
);

export default GroupStack;