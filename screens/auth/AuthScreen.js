import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppInput from "../../components/AppInput";
import PageContainer from "../../components/PageContainer";
import AppButton from "../../components/AppButton";
import SignupScreen from "./SignupScreen";
import SigninScreen from "./SigninScreen";
import colors from "../../constants/colors";
import logo from "../../assets/images/chat-bubbles.png";

const AuthScreen = (props) => {
  const [isSignedUp, setIsSignedUp] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>

        <ScrollView>
          
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === "ios" ? "height" : undefined}
            keyboardVerticalOffset={100}
          >

            {isSignedUp ? <SigninScreen /> : <SignupScreen />}

            {isSignedUp ? (
              <View style={styles.signinSignup}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  style={styles.link}
                  onPress={() => setIsSignedUp((prevState) => !prevState)}
                >
                  <Text>Sign up</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.signinSignup}>
                <Text>Already have an account?</Text>
                <TouchableOpacity
                  style={styles.link}
                  onPress={() => setIsSignedUp((prevState) => !prevState)}
                >
                  <Text>Sign in</Text>
                </TouchableOpacity>
              </View>
            )}
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
  signinSignup: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
    paddingVertical: 5,
  },
  link: {
    marginLeft: 5,
    textDecorationLine: "underline",
    fontFamily: "regular",
    borderBottomWidth: 1,
    borderBottomColor: colors.textColor,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
  },
});

export default AuthScreen;
