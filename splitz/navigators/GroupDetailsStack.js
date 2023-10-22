import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GroupViewScreen1 from "../screens/GroupViewScreen1";
import GroupViewScreen2 from "../screens/GroupViewScreen2";

const GroupDetailsNavigator = createStackNavigator();

const GroupDetailsStack = ({ baseURL }) => {
  console.log("Group Details Stack");
  return (
    <GroupDetailsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <GroupDetailsNavigator.Screen
        name="GroupBills"
        component={GroupViewScreen1}
        initialParams={{ baseURL: baseURL }}
      />
      <GroupDetailsNavigator.Screen
        name="GroupDashboard"
        component={GroupViewScreen2}
        initialParams={{ baseURL: baseURL }}
      />
    </GroupDetailsNavigator.Navigator>
  );
};

export default GroupDetailsStack;
