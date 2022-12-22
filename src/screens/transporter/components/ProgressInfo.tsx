import * as React from "react";
import { useMemo } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

type ProgressInfoType = {
  /** Style props */
  frame604MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ProgressInfo = ({ frame604MarginTop }: ProgressInfoType) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frame604MarginTop),
    };
  }, [frame604MarginTop]);

  return (
    <View style={[styles.frameView9, frameView3Style]}>
      <View style={styles.details}>
        <Image
          style={styles.packageIcon}
          resizeMode="cover"
          source={require("../assets/package.png")}
        />
        <View style={[styles.packageDetails, styles.ml4]}>
          <Text style={styles.sansoTransportionCompany}>
            Sanso Transportion company
          </Text>
          <Text style={[styles.tRPO123, styles.mt6]}>TR-PO-123</Text>
        </View>
      </View>
      <View style={[styles.frameView8, styles.mt11]}>
        <View style={styles.frameView4}>
          <View style={styles.frameView2}>
            <View style={styles.frameView} />
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame-609.png")}
            />
            <View style={styles.frameView1} />
          </View>
          <View style={[styles.frameView3, styles.ml4]}>
            <View style={styles.from1}>
              <Text style={styles.from}>From</Text>
              <Text style={[styles.istanbulTurky, styles.mt2]}>
                Istanbul/Turky
              </Text>
            </View>
            <View style={styles.to1}>
              <Text style={styles.to}>To</Text>
              <Text style={[styles.warshoPoland, styles.mt2]}>
                Warsho/Poland
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frameView7}>
          <View style={styles.frameView5}>
            <Text style={styles.cargo}>Cargo :</Text>
            <Text style={[styles.casticSoda, styles.mt2]}>Castic soda</Text>
          </View>
          <View style={styles.frameView6}>
            <Text style={styles.cost}>Cost :</Text>
            <Text style={[styles.text, styles.mt2]}>5,000 $</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
  },
  ml4: {
    marginLeft: 4,
  },
  mt2: {
    marginTop: 2,
  },
  mt11: {
    marginTop: 11,
  },
  packageIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  sansoTransportionCompany: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  tRPO123: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  packageDetails: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  details: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  frameView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#1a3596",
    borderStyle: "solid",
    borderColor: "#5469b1",
    borderWidth: 3,
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  frameIcon: {
    position: "relative",
    width: 2,
    height: 57,
    flexShrink: 0,
  },
  frameView1: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#1a3596",
    borderWidth: 3,
    width: 10,
    height: 10,
    flexShrink: 0,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  from: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  istanbulTurky: {
    position: "relative",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  from1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  to: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  warshoPoland: {
    position: "relative",
    fontSize: 11,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  to1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  frameView3: {
    height: 80,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cargo: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  casticSoda: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  frameView5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cost: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  frameView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
    height: 79,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 21,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frameView9: {
    borderRadius: 15,
    backgroundColor: "#b6bfdd",
    width: "88%",
    height: 179,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: 23,
    paddingTop: 21,
    paddingRight: 41,
    paddingBottom: 19,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ProgressInfo;
