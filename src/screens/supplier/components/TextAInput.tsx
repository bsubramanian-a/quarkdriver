import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextAInput = () => {
  return (
    <TextInput
      style={styles.frameTextInput}
      placeholder="Full Address of Shipper"
      keyboardType="default"
      placeholderTextColor="#b6bfdd"
    />
  );
};

const styles = StyleSheet.create({
  frameTextInput: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#8493c7",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#0A288F",
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default TextAInput;
