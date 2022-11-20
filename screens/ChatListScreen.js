import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ChatListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chat List Screen</Text>
      
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("ChatSettings")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // screen takes up full screen
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "medium",
  },
});

export default ChatListScreen;
