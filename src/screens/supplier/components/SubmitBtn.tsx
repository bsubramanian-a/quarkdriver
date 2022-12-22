import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type SubmitBtnType = {
  sUBMIT?: string;

  /** Style props */
  frame654BorderRadius?: number;
  frame654BackgroundColor?: string;
  frame654PaddingHorizontal?: number | string;
  frame654PaddingVertical?: number | string;
  frame654JustifyContent?: string;
  frame654Width?: number | string;
  frame654MarginTop?: number | string;
  sUBMITFontSize?: number;
  sUBMITColor?: string;
  sUBMITTextAlign?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SubmitBtn = ({
  frame654BorderRadius,
  frame654BackgroundColor,
  frame654PaddingHorizontal,
  frame654PaddingVertical,
  frame654JustifyContent,
  frame654Width,
  frame654MarginTop,
  sUBMIT,
  sUBMITFontSize,
  sUBMITColor,
  sUBMITTextAlign,
}: SubmitBtnType) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", frame654BorderRadius),
      ...getStyleValue("backgroundColor", frame654BackgroundColor),
      ...getStyleValue("paddingHorizontal", frame654PaddingHorizontal),
      ...getStyleValue("paddingVertical", frame654PaddingVertical),
      ...getStyleValue("justifyContent", frame654JustifyContent),
      ...getStyleValue("width", frame654Width),
      ...getStyleValue("marginTop", frame654MarginTop),
    };
  }, [
    frame654BorderRadius,
    frame654BackgroundColor,
    frame654PaddingHorizontal,
    frame654PaddingVertical,
    frame654JustifyContent,
    frame654Width,
    frame654MarginTop,
  ]);

  const sUBMITStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", sUBMITFontSize),
      ...getStyleValue("color", sUBMITColor),
      ...getStyleValue("textAlign", sUBMITTextAlign),
    };
  }, [sUBMITFontSize, sUBMITColor, sUBMITTextAlign]);

  return (
    <Pressable style={[styles.framePressable, framePressableStyle]}>
      <Text style={[styles.sUBMIT, sUBMITStyle]}>{sUBMIT}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sUBMIT: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    borderRadius: 15,
    backgroundColor: "#ffc444",
    flexDirection: "row",
    paddingHorizontal: 52,
    paddingVertical: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default SubmitBtn;
