import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ChatSettingsScreen = props => {
  return (
    <View style={styles.container}>
        <Text>Chat Settings Screen</Text>
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

export default ChatSettingsScreen;