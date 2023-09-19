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
import CameraScreen from"./splitz/screens/CameraScreen";

import RootStack from "./splitz/navigators/RootStack";
import CameraStack from "./splitz/navigators/CameraStack";

export default function App() {
  return <CameraStack/>
}
