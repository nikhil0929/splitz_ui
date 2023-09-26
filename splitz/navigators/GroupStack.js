import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../config/colors";

import LandingScreen from '../../splitz/screens/LandingScreen';
import PhoneVerifyScreen1 from "../../splitz/screens/PhoneVerifyScreen1";
import PhoneVerifyScreen2 from "../../splitz/screens/PhoneVerifyScreen2";
import PhoneVerifyScreen3 from "../../splitz/screens/PhoneVerifyScreen3";
import CreateGroupScreen from "../screens/CreateGroupScreen";

const Stack = createStackNavigator();

const GroupStack = () => {
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
            initialRouteName="CreateGroupScreen"
            >         
                <Stack.Screen
                    name="CreateGroupScreen" component={CreateGroupScreen}/>
                <Stack.Screen
                    name="JoinGroupScreen" component={CreateGroupScreen}/>                    
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default GroupStack;