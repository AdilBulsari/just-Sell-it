import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import navigationTheme from "./app/Navigation /navigationTheme";
import AppNavigator from "./app/Navigation /AppNavigator";

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo);
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
