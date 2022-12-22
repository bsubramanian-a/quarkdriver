import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import CompanyInfo from "./components/CompanyInfo";
import NotCompletedBtn from "./components/NotCompletedBtn";
import BottomMenu from "./components/BottomMenu";

const ConfirmCompany = () => {
  return (
    <View style={styles.confirmCompany}>
      <HeaderNotification
        lOGO13={require("../assets/logo-1-3.png")}
        createNewBooking="Create New Booking"
      />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <CompanyInfo frame651AlignSelf="stretch" />
        <View style={styles.frameView}>
          <NotCompletedBtn
            component="Cargo Information"
            frame450MarginTop="unset"
            componentTextAlign="center"
          />
          <NotCompletedBtn component="Loading Information" />
          <NotCompletedBtn component="Departure Information" />
        </View>
      </ScrollView>
      <BottomMenu
        vector={require("../assets/vector1.png")}
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
  confirmCompany: {
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

export default ConfirmCompany;
