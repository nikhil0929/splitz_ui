import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../config/colors";

import CameraScreen from "../screens/CameraScreen";
import CameraPictureScreen from "../screens/CameraPictureScreen";

const Stack = createStackNavigator();

const CameraStack = () => {
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
            initialRouteName="CameraScreen">
                <Stack.Screen
                    name="CameraScreen" component={CameraScreen}/>
                <Stack.Screen
                    name="CameraPictureScreen" component={CameraPictureScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CameraStack;