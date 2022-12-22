import * as React from "react";
import { Pressable, Image, StyleSheet, Text } from "react-native";

const GoogleButton = () => {
  return (
    <Pressable style={[styles.googleButton, styles.mt28]}>
      <Image
        style={styles.carbonlogoGoogleIcon}
        resizeMode="cover"
        source={require("../assets/carbonlogogoogle.png")}
      />
      <Text style={[styles.loginWithGoogle, styles.ml10]}>
        Login with Google
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  carbonlogoGoogleIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  loginWithGoogle: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  googleButton: {
    alignSelf: "stretch",
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "rgba(132, 147, 199, 0.16)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    height: 52,
    flexShrink: 0,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GoogleButton;
