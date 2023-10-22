import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import LoginStack from "./splitz/navigators/LoginStack";

baseURL = "http://localhost:8000";
export default function App() {
  return (
    <NavigationContainer>
      <LoginStack baseURL={baseURL} />
    </NavigationContainer>
  );
}
