import * as React from "react";
import { useState } from "react";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";

type CheckboxLabelType = {
  driver?: string;
};

const CheckboxLabel = ({ driver }: CheckboxLabelType) => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(false);

  return (
    <View style={styles.frameView}>
      <View style={styles.rectangleView}>
        <RNPCheckbox
          status={rectangleCheckboxchecked ? "checked" : "unchecked"}
          onPress={() => setRectangleCheckboxchecked(!rectangleCheckboxchecked)}
          color="#08288d"
        />
      </View>
      <Text style={[styles.driverText, styles.ml15]}>{driver}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml15: {
    marginLeft: 15,
  },
  rectangleView: {
    position: "relative",
  },
  driverText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CheckboxLabel;
