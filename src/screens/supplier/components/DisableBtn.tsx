import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type DisableBtnType = {
  component?: string;

  /** Style props */
  frame451MarginTop?: number | string;
  componentTextAlign?: string;
  componentWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DisableBtn = ({
  frame451MarginTop,
  component,
  componentTextAlign,
  componentWidth,
}: DisableBtnType) => {
  const framePressable3Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frame451MarginTop),
    };
  }, [frame451MarginTop]);

  const text5Style = useMemo(() => {
    return {
      ...getStyleValue("textAlign", componentTextAlign),
      ...getStyleValue("width", componentWidth),
    };
  }, [componentTextAlign, componentWidth]);

  return (
    <Pressable style={[styles.framePressable, framePressable3Style]}>
      <Text style={[styles.text, text5Style]}>{component}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#b6bfdd",
    textAlign: "center",
    width: 139,
  },
  framePressable: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#ffe8b3",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DisableBtn;
