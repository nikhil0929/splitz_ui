import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateBillStack from "./CreateBillStack";
import GroupDetailsStack from "./GroupDetailsStack";

const MainStack = createStackNavigator();

const MainNavigator = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="CreateBill" component={CreateBillStack} />
    <MainStack.Screen name="GroupDetails" component={GroupDetailsStack} />
  </MainStack.Navigator>
);

export default MainNavigator;
