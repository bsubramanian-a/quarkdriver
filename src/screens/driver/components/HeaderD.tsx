import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const HeaderD = () => {
  return (
    <View style={styles.frameView5}>
      <View style={styles.frameView4}>
        <View style={styles.frameView2}>
          <View style={styles.shipmentNumberView}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../../../assets/ellipse-88.png")}
            />
            <View style={styles.frameView}>
              <Text style={styles.shipmentNumberText}>Shipment Number</Text>
              <Text style={styles.text}>32156</Text>
            </View>
          </View>
          <View style={[styles.freightCostView, styles.mt13]}>
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../../../assets/ellipse-88.png")}
            />
            <View style={styles.frameView1}>
              <Text style={styles.freightCostPerTon}>
                <Text style={styles.freightCost}>{`Freight cost `}</Text>
                <Text style={styles.perTonText}>(Per ton)</Text>
              </Text>
              <Text style={styles.uSDText1}>
                <Text style={styles.text1}>{`500 `}</Text>
                <Text style={styles.uSDText}>USD</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frameView3}>
          <Image
            style={styles.logisticIcon2}
            resizeMode="cover"
            source={require("../../../assets/56263-logistic-icon-2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt13: {
    marginTop: 13,
  },
  shipmentNumberText: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#ffa824",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    marginTop: 7,
    marginEnd: 7,
    width: 8,
    height: 8,
  },
  shipmentNumberView: {
    flexDirection: "row",
    flexShrink: 0,
  },
  freightCost: {
    fontSize: 16,
  },
  perTonText: {
    fontSize: 14,
  },
  freightCostPerTon: {
    position: "relative",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  text1: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  uSDText: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
  uSDText1: {
    color: "#ffa824",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon1: {
    marginEnd: 7,
    marginTop: 7,
    width: 8,
    height: 8,
  },
  freightCostView: {
    flexDirection: "row",
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logisticIcon2: {
    width: 72,
    height: 72,
    flexShrink: 0,
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView5: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 163,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 54,
    paddingBottom: 16,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default HeaderD;
