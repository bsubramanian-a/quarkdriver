import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";

type BottomMenuType = {
  vector?: ImageSourcePropType;
  vector1?: ImageSourcePropType;
  vector2?: ImageSourcePropType;
  vector3?: ImageSourcePropType;

  /** Style props */
  cBottomMenuPaddingVertical?: number | string;
  cBottomMenuHeight?: number | string;
  cBottomMenuFlexShrink?: number;
  cBottomMenuMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BottomMenu = ({
  vector,
  vector1,
  cBottomMenuPaddingVertical,
  cBottomMenuHeight,
  cBottomMenuFlexShrink,
  cBottomMenuMarginTop,
  vector2,
  vector3,
}: BottomMenuType) => {
  const cBottomMenuStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingVertical", cBottomMenuPaddingVertical),
      ...getStyleValue("height", cBottomMenuHeight),
      ...getStyleValue("flexShrink", cBottomMenuFlexShrink),
      ...getStyleValue("marginTop", cBottomMenuMarginTop),
    };
  }, [
    cBottomMenuPaddingVertical,
    cBottomMenuHeight,
    cBottomMenuFlexShrink,
    cBottomMenuMarginTop,
  ]);

  return (
    <View style={[styles.cBottomMenu, cBottomMenuStyle]}>
      <Image style={styles.vectorIcon} resizeMode="cover" source={vector2} />
      <Image style={styles.vectorIcon1} resizeMode="cover" source={vector} />
      <Image style={styles.vectorIcon2} resizeMode="cover" source={vector1} />
      <Image style={styles.vectorIcon3} resizeMode="cover" source={vector3} />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon1: {
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon2: {
    width: 21,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon3: {
    width: 23,
    height: 27,
    flexShrink: 0,
  },
  cBottomMenu: {
    alignSelf: "stretch",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#5469b1",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 54,
    paddingVertical: 23,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BottomMenu;
