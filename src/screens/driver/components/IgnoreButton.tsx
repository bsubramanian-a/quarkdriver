import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const IgnoreButton = () => {
  return (
    <Pressable style={[styles.framePressable, styles.ml12]}>
      <Text style={styles.ignoreText}>Ignore</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ignoreText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "center",
  },
  framePressable: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#ff1f1f",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IgnoreButton;
