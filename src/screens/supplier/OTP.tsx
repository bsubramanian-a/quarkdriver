import * as React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import TInput from "./components/TInput";
import SubmitBtn from "./components/SubmitBtn";
import DisableBtn from "./components/DisableBtn";
import BottomMenu from "./components/BottomMenu";

const OTP = () => {
  return (
    <View style={styles.oTP}>
      <HeaderNotification
        lOGO13={require("../assets/logo-1-3.png")}
        createNewBooking="Create New Booking"
      />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView1}>
          <Text style={styles.youWillRecieveAnOTPCodeF}>
            <Text style={styles.youWillRecieve}>
              You will recieve an OTP code from Transportation Company
            </Text>
          </Text>
          <View style={[styles.frameView, styles.mt18]}>
            <Text
              style={styles.pleaseTypeAndSubmit}
            >{`Please type and Submit `}</Text>
            <TInput
              frame458Placeholder="Type OTP code"
              frame458AlignSelf="unset"
              frame458Width={229}
              frame458BorderStyle="unset"
              frame458BorderColor="unset"
              frame458PaddingHorizontal="unset"
              frame458PaddingVertical="unset"
              frame458JustifyContent="center"
              frame458FontSize={10}
              frame458Color="unset"
              frame458MarginTop={6}
              frame458BackgroundColor="#fff"
              frame458Height={45}
              frame458FlexShrink={0}
              frame458Padding={10}
              frame458TextAlign="center"
            />
          </View>
          <SubmitBtn
            frame654BorderRadius={10}
            frame654BackgroundColor="#ffb300"
            frame654PaddingHorizontal={12}
            frame654PaddingVertical={8}
            frame654JustifyContent="center"
            frame654Width={106}
            frame654MarginTop={18}
            sUBMIT="Submit"
            sUBMITFontSize={13}
            sUBMITColor="#08288d"
            sUBMITTextAlign="left"
          />
        </View>
        <View style={styles.frameView2}>
          <DisableBtn component="Cargo Information" />
          <DisableBtn
            frame451MarginTop={14}
            component="Loading Information"
            componentTextAlign="left"
            componentWidth="unset"
          />
          <DisableBtn
            frame451MarginTop={14}
            component="Departure Information"
            componentTextAlign="left"
          />
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
  mt6: {
    marginTop: 6,
  },
  mt18: {
    marginTop: 18,
  },
  mt14: {
    marginTop: 14,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  youWillRecieve: {
    marginStart: 0,
    marginEnd: 0,
  },
  youWillRecieveAnOTPCodeF: {
    position: "relative",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
    width: 305,
    height: 34,
  },
  pleaseTypeAndSubmit: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView1: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "#d8dee8",
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 19,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView2: {
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
  oTP: {
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

export default OTP;
