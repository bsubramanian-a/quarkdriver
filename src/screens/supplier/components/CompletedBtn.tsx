import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type CompletedBtnType = {
  component?: string;

  /** Style props */
  frame451MarginTop?: number | string;
  componentTextAlign?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CompletedBtn = ({
  frame451MarginTop,
  component,
  componentTextAlign,
}: CompletedBtnType) => {
  const framePressable1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frame451MarginTop),
    };
  }, [frame451MarginTop]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("textAlign", componentTextAlign),
    };
  }, [componentTextAlign]);

  return (
    <Pressable style={[styles.framePressable, framePressable1Style]}>
      <Text style={[styles.text, textStyle]}>{component}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#2ce296",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CompletedBtn;
