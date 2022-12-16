import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const CompletedShipment = () => {
  return (
    <View style={styles.frameView4}>
      <View style={styles.frameView2}>
        <View style={styles.frameView}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../../../assets/group-541.png")}
          />
        </View>
        <View style={[styles.frameView1, styles.ml7]}>
          <Text style={styles.text}>0</Text>
          <Text
            style={[styles.completedShipmentText, styles.mt4]}
          >{`Completed Shipment `}</Text>
        </View>
      </View>
      <View style={styles.frameView3}>
        <Text style={styles.viewAllText}>view All</Text>
        <Image
          style={[styles.unionIcon, styles.ml10]}
          resizeMode="cover"
          source={require("../../../assets/union.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  ml7: {
    marginLeft: 7,
  },
  ml10: {
    marginLeft: 10,
  },
  groupIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  completedShipmentText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  viewAllText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#ffb300",
    textAlign: "left",
  },
  unionIcon: {
    position: "relative",
    width: 5.71,
    height: 9.71,
    flexShrink: 0,
  },
  frameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView4: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#0a288f",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 28,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default CompletedShipment;
