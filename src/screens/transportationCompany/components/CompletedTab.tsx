import * as React from "react";
import { StyleSheet, View } from "react-native";
import CompletedInfo from "./CompletedInfo";

const CompletedTab = () => {
  return (
    <View style={styles.frameView}>
      <CompletedInfo />
      <CompletedInfo frame604MarginTop={21} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt21: {
    marginTop: 21,
  },
  frameView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 21,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CompletedTab;
