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
import MainButton from "./components/MainButton";

const ResetPassword = () => {
  return (
    <ScrollView
      style={styles.resetPassword1}
      contentContainerStyle={styles.resetPasswordScrollViewContent}
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
        <Text style={styles.resetPassword}>Reset Password</Text>
        <Text style={[styles.pleaseEnterYourEmailAddres, styles.mt20]}>
          please enter your email address associated with your account
        </Text>
      </View>
      <View style={[styles.frameView1, styles.mt30]}>
        <TInput
          frame458Color="#0A288F"
          frame458JustifyContent="center"
          frame458MarginTop="unset"
        />
        <MainButton frame466MarginTop={82} submit="Verify email" />
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
  mt82: {
    marginTop: 82,
  },
  mt30: {
    marginTop: 30,
  },
  resetPasswordScrollViewContent: {
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
  resetPassword: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  pleaseEnterYourEmailAddres: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
    width: 200,
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 28,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  resetPassword1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default ResetPassword;
