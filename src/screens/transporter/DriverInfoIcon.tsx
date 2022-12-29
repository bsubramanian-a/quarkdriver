import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import Menu from "./components/Menu";
import DriverInfo from "./components/DriverInfo";
import BottomMenu from "../general/components/BottomMenu";
import HeaderInside from "../general/components/HeaderInside";

const DriverInfoIcon = () => {
  return (
    <ImageBackground
      style={styles.driverInfoIcon}
      resizeMode="stretch"
      source={require("../../assets/frame4811.png")}
    >
      <HeaderInside />
      <ScrollView
        style={styles.frame}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Menu
          mBookingBackgroundColor="#fff"
          componentColor="#8493c7"
          mTrucksBackgroundColor="#ffb300"
          componentColor1="#08288d"
        />
        <View style={[styles.frameView2, styles.mt120]}>
          <View style={styles.button}>
            <Image
              style={styles.circleMinusIcon}
              resizeMode="cover"
              source={require("../../assets/circleminus.png")}
            />
            <Image
              style={styles.circleMinusIcon1}
              resizeMode="cover"
              source={require("../../assets/circleminus1.png")}
            />
          </View>
        </View>
        <DriverInfo />
      </ScrollView>
      <BottomMenu
        vector={require("../../assets/vector1.png")}
        vector1={require("../../assets/vector2.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt120: {
    marginTop: 120,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,
  },
  combinedShapeIcon: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleMinusIcon: {
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  circleMinusIcon1: {
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  button: {
    borderRadius: 32,
    backgroundColor: "#fff",
    shadowColor: "rgba(10, 40, 143, 0.27)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 32,
    height: 68,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 90,
    justifyContent: "flex-end",
  },
  frame: {
    alignSelf: "stretch",
    flex: 1,
  },
  driverInfoIcon: {
    flex: 1,
    width: "100%",
    height: 815,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
});

export default DriverInfoIcon;
