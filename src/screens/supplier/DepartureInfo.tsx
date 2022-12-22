import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import CompanyInfo from "./components/CompanyInfo";
import CompletedBtn from "./components/CompletedBtn";
import BottomMenu from "./components/BottomMenu";

const DepartureInfo = () => {
  return (
    <View style={styles.departureInfo}>
      <HeaderNotification
        lOGO13={require("../assets/logo-1-32.png")}
        createNewBooking="Create New Booking"
      />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <CompanyInfo />
        <View style={styles.frameView}>
          <CompletedBtn component="Cargo Information" />
          <CompletedBtn
            frame451MarginTop={14}
            component="Loading Information"
            componentTextAlign="left"
          />
          <CompletedBtn
            frame451MarginTop={14}
            component="Departure Information"
            componentTextAlign="left"
          />
        </View>
      </ScrollView>
      <BottomMenu
        vector={{ uri: "vector9@3x.png" }}
        vector1={{ uri: "vector6@3x.png" }}
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
    paddingTop: 50,
  },
  frameView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 14,
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  departureInfo: {
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

export default DepartureInfo;
