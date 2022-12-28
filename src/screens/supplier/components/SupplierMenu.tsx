import * as React from "react";
import { useMemo } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

type SupplierMenuType = {
  /** Style props */
  frame93BackgroundColor?: string;
  componentColor?: string;
  frame92BackgroundColor?: string;
  componentColor1?: string;
  frame95BackgroundColor?: string;
  componentColor2?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SupplierMenu = ({
  frame93BackgroundColor,
  componentColor,
  frame92BackgroundColor,
  componentColor1,
  frame95BackgroundColor,
  componentColor2,
}: SupplierMenuType) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frame93BackgroundColor),
    };
  }, [frame93BackgroundColor]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor),
    };
  }, [componentColor]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frame92BackgroundColor),
    };
  }, [frame92BackgroundColor]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor1),
    };
  }, [componentColor1]);

  const frameView5Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frame95BackgroundColor),
    };
  }, [frame95BackgroundColor]);

  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("color", componentColor2),
    };
  }, [componentColor2]);

  return (
    <ScrollView
      style={styles.menu}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.menuScrollViewContent}
    >
      <View style={styles.frameView}>
        <Text style={styles.text}>Booking</Text>
      </View>
      <View style={[styles.frameView1, styles.ml4, frameView3Style]}>
        <Text style={[styles.text1, text2Style]}>Trucks</Text>
      </View>
      <View style={[styles.frameView2, styles.ml4, frameView4Style]}>
        <Text style={[styles.text2, text3Style]}>Uploading Documents</Text>
      </View>
      <View style={[styles.frameView3, styles.ml4, frameView5Style]}>
        <Text style={[styles.text3, text4Style]}>Messages</Text>
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
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView: {
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
  text1: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView1: {
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
  text2: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView2: {
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
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView3: {
    borderRadius: 40,
    backgroundColor: "#fff",
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 9,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menu: {
    alignSelf: "stretch",
    width: "100%",
  },
});

export default SupplierMenu;
