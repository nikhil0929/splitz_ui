import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageViewScreen1 from '../screens/ManageViewScreen1';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="ManageView">
            <Tab.Screen
                name="ManageView"
                component={ManageViewScreen1}
                options={{ 
                    tabBarLabel: 'Manage',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="list" color="#3AF89C" size={30}></MaterialCommunityIcons>
                    ), }}
            />
            <Tab.Screen
                name="CreateGroupScreen"
                component={CreateGroupScreen}
                options={{ 
                    tabBarLabel: 'Manage',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="resize-full-screen" color="#3AF89C" size={30}></MaterialCommunityIcons>
                    ), }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ 
                    tabBarLabel: 'Manage',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="user" color="#3AF89C" size={30}></MaterialCommunityIcons>
                    ), }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;