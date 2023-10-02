import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import colors from "../config/colors";

import ReceiptScreen from "../screens/ReceiptScreen";
import ManualEntryScreen from "../screens/ManualEntryScreen";
import SplitScreen from "../screens/SplitScreen";
import BillTotalScreen from "../screens/BillTotalScreen";

const Stack = createStackNavigator();

const CreateGroupStack = () => {
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
                    paddingLeft: 20
                },
            }}
            initialRouteName="ReceiptScreen">
                <Stack.Screen
                    name="ReceiptScreen" component={ReceiptScreen}/>
                <Stack.Screen
                    name="ManualEntryScreen" component={ManualEntryScreen}/>
                <Stack.Screen
                    name="SplitScreen" component={SplitScreen}/>
                <Stack.Screen
                    name="BillTotalScreen" component={BillTotalScreen}/>                          
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CreateGroupStack;