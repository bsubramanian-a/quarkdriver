import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet, View } from "react-native";

type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent = ({ style }: FrameComponentType) => {
  return (
    <View style={[styles.frameView1, style]}>
      <View style={styles.frameView}>
        <Image
          style={styles.settingIcon}
          resizeMode="cover"
          source={require("../assets/setting16.png")}
        />
        <Image
          style={[styles.homeIcon, styles.ml40]}
          resizeMode="cover"
          source={require("../assets/home16.png")}
        />
        <Image
          style={[styles.profileIcon, styles.ml40]}
          resizeMode="cover"
          source={require("../assets/profile16.png")}
        />
        <Image
          style={[styles.fluentgift16FilledIcon, styles.ml40]}
          resizeMode="cover"
          source={require("../assets/fluentgift16filled16.png")}
        />
        <Image
          style={[styles.notificationIcon, styles.ml40]}
          resizeMode="cover"
          source={require("../assets/notification16.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml40: {
    marginLeft: 40,
  },
  settingIcon: {
    position: "relative",
    width: 21.56,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  homeIcon: {
    position: "relative",
    width: 21.56,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  profileIcon: {
    position: "relative",
    width: 21.56,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  fluentgift16FilledIcon: {
    position: "relative",
    width: 21.56,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  notificationIcon: {
    position: "relative",
    width: 24,
    height: 20.52,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView1: {
    position: "relative",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#5469b1",
    width: 375,
    height: 53,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent;
