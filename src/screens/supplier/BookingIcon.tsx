import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";
import HeaderInside from "./components/HeaderInside";
import BookingTab from "./components/BookingTab";
import BottomMenu from "../general/components/BottomMenu";

const BookingIcon = () => {
  return (
    <ImageBackground
      style={styles.bookingIcon}
      resizeMode="stretch"
      source={require("../assets/frame4811.png")}
    >
      <View style={styles.frame1}>
        <HeaderInside lOGO13={require("../assets/logo-1-39.png")} />
        <ScrollView
          style={styles.frame}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <ScrollView
            style={styles.menu}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.menuScrollViewContent}
          >
            <View style={styles.frameView}>
              <Text style={styles.text}>Booking</Text>
            </View>
            <View style={[styles.frameView1, styles.ml4]}>
              <Text style={styles.text1}>Trucks</Text>
            </View>
            <View style={[styles.frameView2, styles.ml4]}>
              <Text style={styles.text2}>Uploading Documents</Text>
            </View>
            <View style={[styles.frameView3, styles.ml4]}>
              <Text style={styles.text3}>Messages</Text>
            </View>
          </ScrollView>
          <View style={[styles.sizeAdjusterIcons, styles.mt90]}>
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
          <BookingTab />
        </ScrollView>
      </View>
      <BottomMenu
        vector={require("../assets/vector45.png")}
        vector1={require("../assets/vector46.png")}
        cBottomMenuPaddingVertical={10}
        cBottomMenuHeight={75}
        cBottomMenuFlexShrink={0}
        cBottomMenuMarginTop={-80}
        vector2={require("../assets/vector44.png")}
        vector3={require("../assets/vector47.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  menuScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 10,
  },
  mt90: {
    marginTop: 90,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  mt_80: {
    marginTop: -80,
  },
  text: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    borderRadius: 40,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView1: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView2: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView3: {
    borderRadius: 40,
    backgroundColor: "#fff",
    width: 109,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menu: {
    alignSelf: "stretch",
    width: "100%",
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
  sizeAdjusterIcons: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame: {
    alignSelf: "stretch",
    flex: 1,
  },
  frame1: {
    alignSelf: "stretch",
    height: 815,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bookingIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
});

export default BookingIcon;
