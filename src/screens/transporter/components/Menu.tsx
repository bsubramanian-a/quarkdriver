import * as React from "react";
import { useMemo } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

type MenuType = {
  /** Style props */
  mBookingBackgroundColor?: string;
  componentColor?: string;
  mTrucksBackgroundColor?: string;
  componentColor1?: string;
  mLoadingBackgroundColor?: string;
  componentColor2?: string;
  mDepartureBackgroundColor?: string;
  componentColor3?: string;
  mCargoBackgroundColor?: string;
  componentColor4?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Menu = ({
  mBookingBackgroundColor,
  componentColor,
  mTrucksBackgroundColor,
  componentColor1,
  mLoadingBackgroundColor,
  componentColor2,
  mDepartureBackgroundColor,
  componentColor3,
  mCargoBackgroundColor,
  componentColor4,
}: MenuType) => {
  const mBookingStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", mBookingBackgroundColor),
    };
  }, [mBookingBackgroundColor]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor),
    };
  }, [componentColor]);

  const mTrucksStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", mTrucksBackgroundColor),
    };
  }, [mTrucksBackgroundColor]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor1),
    };
  }, [componentColor1]);

  const mLoadingStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", mLoadingBackgroundColor),
    };
  }, [mLoadingBackgroundColor]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor2),
    };
  }, [componentColor2]);

  const mDepartureStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", mDepartureBackgroundColor),
    };
  }, [mDepartureBackgroundColor]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor3),
    };
  }, [componentColor3]);

  const mCargoStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", mCargoBackgroundColor),
    };
  }, [mCargoBackgroundColor]);

  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor4),
    };
  }, [componentColor4]);

  return (
    <ScrollView
      style={styles.menu}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.menuScrollViewContent}
    >
      <View style={[styles.mBooking, mBookingStyle]}>
        <Text style={[styles.text, textStyle]}>Booking</Text>
      </View>
      <View style={[styles.mTrucks, styles.ml4, mTrucksStyle]}>
        <Text style={[styles.text1, text1Style]}>Trucks</Text>
      </View>
      <View style={[styles.mLoading, styles.ml4, mLoadingStyle]}>
        <Text style={[styles.text2, text2Style]}>Loading Information</Text>
      </View>
      <View style={[styles.mDeparture, styles.ml4, mDepartureStyle]}>
        <Text style={[styles.text3, text3Style]}>Departure Information</Text>
      </View>
      <View style={[styles.mCargo, styles.ml4, mCargoStyle]}>
        <Text style={[styles.text4, text4Style]}>Cargo Information</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  menuScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  text: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  mBooking: {
    borderRadius: 40,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  mTrucks: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  mLoading: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  mDeparture: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  mCargo: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 9,
    paddingRight: 18,
    paddingBottom: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menu: {
    alignSelf: "stretch",
    width: "100%",
  },
});

export default Menu;
