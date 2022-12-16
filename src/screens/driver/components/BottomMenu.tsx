import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const BottomMenu = () => {
  return (
    <View style={styles.frameView}>
      <Image
        style={styles.settingIcon}
        resizeMode="cover"
        source={require("../../../assets/setting.png")}
      />
      <Image
        style={styles.homeIcon}
        resizeMode="cover"
        source={require("../../../assets/home.png")}
      />
      <Image
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../../../assets/profile.png")}
      />
      <Image
        style={styles.fluentgift16FilledIcon}
        resizeMode="cover"
        source={require("../../../assets/fluentgift16filled.png")}
      />
      <Image
        style={styles.notificationIcon}
        resizeMode="cover"
        source={require("../../../assets/notification.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    alignSelf: "stretch",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#5469b1",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 54,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BottomMenu;
