import "react-native-gesture-handler";
import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import AppNavigator from "./navigation/AppNavigator";


// display the splash screen visible while we fetch data
SplashScreen.preventAutoHideAsync();


export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  // load fonts while displaying loading screen
  useEffect(() => {
    const loadFonts = async () => {
      try {
        // loading custom roboto font files path
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (err) {
        console.warn("Loading custom fonts failed!", err);
      } finally {
        // set app to ready whether fonts loaded or failed
        setAppIsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  // this function runs whenever the state variable changes
  const onLayoutChange = useCallback(async () => {
    if (appIsLoaded) {
      // hide loading splash screen once app screen has loaded
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  // if the app's not ready, return null which in turns
  // shows loading splash screen, but if ready, app screen shows
  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutChange}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "medium",
  },
});
