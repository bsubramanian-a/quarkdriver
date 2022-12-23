import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

type HeaderInsideType = {
  lOGO13?: ImageSourcePropType;
};

const HeaderInside = ({ lOGO13 }: HeaderInsideType) => {
  return (
    <View style={styles.headerTransporter}>
      <View style={styles.frameView1}>
        <Image
          style={styles.combinedShapeIcon}
          resizeMode="cover"
          source={require("../../../assets/combinedshape.png")}
        />
        <View style={styles.frameView}>
          <Image style={styles.lOGO13} resizeMode="cover" source={lOGO13} />
          <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../../../assets/ellipse-76.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  combinedShapeIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  lOGO13: {
    position: "relative",
    width: 55,
    height: 55,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    position: "relative",
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTransporter: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 148,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeaderInside;
