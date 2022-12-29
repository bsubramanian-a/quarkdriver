import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderTransporter from "../general/components/HeaderTransporter";
import TabMain from "./components/TabMain";
import ProgressInfo from "./components/ProgressInfo";
import BottomMenu from "../general/components/BottomMenu";

const ProgressBooking = () => {
  return (
    <View style={styles.progressBooking}>
      <HeaderTransporter />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <TabMain />
        <View style={styles.frameView}>
          <ProgressInfo />
          <ProgressInfo frame604MarginTop={21} />
        </View>
      </ScrollView>
      <BottomMenu
        vector={require("../../assets/vector5.png")}
        vector1={require("../../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt21: {
    marginTop: 21,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 17,
    paddingBottom: 20,
  },
  frameView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  progressBooking: {
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

export default ProgressBooking;
