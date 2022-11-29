import React from "react";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

import AppButton from "../../components/AppButton";
import AppInput from "../../components/AppInput";
import { Image, StyleSheet, Text, View } from "react-native";
import signupImg from "../../assets/images/chat-bubbles.png";

const SignupScreen = (props) => {
  const handleSignup = () => {
    console.log("Signup Clicked!");
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={signupImg} style={styles.image} resizeMode="contain" />
      </View>

      {/* can use icons from iconLibraries: Entypo, FA, MaterialIcons */}
      <AppInput
        label="First Name:"
        icon="user-circle"
        iconLibrary={FontAwesome}
      />
      <AppInput
        label="Last Name:"
        icon="user-circle"
        iconLibrary={FontAwesome}
      />
      <AppInput label="Email:" icon="email" iconLibrary={Entypo} />
      <AppInput label="Password:" icon="lock" iconLibrary={MaterialIcons} />

      <AppButton
        title="Sign Up"
        color="white"
        size={20}
        onPress={handleSignup}
        style={{ borderRadius: 50 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
  },
});

export default SignupScreen;
