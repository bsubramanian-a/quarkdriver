import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import HeaderInside from "../general/components/HeaderInside";
import BottomMenu from "../general/components/BottomMenu";
import Menu from "./components/Menu";
import TrucksTab from "./components/TrucksTab";

const TrucksIcon = () => {
  return (
    <ImageBackground
      style={styles.trucksIcon}
      resizeMode="stretch"
      source={require("../../assets/frame481.png")}
    >
      <View style={styles.mainView}>
        <HeaderInside lOGO13={require("../../assets/logo-1-3.png")} />
        <ScrollView
          style={styles.frame}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <Menu
            mBookingBackgroundColor="#fff"
            componentColor="#8493c7"
            mTrucksBackgroundColor="#ffb300"
            componentColor1="#0a288f"
          />
          <View style={[styles.frameView, styles.mt90]}>
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
          <TrucksTab />
        </ScrollView>
      </View>
      <BottomMenu />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt90: {
    marginTop: 90,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  mt_30: {
    marginTop: -30,
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
  mainView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  trucksIcon: {
    flex: 1,
    width: "100%",
    height: 805,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
});

export default TrucksIcon;
