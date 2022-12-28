import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderTransporter from "../general/components/HeaderTransporter";
import TabMain from "./components/TabMain";
import CompletedTab from "./components/CompletedTab";
import BottomMenu from "../general/components/BottomMenu";

const CompletedBooking = () => {
  return (
    <View style={styles.completedBooking}>
      <HeaderTransporter />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <TabMain
          frame600BorderColor="#8493c7"
          inProgressBookingColor="#8493c7"
          frame601BorderColor="#0a288f"
          completedBookingColor="#0a288f"
        />
        <CompletedTab />
      </ScrollView>
      <BottomMenu
        vector={require("../../assets/vector1.png")}
        vector1={require("../../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 17,
    paddingBottom: 20,
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  completedBooking: {
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
