import * as React from "react";
import { useMemo } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

type CompanyInfoType = {
  /** Style props */
  frame651AlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CompanyInfo = ({ frame651AlignSelf }: CompanyInfoType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", frame651AlignSelf),
    };
  }, [frame651AlignSelf]);

  return (
    <View style={styles.frameView2}>
      <View style={[styles.frameView, frameView2Style]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../../../assets/frame-650.png")}
        />
        <Text style={[styles.sansoTransportionCompany, styles.mt6]}>
          Sanso Transportion company
        </Text>
      </View>
      <View style={[styles.frameView1, styles.mt18]}>
        <Text style={styles.tRPO123}>TR-PO-123</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
  },
  mt18: {
    marginTop: 18,
  },
  frameIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  sansoTransportionCompany: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tRPO123: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "center",
  },
  frameView1: {
    borderRadius: 10,
    backgroundColor: "#1a3596",
    width: 136,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: "#d8dee8",
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 54,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CompanyInfo;
