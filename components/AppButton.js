import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const AppButton = (props) => {
  // settings some configurable properties
  const bgColor = props.background || colors.primary;
  const disabledBgColor = colors.midGray;
  const textColor = props.disabled ? "white" : props.color;

  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={{
        ...styles.button,
        ...{ marginTop: props.marginTop || 20 },
        ...props.style,
        ...{ backgroundColor: props.disabled ? disabledBgColor : bgColor },
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          ...styles.title,
          color: textColor,
          fontSize: props.size || 16,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  title: {
    fontFamily: "bold",
    letterSpacing: 0.3,
  },
});

export default AppButton;
