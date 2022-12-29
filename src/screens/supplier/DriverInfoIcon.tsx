import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import HeaderInside from "./components/HeaderInside";
import SupplierMenu from "./components/SupplierMenu";
import DriverInfo from "./components/DriverInfo";
import BottomMenu from "../general/components/BottomMenu";

const DriverInfoIcon = () => {
  return (
    <ImageBackground
      style={styles.driverInfoIcon}
      resizeMode="stretch"
      source={require("../../assets/frame4811.png")}
    >
      <HeaderInside lOGO13={require("../../assets/logo-1-310.png")} />
      <ScrollView
        style={styles.frame}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <SupplierMenu />
        <View style={[styles.frameView, styles.mt120]}>
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
        vector={require("../../assets/vector49.png")}
        vector1={require("../../assets/vector46.png")}
        cBottomMenuPaddingVertical={10}
        cBottomMenuHeight={75}
        cBottomMenuFlexShrink={0}
        vector2={require("../../assets/vector44.png")}
        vector3={require("../../assets/vector47.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt120: {
    marginTop: 120,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 30,
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
  frameView: {
    marginBottom: 90,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
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
