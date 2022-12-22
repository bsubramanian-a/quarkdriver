import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";

type TInputType = {
  frame458Placeholder?: string;

  /** Style props */
  frame458AlignSelf?: string;
  frame458Width?: number | string;
  frame458BorderStyle?: string;
  frame458BorderColor?: string;
  frame458BorderWidth?: number | string;
  frame458PaddingHorizontal?: number | string;
  frame458PaddingVertical?: number | string;
  frame458JustifyContent?: string;
  frame458FontSize?: number;
  frame458Color?: string;
  frame458MarginTop?: number | string;
  frame458BackgroundColor?: string;
  frame458Height?: number | string;
  frame458FlexShrink?: number;
  frame458Padding?: number | string;
  frame458TextAlign?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TInput = ({
  frame458Placeholder,
  frame458AlignSelf,
  frame458Width,
  frame458BorderStyle,
  frame458BorderColor,
  frame458BorderWidth,
  frame458PaddingHorizontal,
  frame458PaddingVertical,
  frame458JustifyContent,
  frame458FontSize,
  frame458Color,
  frame458MarginTop,
  frame458BackgroundColor,
  frame458Height,
  frame458FlexShrink,
  frame458Padding,
  frame458TextAlign,
}: TInputType) => {
  const frameTextInputStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", frame458AlignSelf),
      ...getStyleValue("width", frame458Width),
      ...getStyleValue("borderStyle", frame458BorderStyle),
      ...getStyleValue("borderColor", frame458BorderColor),
      ...getStyleValue("borderWidth", frame458BorderWidth),
      ...getStyleValue("paddingHorizontal", frame458PaddingHorizontal),
      ...getStyleValue("paddingVertical", frame458PaddingVertical),
      ...getStyleValue("justifyContent", frame458JustifyContent),
      ...getStyleValue("fontSize", frame458FontSize),
      ...getStyleValue("color", frame458Color),
      ...getStyleValue("marginTop", frame458MarginTop),
      ...getStyleValue("backgroundColor", frame458BackgroundColor),
      ...getStyleValue("height", frame458Height),
      ...getStyleValue("flexShrink", frame458FlexShrink),
      ...getStyleValue("padding", frame458Padding),
      ...getStyleValue("textAlign", frame458TextAlign),
    };
  }, [
    frame458AlignSelf,
    frame458Width,
    frame458BorderStyle,
    frame458BorderColor,
    frame458BorderWidth,
    frame458PaddingHorizontal,
    frame458PaddingVertical,
    frame458JustifyContent,
    frame458FontSize,
    frame458Color,
    frame458MarginTop,
    frame458BackgroundColor,
    frame458Height,
    frame458FlexShrink,
    frame458Padding,
    frame458TextAlign,
  ]);

  return (
    <TextInput
      style={[styles.frameTextInput, styles.mt4, frameTextInputStyle]}
      placeholder={frame458Placeholder}
      keyboardType="default"
      placeholderTextColor="#b6bfdd"
    />
  );
};

const styles = StyleSheet.create({
  frameTextInput: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#8493c7",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 21,
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#0A288F",
  },
});

export default TInput;
