import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreenView}>
      <View style={styles.groupView}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-85.png")}
        />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-86.png")}
        />
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../assets/logo-1-32.png")}
        />
        <Text style={styles.qUARKText}>QUARK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lOGO13: {
    position: "absolute",
    top: 63,
    left: 85,
    width: 161,
    height: 161,
    overflow: "hidden",
  },
  qUARKText: {
    position: "absolute",
    top: 211,
    left: 107,
    fontSize: 36,
    fontFamily: "Salsa",
    color: "#0a288f",
    textAlign: "left",
  },
  groupView: {
    position: "relative",
    width: 330,
    height: 330,
    flexShrink: 0,
  },
  splashScreenView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 1082,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
