import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/auth/AuthScreen";

const AppNavigator = props => {

  // temp condition check
  const isAuth = false;

  return (
    <NavigationContainer>
      { isAuth && <MainNavigator /> }
      { !isAuth && <AuthScreen /> }
    </NavigationContainer>
  );

};

export default AppNavigator;
