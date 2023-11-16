import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GroupDetailsScreen from "../screens/GroupDetailsScreen";
import GroupViewScreen2 from "../screens/GroupDetailsScreen_Dashboard";
import CreateBillStack from "./CreateBillStack";

const GroupDetailsNavigator = createStackNavigator();

const GroupDetailsStack = () => {
  console.log("Group Details Stack");
  return (
    <GroupDetailsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <GroupDetailsNavigator.Screen
        name="GroupDetails"
        component={GroupDetailsScreen}
      />
      <GroupDetailsNavigator.Screen
        name="CreateBill"
        component={CreateBillStack}
      />
    </GroupDetailsNavigator.Navigator>
  );
};

export default GroupDetailsStack;
