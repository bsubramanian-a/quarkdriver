import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";

type BottomMenuType = {
  vector?: ImageSourcePropType;
  vector1?: ImageSourcePropType;

  /** Style props */
  tBottomMenuMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BottomMenu = ({
  vector,
  tBottomMenuMarginTop,
  vector1,
}: BottomMenuType) => {
  const tBottomMenuStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", tBottomMenuMarginTop),
    };
  }, [tBottomMenuMarginTop]);

  return (
    <View style={[styles.tBottomMenu, tBottomMenuStyle]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image style={styles.vectorIcon1} resizeMode="cover" source={vector} />
      <Image style={styles.vectorIcon2} resizeMode="cover" source={vector1} />
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "relative",
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon1: {
    position: "relative",
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon2: {
    position: "relative",
    width: 21,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon3: {
    position: "relative",
    width: 23,
    height: 27,
    flexShrink: 0,
  },
  tBottomMenu: {
    alignSelf: "stretch",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#5469b1",
    height: 75,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BottomMenu;
