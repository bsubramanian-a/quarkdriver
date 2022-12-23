import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import CompletedInfo from "./components/CompletedInfo";
import BottomMenu from "../general/components/BottomMenu";

const CompletedBooking = () => {
  return (
    <View style={styles.completedBooking}>
      <HeaderNotification
        lOGO13={{ uri: "logo-1-35@3x.png" }}
        group425Width={169}
        group410Width={169}
        createNewBooking="Completed Bookings "
      />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView}>
          <CompletedInfo frame606MarginTop="unset" />
          <CompletedInfo />
          <CompletedInfo />
        </View>
      </ScrollView>
      <BottomMenu
        vector={require("../../assets/vector1.png")}
        vector1={require("../../assets/vector2.png")}
        vector2={require("../../assets/vector.png")}
        vector3={require("../../assets/vector3.png")}
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
    paddingVertical: 0,
  },
  frameView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  completedBooking: {
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

export default CompletedBooking;
