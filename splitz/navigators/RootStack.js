import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../config/colors";

import LandingScreen from '../../splitz/screens/LandingScreen';
import PhoneVerifyScreen1 from "../../splitz/screens/PhoneVerifyScreen1";
import PhoneVerifyScreen2 from "../../splitz/screens/PhoneVerifyScreen2";
import PhoneVerifyScreen3 from "../../splitz/screens/PhoneVerifyScreen3";
import GroupStack from "./GroupStack";

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions ={{
                headerStyled: {
                    backgroundColor: "transparent"
                },
                headerTitle:"",
                headerLeft: ()=> null,
                headerTintColor: colors.white,
                headerTransparent: true,
                headerLeftContainerStyle: {
                    paddingLeft:20
                },
            }}
            initialRouteName="LandingScreen"
            >
                <Stack.Screen
                    name="LandingScreen" component={LandingScreen}/>
                <Stack.Screen
                    name="PhoneVerifyScreen1" component={PhoneVerifyScreen1}/>    
                <Stack.Screen
                    name="PhoneVerifyScreen2" component={PhoneVerifyScreen2}/>    
                <Stack.Screen
                    name="PhoneVerifyScreen3" component={PhoneVerifyScreen3}/>         
                <Stack.Screen
                    name="GroupStack" component={GroupStack}/>          
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;