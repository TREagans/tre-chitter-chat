import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import backgroundImage from "../assets/images/background.jpeg";
import colors from "../constants/colors";

const ChatScreen = (props) => {
  const [textMessage, setTextMessage] = useState("");

  // this will prevent the function from be re-created
  // everytime component reloads from the state changes
  // this function only re-creates when the state changes
  const sendMessage = useCallback(() => {
    setTextMessage("");
  }, [textMessage]);

  return (

    // edges removes the additional area from SafeAreaView
    // we can list an array of sides to "keep" safe area
    <SafeAreaView 
      edges={["right", "bottom", "left"]} 
      style={styles.container}>

      <KeyboardAvoidingView 
        style={ styles.screen }
        behavior={ Platform.OS === 'android' ? undefined : "padding" }
        keyboardVerticalOffset={100}
      >

        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImg}
        ></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.mediaButton}>
            <Ionicons name="ios-add-outline" size={24} color={colors.blue} />
          </TouchableOpacity>

          {/* onChangeText returns the text */}
          <TextInput
            style={styles.textbox}
            value={textMessage}
            onChangeText={(text) => setTextMessage(text)}
            onSubmitEditing={sendMessage}
          />

          {textMessage === "" && (
            <TouchableOpacity style={styles.mediaButton} onPress={sendMessage}>
              <Ionicons name="camera-outline" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}
          {textMessage !== "" && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <FontAwesome name="send" size={16} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // screen takes up full screen
    flexDirection: "column",
  },
  screen: {
    flex: 1
  },
  backgroundImg: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  mediaButton: {
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 36,
  },
  textbox: {
    flex: 1, // fills height and width of parent
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16
  },
});

export default ChatScreen;
