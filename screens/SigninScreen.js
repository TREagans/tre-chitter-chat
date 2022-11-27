import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import signinImg from "../assets/images/chat-bubbles.png";

const SigninScreen = (props) => {
  const handleSignin = () => {
    console.log("Signup Clicked!");
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={signinImg} style={styles.image} resizeMode="contain" />
      </View>

      {/* can use icons from iconLibraries: Entypo, FA, MaterialIcons */}
      <AppInput label="Email:" icon="email" iconLibrary={Entypo} />
      <AppInput label="Password:" icon="lock" iconLibrary={MaterialIcons} />

      <AppButton
        title="Sign In"
        color="white"
        size={20}
        onPress={handleSignin}
        style={{ borderRadius: 50 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  signin: {
    flexDirection: "row",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
  },
});

export default SigninScreen;
