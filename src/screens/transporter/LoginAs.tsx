import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import MainButton from "./components/MainButton";

const LoginAs = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState<boolean>(false);
  const [rectangleCheckbox1checked, setRectangleCheckbox1checked] =
    useState<boolean>(false);
  const [rectangleCheckbox2checked, setRectangleCheckbox2checked] =
    useState<boolean>(false);
  const [rectangleCheckbox3checked, setRectangleCheckbox3checked] =
    useState<boolean>(false);

  return (
    <ScrollView
      style={styles.loginAs}
      contentContainerStyle={styles.loginAsScrollViewContent}
    >
      <ImageBackground
        style={styles.logoHeaderIcon}
        resizeMode="stretch"
        source={require("../assets/frame4816.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../assets/logo-1-38.png")}
        />
        <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
      </ImageBackground>
      <View style={[styles.content, styles.mt38]}>
        <Text style={styles.pleaseChooseOneOfFollowing}>
          Please Choose one of following options
        </Text>
        <View style={[styles.frameView4, styles.mt30]}>
          <View style={styles.frameView}>
            <View style={styles.rectangleView}>
              <RNPCheckbox
                status={rectangleCheckboxchecked ? "checked" : "unchecked"}
                onPress={() =>
                  setRectangleCheckboxchecked(!rectangleCheckboxchecked)
                }
                color="#08288d"
              />
            </View>
            <Text style={[styles.driver, styles.ml15]}>Driver</Text>
          </View>
          <View style={[styles.frameView1, styles.mt24]}>
            <View style={styles.rectangleView1}>
              <RNPCheckbox
                status={rectangleCheckbox1checked ? "checked" : "unchecked"}
                onPress={() =>
                  setRectangleCheckbox1checked(!rectangleCheckbox1checked)
                }
                color="#08288d"
              />
            </View>
            <Text style={[styles.buyer, styles.ml15]}>Buyer</Text>
          </View>
          <View style={[styles.frameView2, styles.mt24]}>
            <View style={styles.rectangleView2}>
              <RNPCheckbox
                status={rectangleCheckbox2checked ? "checked" : "unchecked"}
                onPress={() =>
                  setRectangleCheckbox2checked(!rectangleCheckbox2checked)
                }
                color="#08288d"
              />
            </View>
            <Text style={[styles.reciver, styles.ml15]}>Reciver</Text>
          </View>
          <View style={[styles.frameView3, styles.mt24]}>
            <View style={styles.rectangleView3}>
              <RNPCheckbox
                status={rectangleCheckbox3checked ? "checked" : "unchecked"}
                onPress={() =>
                  setRectangleCheckbox3checked(!rectangleCheckbox3checked)
                }
                color="#08288d"
              />
            </View>
            <Text style={[styles.transportationCompany, styles.ml15]}>
              Transportation company
            </Text>
          </View>
        </View>
        <MainButton submit="Submit" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  ml15: {
    marginLeft: 15,
  },
  mt24: {
    marginTop: 24,
  },
  mt30: {
    marginTop: 30,
  },
  mt38: {
    marginTop: 38,
  },
  loginAsScrollViewContent: {
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
  logoHeaderIcon: {
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
  pleaseChooseOneOfFollowing: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  rectangleView: {
    position: "relative",
  },
  driver: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView1: {
    position: "relative",
  },
  buyer: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView2: {
    position: "relative",
  },
  reciver: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView3: {
    position: "relative",
  },
  transportationCompany: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView4: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 17,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loginAs: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default LoginAs;
