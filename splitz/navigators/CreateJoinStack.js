import React from "react";
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateGroupScreen from "../screens/CreateGroupScreen";
import JoinGroupScreen from "../screens/JoinGroupScreen";

const GroupTab = createBottomTabNavigator();

const CreateJoinStack = () => (
    <GroupTab.Navigator
        initialRouteName="CreateGroupScreen"
        screenOptions={{
            headerShown: false // This hides the header
        }}
        tabBar={() => null} // This hides the tab bar
    >
        <GroupTab.Screen name="CreateGroupScreen" component={CreateGroupScreen} />
        <GroupTab.Screen name="JoinGroupScreen" component={JoinGroupScreen} />
    </GroupTab.Navigator>
);

export default CreateJoinStack;