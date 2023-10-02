import React from "react";
import { StatusBar } from 'expo-status-bar';
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


export default function App() {
  return <CreateGroupStack/>
}
