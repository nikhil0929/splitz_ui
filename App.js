import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from './splitz/screens/LandingScreen';
import PhoneVerifyScreen1 from "./splitz/screens/PhoneVerifyScreen1";
import PhoneVerifyScreen2 from "./splitz/screens/PhoneVerifyScreen2";
import PhoneVerifyScreen3 from "./splitz/screens/PhoneVerifyScreen3";
import Test from "./splitz/screens/Test";
import CreateGroupScreen from "./splitz/screens/CreateGroupScreen";
import JoinGroupScreen from "./splitz/screens/JoinGroupScreen";
import ReceiptScreen from "./splitz/screens/ReceiptScreen";
import ManualEntryScreen from "./splitz/screens/ManualEntryScreen";
import SplitScreen from "./splitz/screens/SplitScreen";

import RootStack from "./splitz/navigators/RootStack";
import CreateGroupStack from "./splitz/navigators/CreateGroupStack";
import BillTotalScreen from "./splitz/screens/BillTotalScreen";
import GroupViewScreen1 from "./splitz/screens/GroupViewScreen1";
import GroupViewScreen2 from "./splitz/screens/GroupViewScreen2";
import ManageViewScreen1 from "./splitz/screens/ManageViewScreen1";
import ManageViewScreen2 from "./splitz/screens/ManageViewScreen2";
import ProfileScreen from "./splitz/screens/ProfileScreen";
import GroupStack from "./splitz/navigators/GroupStack";
import ManageStack from "./splitz/navigators/ManageStack"


export default function App() {
  return (
  <NavigationContainer>
  <GroupStack/>
  </NavigationContainer>
  );
}
