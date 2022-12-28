import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Completed = () => {
  return (
    <View style={styles.progress}>
      <View style={styles.frameView3}>
        <View style={styles.frameView1}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../../../assets/frame-589.png")}
          />
          <View style={[styles.frameView, styles.ml7]}>
            <Text style={styles.text}>15</Text>
            <Text
              style={[styles.inProgressBookings, styles.mt4]}
            >{`Completed Bookings `}</Text>
          </View>
        </View>
        <View style={styles.frameView2}>
          <Text style={styles.viewAll}>View All</Text>
          <Image
            style={[styles.unionIcon, styles.ml6]}
            resizeMode="cover"
            source={require("../../../assets/union.png")}
          />
        </View>
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
  ml6: {
    marginLeft: 6,
  },
  frameIcon: {
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  inProgressBookings: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 8,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewAll: {
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#ffb300",
    textAlign: "left",
  },
  unionIcon: {
    width: 6,
    height: 10,
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  progress: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#0a288f",
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 36,
    paddingRight: 19,
    paddingBottom: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Completed;
