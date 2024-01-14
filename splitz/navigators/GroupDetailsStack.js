import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GroupDetailsScreen from "../screens/GroupDetailsScreen";
import BillUserTotalsScreen from "../screens/BillUserTotalsScreen";

const GroupDetailsNavigator = createStackNavigator();

const GroupDetailsStack = () => {
  console.log("Group Details Stack");
  return (
    <GroupDetailsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <GroupDetailsNavigator.Screen
        name="GroupInfo"
        component={GroupDetailsScreen}
      />
      <GroupDetailsNavigator.Screen
        name="BillUserTotals"
        component={BillUserTotalsScreen}
      />
      {/* <GroupDetailsNavigator.Screen
        name="CreateBillStack"
        component={CreateBillStack}
      /> */}
    </GroupDetailsNavigator.Navigator>
  );
};

export default GroupDetailsStack;
