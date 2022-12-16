import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

type ButtonDocType = {
  exportAndShipping?: string;
  documentsRequest?: string;
};

const ButtonDoc = ({ exportAndShipping, documentsRequest }: ButtonDocType) => {
  return (
    <Pressable style={[styles.buttonPressable, styles.mt7]}>
      <Text style={styles.exportAndShippingDocuments}>
        <Text style={styles.exportAndShipping}>{exportAndShipping}</Text>
        <Text style={styles.documentsRequestText}>{documentsRequest}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  exportAndShipping: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  documentsRequestText: {
    margin: 0,
  },
  exportAndShippingDocuments: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  buttonPressable: {
    borderRadius: 30,
    backgroundColor: "#ffb300",
    width: "86%",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default ButtonDoc;
