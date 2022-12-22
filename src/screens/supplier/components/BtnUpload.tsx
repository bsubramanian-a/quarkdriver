import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const BtnUpload = () => {
  return (
    <Pressable style={styles.uploadBtn}>
      <Text style={styles.uploadFile}>Upload File</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  uploadFile: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  uploadBtn: {
    borderRadius: 10,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BtnUpload;
