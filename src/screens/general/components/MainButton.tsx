import * as React from "react";
import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";

// type MainButtonType = {
//   submit?: string;
//   handleSubmit:any,
//   isLoading:boolean
// };

const MainButton = ({ submit, handleSubmit=undefined, isLoading=false }: any) => {
  return (
    <Pressable style={[styles.framePressable]} onPress={handleSubmit} disabled={isLoading}>
      {!isLoading ? <Text style={styles.submitText}>{submit}</Text> : <ActivityIndicator size="small" color="#0000ff" />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    width: "100%",
    alignSelf: "stretch",
    borderRadius: 30,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
});

export default MainButton;
