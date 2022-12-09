import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const ConfirmButton = () => {
  return (
    <Pressable style={styles.framePressable}>
      <Text style={styles.confirmText}>Confirm</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  confirmText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#2ce296",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConfirmButton;
