import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import BottomMenu from "./components/BottomMenu";

const NoNotification = () => {
  return (
    <View style={styles.noNotification}>
      <HeaderNotification
        lOGO13={require("../assets/logo-1-37.png")}
        group425Width={95}
        group410Width={95}
        createNewBooking="Notification"
      />
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
      <BottomMenu
        vector={require("../assets/vector1.png")}
        vector1={require("../assets/vector2.png")}
        vector2={require("../assets/vector.png")}
        vector3={require("../assets/vector3.png")}
      />
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
