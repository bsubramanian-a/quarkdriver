import * as React from "react";
import { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type MainButtonType = {
  submit?: string;

  /** Style props */
  frame466MarginTop?: number | string;
  frame466Height?: number | string;
  frame466FlexShrink?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MainButton = ({
  frame466MarginTop,
  frame466Height,
  frame466FlexShrink,
  submit,
}: MainButtonType) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", frame466MarginTop),
      ...getStyleValue("height", frame466Height),
      ...getStyleValue("flexShrink", frame466FlexShrink),
    };
  }, [frame466MarginTop, frame466Height, frame466FlexShrink]);

  return (
    <Pressable
      style={[styles.framePressable, styles.mt30, framePressableStyle]}
    >
      <Text style={styles.submit}>{submit}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submit: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    alignSelf: "stretch",
    borderRadius: 30,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainButton;
