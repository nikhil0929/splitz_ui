import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./splitz/navigators/LoginStack";

baseURL = "http://3.14.255.133";
export default function App() {
  return (
    <NavigationContainer>
      <LoginStack baseURL={baseURL} />
    </NavigationContainer>
  );
}
