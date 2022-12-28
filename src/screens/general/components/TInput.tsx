import * as React from "react";
import { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";

type TInputType = {
  /** Style props */
  frame458Color?: string;
  frame458JustifyContent?: string;
  frame458MarginTop?: number | string;
  frame458AlignSelf?: string;
  frame458BorderStyle?: string;
  frame458BorderColor?: string;
  frame458BorderWidth?: number | string;
  frame458Height?: number | string;
  frame458FlexShrink?: number | string;
  frame458PaddingVertical?: number | string;
  frame458FontSize?: number | string;
  frame458FontWeight?: string;
  frame458FontFamily?: string;
  frame458Flex?: number;
  frame458BackgroundColor?: string;
  onChangeText?:any;
  onBlur?:any;
  name?:string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TInput = ({
  frame458Color,
  frame458JustifyContent,
  frame458MarginTop,
  frame458AlignSelf,
  frame458BorderStyle,
  frame458BorderColor,
  frame458BorderWidth,
  frame458Height,
  frame458FlexShrink,
  frame458PaddingVertical,
  frame458FontSize,
  frame458FontWeight,
  frame458FontFamily,
  frame458Flex,
  frame458BackgroundColor,
  onChangeText,
  onBlur,
  name
}: TInputType) => {
  const frameTextInputStyle = useMemo(() => {
    return {
      ...getStyleValue("color", frame458Color),
      ...getStyleValue("justifyContent", frame458JustifyContent),
      ...getStyleValue("marginTop", frame458MarginTop),
      ...getStyleValue("alignSelf", frame458AlignSelf),
      ...getStyleValue("borderStyle", frame458BorderStyle),
      ...getStyleValue("borderColor", frame458BorderColor),
      ...getStyleValue("borderWidth", frame458BorderWidth),
      ...getStyleValue("height", frame458Height),
      ...getStyleValue("flexShrink", frame458FlexShrink),
      ...getStyleValue("paddingVertical", frame458PaddingVertical),
      ...getStyleValue("fontSize", frame458FontSize),
      ...getStyleValue("fontWeight", frame458FontWeight),
      ...getStyleValue("fontFamily", frame458FontFamily),
      ...getStyleValue("flex", frame458Flex),
      ...getStyleValue("backgroundColor", frame458BackgroundColor),
    };
  }, [
    frame458Color,
    frame458JustifyContent,
    frame458MarginTop,
    frame458AlignSelf,
    frame458BorderStyle,
    frame458BorderColor,
    frame458BorderWidth,
    frame458Height,
    frame458FlexShrink,
    frame458PaddingVertical,
    frame458FontSize,
    frame458FontWeight,
    frame458FontFamily,
    frame458Flex,
    frame458BackgroundColor,
  ]);

  return (
    <TextInput
      style={[styles.frameTextInput, frameTextInputStyle]}
      placeholder="sample@email.com "
      keyboardType="email-address"
      placeholderTextColor="#b6bfdd"
      onChangeText={onChangeText(name)}
      onBlur={onBlur(name)}
    />
  );
};

const styles = StyleSheet.create({
  frameTextInput: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#5469b1",
    borderWidth: 1,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 21,
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#1A3596",
    fontSize: 14,
    fontWeight: "400",
    // fontFamily: "Roboto",
  },
});

export default TInput;
