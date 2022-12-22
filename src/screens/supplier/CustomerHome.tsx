import * as React from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import HeaderTransporter from "./components/HeaderTransporter";
import CreateNew from "./components/CreateNew";
import Progress from "./components/Progress";
import Completed from "./components/Completed";

const CustomerHome = () => {
  return (
    <View style={styles.customerHome}>
      <HeaderTransporter />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <CreateNew />
        <Progress />
        <Completed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 44,
    paddingTop: 32,
    paddingBottom: 20,
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  customerHome: {
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

export default CustomerHome;
