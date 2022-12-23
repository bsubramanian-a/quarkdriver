import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DriverInfo = () => {
  return (
    <View style={styles.driverInfo}>
      <View style={styles.driverD}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-78.png")}
        />
        <View style={[styles.frameView, styles.ml16]}>
          <Text style={styles.kevinLarsem}>Kevin Larsem</Text>
          <Text style={[styles.driverA11, styles.mt9]}>Driver A1-1</Text>
        </View>
      </View>
      <View style={[styles.frameView3, styles.mt11]}>
        <View style={styles.frameView1}>
          <View style={styles.truckNumber}>
            <Text style={styles.truckPlateNumber}>Truck Plate Number</Text>
            <Text style={styles.text}>784-54288-96</Text>
          </View>
          <View style={[styles.capacity, styles.mt24]}>
            <Text style={styles.capacityOfTruck}>{`Capacity of Truck  `}</Text>
            <Text style={styles.ton}>25,000 Ton</Text>
          </View>
        </View>
        <View style={styles.frameView2}>
          <View style={styles.dateLoading}>
            <Text style={styles.dateOfLoading}>{`Date of Loading `}</Text>
            <Text style={styles.jan2022}>4Jan, 2022</Text>
          </View>
          <View style={[styles.statusView, styles.mt24]}>
            <Text style={styles.status}>Status</Text>
            <Text style={styles.underLoading}>Under loading</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
  },
  ml16: {
    marginLeft: 16,
  },
  mt24: {
    marginTop: 24,
  },
  mt11: {
    marginTop: 11,
  },
  ellipseIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  kevinLarsem: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
    width: 193,
  },
  driverA11: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
    width: 74,
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  driverD: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  truckPlateNumber: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
    width: 107,
  },
  text: {
    position: "absolute",
    top: 18,
    left: 0,
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 93,
  },
  truckNumber: {
    position: "relative",
    width: 107,
    height: 31,
    flexShrink: 0,
  },
  capacityOfTruck: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
    width: 100,
  },
  ton: {
    position: "absolute",
    top: 18,
    left: 0,
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 64,
  },
  capacity: {
    position: "relative",
    width: 100,
    height: 31,
    flexShrink: 0,
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dateOfLoading: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
    width: 89,
  },
  jan2022: {
    position: "absolute",
    top: 18,
    left: 0,
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 74,
  },
  dateLoading: {
    position: "relative",
    width: 89,
    height: 31,
    flexShrink: 0,
  },
  status: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
    width: 37,
  },
  underLoading: {
    position: "absolute",
    top: 18,
    left: 0,
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 79,
  },
  statusView: {
    position: "relative",
    width: 79,
    height: 31,
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    width: 292,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  driverInfo: {
    alignSelf: "stretch",
    borderRadius: 30,
    backgroundColor: "#fff",
    height: 185,
    flexShrink: 0,
    flexDirection: "column",
    paddingLeft: 24,
    paddingTop: 20,
    paddingRight: 46,
    paddingBottom: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default DriverInfo;
