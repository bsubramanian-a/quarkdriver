import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
} from "react-native";
import MainButton from "./components/MainButton";

const VerifyEmail = () => {
  return (
    <ScrollView
      style={styles.verifyEmail1}
      contentContainerStyle={styles.verifyEmailScrollViewContent}
    >
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="stretch"
        source={require("../../assets/frame4816.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../../assets/logo-1-39.png")}
        />
        <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
      </ImageBackground>
      <View style={[styles.frameView, styles.mt30]}>
        <Text style={styles.verifyEmail}>Verify email</Text>
        <Text style={[styles.anEmailWithAVerificationC, styles.mt20]}>
          <Text style={styles.anEmailWith}>
            an email with a verification code has been
          </Text>
          <Text style={styles.sentToYour}> sent to your email</Text>
        </Text>
      </View>
      <View style={[styles.frameView3, styles.mt30]}>
        <TextInput
          style={styles.frameTextInput}
          placeholder="Placeholder text"
          keyboardType="email-address"
        />
        <View style={[styles.frameView2, styles.mt51]}>
          <View style={styles.frameView1}>
            <Text style={styles.doNotReciveCode}>Do not recive code?</Text>
            <Text style={[styles.requestAgain, styles.ml1]}>Request again</Text>
          </View>
          <MainButton frame466MarginTop={43} submit="Verify email" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt20: {
    marginTop: 20,
  },
  ml1: {
    marginLeft: 1,
  },
  mt43: {
    marginTop: 43,
  },
  mt51: {
    marginTop: 51,
  },
  mt30: {
    marginTop: 30,
  },
  verifyEmailScrollViewContent: {
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
  verifyEmail: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  anEmailWith: {
    marginStart: 0,
    marginEnd: 0,
  },
  sentToYour: {
    margin: 0,
  },
  anEmailWithAVerificationC: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 28,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameTextInput: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#5469b1",
    borderWidth: 1,
    height: 56,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    color: "#0A288F",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
  },
  doNotReciveCode: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  requestAgain: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#ffb300",
    textAlign: "center",
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "row",
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
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  verifyEmail1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default VerifyEmail;
