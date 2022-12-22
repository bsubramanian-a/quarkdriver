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
import UploadTab from "./components/UploadTab";
import BottomMenu from "./components/BottomMenu";

const UploadDocIcon = () => {
  return (
    <ImageBackground
      style={styles.uploadDocIcon}
      resizeMode="stretch"
      source={require("../assets/frame481.png")}
    >
      <View style={styles.mainView}>
        <HeaderInside lOGO13={require("../assets/logo-1-310.png")} />
        <ScrollView
          style={styles.frame}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <SupplierMenu
            frame93BackgroundColor="#fff"
            componentColor="#8493c7"
            frame92BackgroundColor="#ffb300"
            componentColor1="#0a288f"
          />
          <View style={[styles.frameView, styles.mt90]}>
            <View style={styles.button}>
              <Image
                style={styles.circleMinusIcon}
                resizeMode="cover"
                source={require("../assets/circleminus.png")}
              />
              <Image
                style={styles.circleMinusIcon1}
                resizeMode="cover"
                source={require("../assets/circleminus1.png")}
              />
            </View>
          </View>
          <UploadTab />
        </ScrollView>
      </View>
      <BottomMenu
        vector={require("../assets/vector49.png")}
        vector1={require("../assets/vector46.png")}
        cBottomMenuPaddingVertical={10}
        cBottomMenuHeight={75}
        cBottomMenuFlexShrink={0}
        cBottomMenuMarginTop={-30}
        vector2={require("../assets/vector44.png")}
        vector3={require("../assets/vector47.png")}
      />
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
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  circleMinusIcon1: {
    position: "relative",
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
  uploadDocIcon: {
    position: "relative",
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

export default UploadDocIcon;
