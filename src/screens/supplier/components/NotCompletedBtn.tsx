import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type NotCompletedBtnType = {
  component?: string;

  /** Style props */
  frame450MarginTop?: number | string;
  componentTextAlign?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NotCompletedBtn = ({
  component,
  frame450MarginTop,
  componentTextAlign,
}: NotCompletedBtnType) => {
  const framePressable2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frame450MarginTop),
    };
  }, [frame450MarginTop]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("textAlign", componentTextAlign),
    };
  }, [componentTextAlign]);

  return (
    <Pressable
      style={[styles.framePressable, styles.mt14, framePressable2Style]}
    >
      <Text style={[styles.text, text1Style]}>{component}</Text>
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
    textAlign: "left",
  },
  framePressable: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#ffca4d",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NotCompletedBtn;
