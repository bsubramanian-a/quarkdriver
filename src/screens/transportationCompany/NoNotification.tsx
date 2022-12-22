import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";

const NoNotification = () => {
  return (
    <View style={styles.noNotification}>
      <HeaderNotification />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView}>
          <Image
            style={styles.noNotificationIcon}
            resizeMode="cover"
            source={require("../assets/nonotification.png")}
          />
          <Text style={[styles.canNotFindNotificationNow, styles.mt14]}>
            can not find notification now
          </Text>
        </View>
      </ScrollView>
      <View style={styles.tBottomMenu}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector39.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 126,
    paddingBottom: 20,
  },
  noNotificationIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
    overflow: "hidden",
  },
  canNotFindNotificationNow: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  vectorIcon: {
    position: "relative",
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon1: {
    position: "relative",
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon2: {
    position: "relative",
    width: 21,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon3: {
    position: "relative",
    width: 23,
    height: 27,
    flexShrink: 0,
  },
  tBottomMenu: {
    alignSelf: "stretch",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#5469b1",
    height: 75,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  noNotification: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 815,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default NoNotification;
