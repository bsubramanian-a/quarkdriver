import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CreateNew = () => {
  return (
    <View style={styles.createNew}>
      <View style={styles.frameView2}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../../../assets/frame-578.png")}
        />
        <View style={[styles.frameView1, styles.ml7]}>
          <Text style={styles.createNewBooking}>Create New Booking</Text>
          <View style={[styles.frameView, styles.mt4]}>
            <Text style={styles.youWillRecieveAnOTPCodeF}>
              You will recieve an OTP code from
            </Text>
            <Text style={[styles.transportationCompany, styles.mt1]}>
              Transportation Company
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: 1,
  },
  mt4: {
    marginTop: 4,
  },
  ml7: {
    marginLeft: 7,
  },
  frameIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  createNewBooking: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  youWillRecieveAnOTPCodeF: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#5469b1",
    textAlign: "left",
  },
  transportationCompany: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#5469b1",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  createNew: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#ffca4d",
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 36,
    paddingRight: 34,
    paddingBottom: 36,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CreateNew;
