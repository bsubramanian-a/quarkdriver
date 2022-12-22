import * as React from "react";
import { Image, StyleSheet, Text, ImageBackground } from "react-native";

const LoginLogo = () => {
  return (
    <ImageBackground
      style={styles.frameIcon}
      resizeMode="stretch"
      source={require("../../../assets/frame481.png")}
    >
      <Image
        style={styles.lOGO13}
        resizeMode="cover"
        source={require("../../../assets/logo-1-3.png")}
      />
      <Text style={[styles.qUARKText, styles.mt_7]}>QUARK</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  lOGO13: {
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARKText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameIcon: {
    alignSelf: "stretch",
    height: 204,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 138,
    paddingVertical: 32,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
});

export default LoginLogo;
