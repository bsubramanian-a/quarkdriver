import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const DownloadButton = () => {
  return (
    <Pressable style={styles.framePressable}>
      <Text style={styles.downloadFileText}>Download File</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  downloadFileText: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  framePressable: {
    borderRadius: 10,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default DownloadButton;
