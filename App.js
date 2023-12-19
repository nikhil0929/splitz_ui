import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./splitz/navigators/LoginStack";

baseURL = "http://localhost:8000";
// baseURL = "https://da3a-2600-1700-42f3-1b0-3562-c544-8f-7d0e.ngrok-free.app";
export default function App() {
  return (
    <NavigationContainer>
      <LoginStack baseURL={baseURL} />
    </NavigationContainer>
  );
}
