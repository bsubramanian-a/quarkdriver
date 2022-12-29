import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

type HeaderNotificationType = {
  lOGO13?: ImageSourcePropType;
  createNewBooking?: string;

  /** Style props */
  group425Width?: number | string;
  group410Width?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const HeaderNotification = ({
  lOGO13,
  group425Width,
  group410Width,
  createNewBooking,
}: HeaderNotificationType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", group425Width),
    };
  }, [group425Width]);

  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", group410Width),
    };
  }, [group410Width]);

  return (
    <View style={styles.headerTransporter}>
      <View style={styles.headerView}>
        <Image
          style={styles.combinedShapeIcon}
          resizeMode="cover"
          source={require("../../../assets/combinedshape.png")}
        />
        <View style={styles.logoView}>
          <Image style={styles.lOGO13} resizeMode="cover" source={lOGO13} />
          <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
        </View>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../../../assets/ellipse-76.png")}
        />
      </View>
      <View style={[styles.groupView1, styles.mt47, groupViewStyle]}>
        <View style={[styles.groupView, groupView1Style]}>
          <Text style={styles.createNewBooking}>{createNewBooking}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt47: {
    marginTop: 30,
  },
  combinedShapeIcon: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  lOGO13: {
    width: 55,
    height: 55,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
    alignSelf: "stretch",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  logoView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ellipseIcon: {
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  headerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  createNewBooking: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  groupView: {
    flexShrink: 0,
  },
  groupView1: {
    flexShrink: 0,
  },
  headerTransporter: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 166,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 36,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default HeaderNotification;
