import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GroupDetailsScreen_CreateBill from "../screens/GroupDetailsScreen_CreateBill";
import GroupViewScreen2 from "../screens/GroupDetailsScreen_Dashboard";
import CreateBillStack from "./CreateBillStack";

const GroupDetailsNavigator = createStackNavigator();

const GroupDetailsStack = ({ baseURL }) => {
  console.log("Group Details Stack");
  return (
    <GroupDetailsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <GroupDetailsNavigator.Screen
        name="GroupBills"
        component={GroupDetailsScreen_CreateBill}
        initialParams={{ baseURL: baseURL }}
      />
      <GroupDetailsNavigator.Screen
        name="GroupDashboard"
        component={GroupViewScreen2}
        initialParams={{ baseURL: baseURL }}
      />
      <GroupDetailsNavigator.Screen
        name="CreateBill"
        component={CreateBillStack}
        initialParams={{ baseURL: baseURL }}
      />
    </GroupDetailsNavigator.Navigator>
  );
};

export default GroupDetailsStack;
