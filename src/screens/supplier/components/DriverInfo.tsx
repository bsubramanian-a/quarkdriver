import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DriverInfo = () => {
  return (
    <View style={styles.driverInfo}>
      <View style={styles.driverD}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../../../assets/ellipse-78.png")}
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
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  kevinLarsem: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  driverA11: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
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
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  text: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  truckNumber: {
    flexShrink: 0,
  },
  capacityOfTruck: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  ton: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  capacity: {
    flexShrink: 0,
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dateOfLoading: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  jan2022: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  dateLoading: {
    flexShrink: 0,
  },
  status: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  underLoading: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  statusView: {
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    width: "100%",
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
