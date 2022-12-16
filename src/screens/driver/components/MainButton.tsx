import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type MainButtonType = {
  submit?: string;
};

const MainButton = ({ submit }: MainButtonType) => {
  return (
    <Pressable style={[styles.framePressable]}>
      <Text style={styles.submitText}>{submit}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    alignSelf: "stretch",
    borderRadius: 30,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainButton;
