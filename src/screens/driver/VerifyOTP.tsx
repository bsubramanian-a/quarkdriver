import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
} from "react-native";

const VerifyOTP = () => {
  return (
    <View style={styles.verifyOTPView}>
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="stretch"
        source={require("../assets/frame481.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../assets/logo-1-31.png")}
        />
        <Text style={[styles.qUARKText, styles.mt_7]}>QUARK</Text>
      </ImageBackground>
      <View style={[styles.frameView, styles.mt38]}>
        <Text style={styles.welcomeToQuark}>Welcome to Quark</Text>
        <Text style={[styles.pleaseEnterYourOTPNumber, styles.mt20]}>
          Please Enter your OTP Number
        </Text>
      </View>
      <View style={[styles.frameView3, styles.mt38]}>
        <View style={styles.frameView1}>
          <Text style={styles.text}>879-7585-256</Text>
          <Text style={styles.text1}>{` `}</Text>
        </View>
        <View style={[styles.frameView2, styles.mt68]}>
          <Text style={styles.resendOTPCode}>Resend OTP Code</Text>
          <Pressable style={[styles.framePressable, styles.mt29]}>
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt20: {
    marginTop: 20,
  },
  mt29: {
    marginTop: 29,
  },
  mt68: {
    marginTop: 68,
  },
  mt38: {
    marginTop: 38,
  },
  lOGO13: {
    position: "relative",
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARKText: {
    position: "relative",
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
  welcomeToQuark: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  pleaseEnterYourOTPNumber: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 28,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#b6bfdd",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#b6bfdd",
    textAlign: "left",
  },
  frameView1: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#5469b1",
    borderWidth: 1,
    width: 343,
    flexDirection: "row",
    paddingHorizontal: 164,
    paddingVertical: 21,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  resendOTPCode: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#ffb300",
    textAlign: "left",
  },
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
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  verifyOTPView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 815,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default VerifyOTP;
