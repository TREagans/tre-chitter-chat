import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../constants/colors";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <View style={styles.inputContainer}>
        {/* if an icon is passed, display the icon */}
        {props.icon && (
          <props.iconLibrary
            style={styles.icon}
            name={props.icon}
            size={props.size || 16}
          />
        )}

        <TextInput style={styles.input} />
      </View>

      {/* if an error is passed, display errorContainer */}
      {props.error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,
    color: colors.textColor,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 4,
    backgroundColor: colors.offWhite,
    fontSize: "1.5rem",
  },
  icon: {
    marginLeft: 5,
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: colors.textColor,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 2,
  },
  errorText: {
    color: "red",
    letterSpacing: 0.3,
    fontSize: 13,
    fontFamily: "regular",
  },
});
export default Input;
