import * as React from "react";
import { StyleSheet, View } from "react-native";

const Screen1 = () => {
  return <View style={styles.view} />;
};

const styles = StyleSheet.create({
  view: {
    position: "relative",
    flex: 1,
    width: "100%",
    display: "none",
  },
});

export default Screen1;
