import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";

const UploadBtn = () => {
  return (
    <Pressable style={styles.framePressable}>
      <View style={styles.frameView}>
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../../../assets/document.png")}
        />
        <Text style={[styles.uploadMSDS, styles.ml4]}>Upload MSDS</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  documentIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  uploadMSDS: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  framePressable: {
    borderRadius: 10,
    backgroundColor: "#ffca4d",
    width: 151,
    flexShrink: 0,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default UploadBtn;
