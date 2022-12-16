import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type ButtonWidthType = {
  endOfLoading?: string;
};

const ButtonWidth = ({ endOfLoading }: ButtonWidthType) => {
  return (
    <Pressable style={[styles.buttonPressable]}>
      <Text style={styles.endOfLoading}>{endOfLoading}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  endOfLoading: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  buttonPressable: {
    borderRadius: 30,
    backgroundColor: "#ffb300",
    width: "86%",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 7
  },
});

export default ButtonWidth;
