import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from "react-native";
import TInput from "./components/TInput";
import PInput from "./components/PInput";
import MainButton from "./components/MainButton";
import GoogleButton from "./components/GoogleButton";

const SignIn = () => {
  return (
    <ScrollView
      style={styles.signIn1}
      contentContainerStyle={styles.signInScrollViewContent}
    >
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="stretch"
        source={require("../assets/frame4816.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../assets/logo-1-39.png")}
        />
        <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
      </ImageBackground>
      <View style={[styles.content, styles.mt12]}>
        <Text style={styles.signIn}>Sign in</Text>
        <View style={[styles.formInput, styles.mt27]}>
          <View style={styles.email}>
            <Text style={styles.emailID}>Email ID</Text>
            <TInput />
          </View>
          <View style={[styles.password1, styles.mt13]}>
            <Text style={styles.password}>Password</Text>
            <PInput />
          </View>
        </View>
        <View style={[styles.buttonLink, styles.mt27]}>
          <Text style={styles.forgetYourPasworrd}>Forget your Pasworrd?</Text>
          <View style={[styles.linkButton, styles.mt19]}>
            <MainButton
              frame466MarginTop="unset"
              frame466Height={51}
              frame466FlexShrink={0}
              submit="Sign in"
            />
            <View style={[styles.divider, styles.mt28]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector-6.png")}
              />
              <Text style={[styles.or, styles.ml6]}>Or</Text>
              <Image
                style={[styles.vectorIcon1, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/vector-6.png")}
              />
            </View>
            <GoogleButton />
            <View style={[styles.signupLink, styles.mt28]}>
              <Text style={styles.donotHaveAnAccount}>
                Donot have an account?
              </Text>
              <Text style={[styles.signUp, styles.mt11]}>Sign Up</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt4: {
    marginTop: 4,
  },
  mt13: {
    marginTop: 13,
  },
  ml6: {
    marginLeft: 6,
  },
  mt11: {
    marginTop: 11,
  },
  mt28: {
    marginTop: 28,
  },
  mt19: {
    marginTop: 19,
  },
  mt27: {
    marginTop: 27,
  },
  mt12: {
    marginTop: 12,
  },
  signInScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  lOGO13: {
    position: "relative",
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
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
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
  signIn: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  emailID: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  email: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  password: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  password1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  formInput: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  forgetYourPasworrd: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "center",
  },
  vectorIcon: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
  },
  or: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  vectorIcon1: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
  },
  divider: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  donotHaveAnAccount: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  signUp: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#ffa824",
    textAlign: "center",
  },
  signupLink: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  linkButton: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLink: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  signIn1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default SignIn;
