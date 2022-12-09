import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const HeaderDCommon = () => {
  return (
    <View style={styles.frameView5}>
      <View style={styles.frameView4}>
        <View style={styles.frameView2}>
          <View style={styles.shipmentNumberView}>
            <View style={styles.frameView}>
              <Text style={styles.shipmentNumberText}>Shipment Number</Text>
              <Text style={styles.text}>32156</Text>
            </View>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-88.png")}
            />
          </View>
          <View style={[styles.freightCostView, styles.mt13]}>
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
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-88.png")}
            />
          </View>
        </View>
        <View style={styles.frameView3}>
          <Image
            style={styles.ellipseIcon2}
            resizeMode="cover"
            source={require("../assets/ellipse-77.png")}
          />
          <Text style={[styles.quarki12456Text, styles.mt2]}>Quarki 12456</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt13: {
    marginTop: 13,
  },
  mt2: {
    marginTop: 2,
  },
  shipmentNumberText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    width: 133,
    height: 20,
  },
  text: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#ffa824",
    textAlign: "left",
    width: 46,
    height: 18,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 18,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "absolute",
    top: 6,
    left: 0,
    width: 8,
    height: 8,
  },
  shipmentNumberView: {
    position: "relative",
    width: 151,
    height: 38,
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
    width: 143,
    height: 20,
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
    position: "relative",
    color: "#ffa824",
    textAlign: "left",
    width: 59,
    height: 18,
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 18,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 6,
    left: 0,
    width: 8,
    height: 8,
  },
  freightCostView: {
    position: "relative",
    width: 161,
    height: 38,
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  ellipseIcon2: {
    position: "relative",
    width: 50,
    height: 52,
    flexShrink: 0,
  },
  quarki12456Text: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
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

export default HeaderDCommon;
