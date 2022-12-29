import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { red100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

type TabMainType = {
  /** Style props */
  frame600BorderColor?: string;
  inProgressBookingColor?: string;
  frame601BorderColor?: string;
  completedBookingColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TabMain = ({
  frame600BorderColor,
  inProgressBookingColor,
  frame601BorderColor,
  completedBookingColor,
}: TabMainType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", frame600BorderColor),
    };
  }, [frame600BorderColor]);

  const inProgressBookingStyle = useMemo(() => {
    return {
      ...getStyleValue("color", inProgressBookingColor),
    };
  }, [inProgressBookingColor]);

  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", frame601BorderColor),
    };
  }, [frame601BorderColor]);

  const completedBookingStyle = useMemo(() => {
    return {
      ...getStyleValue("color", completedBookingColor),
    };
  }, [completedBookingColor]);

  return (
    <View style={styles.frameView2}>
      <View style={[styles.frameView, frameView1Style]}>
        <Text style={[styles.inProgressBooking, inProgressBookingStyle]}>
          In progress Booking
        </Text>
      </View>
      <View style={[styles.frameView1, frameView2Style]}>
        <Text style={[styles.completedBooking, completedBookingStyle]}>
          Completed Booking
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inProgressBooking: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  frameView: {
    borderStyle: "solid",
    borderColor: "#0a288f",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    width: "48%",
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 13,
    paddingBottom: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  completedBooking: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "center",
  },
  frameView1: {
    borderStyle: "solid",
    borderColor: "#8493c7",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    width: "48%",
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 13,
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TabMain;
