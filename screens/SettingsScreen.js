import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SettingsScreen = props => {
  return (
    <View style={styles.container}>
        <Text>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // screen takes up full screen
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontFamily: "medium"
    }
  });

export default SettingsScreen;