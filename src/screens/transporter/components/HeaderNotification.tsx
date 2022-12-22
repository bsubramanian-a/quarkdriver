import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HeaderNotification = () => {
  return (
    <View style={styles.headerTransporter}>
      <View style={styles.headerView}>
        <Image
          style={styles.combinedShapeIcon}
          resizeMode="cover"
          source={require("../assets/combinedshape6.png")}
        />
        <View style={styles.logoView}>
          <Image
            style={styles.lOGO13}
            resizeMode="cover"
            source={require("../assets/logo-1-36.png")}
          />
          <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-766.png")}
        />
      </View>
      <View style={[styles.groupView1, styles.mt47]}>
        <View style={styles.groupView}>
          <Text style={styles.notification}>Notification</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt47: {
    marginTop: 47,
  },
  combinedShapeIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  lOGO13: {
    position: "relative",
    width: 55,
    height: 55,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  logoView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "relative",
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  headerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notification: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 95,
    height: 21,
  },
  groupView1: {
    position: "relative",
    width: 95,
    height: 21,
    flexShrink: 0,
  },
  headerTransporter: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 166,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 23,
    paddingBottom: 11,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default HeaderNotification;
