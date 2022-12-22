import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { RadioButton as RNPRadioButton } from "react-native-paper";
import BtnUpload from "../components/BtnUpload";

const UploadTab = () => {
  const [commercialViewValue, setCommercialViewValue] =
    useState("Comercial Invoice");
  const [bjackViewValue, setBjackViewValue] = useState("Bjack");
  const [packingViewValue, setPackingViewValue] = useState("Packing List");

  return (
    <View style={[styles.detailView, styles.mt90]}>
      <View style={styles.lineView} />
      <View style={[styles.details, styles.mt15]}>
        <View style={styles.companyDetails}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame-631.png")}
          />
          <View style={[styles.frameView, styles.ml16]}>
            <Text style={styles.sansoTransportionCompany}>
              Sanso Transportion company
            </Text>
            <Text style={[styles.tRPO123, styles.mt6]}>TR-PO-123</Text>
          </View>
        </View>
        <View style={[styles.driverDetails, styles.mt15]}>
          <View style={styles.frameView1}>
            <View style={styles.commercialView}>
              <RNPRadioButton.Group
                value={commercialViewValue}
                onValueChange={setCommercialViewValue}
              >
                <View>
                  <View style={styles.view}>
                    <RNPRadioButton
                      color="#08288d"
                      uncheckedColor="#08288d"
                      value="Comercial Invoice"
                    />
                    <Text>Comercial Invoice</Text>
                  </View>
                </View>
              </RNPRadioButton.Group>
            </View>
            <BtnUpload />
          </View>
          <View style={[styles.frameView2, styles.mt8]}>
            <View style={styles.bjackView}>
              <RNPRadioButton.Group
                value={bjackViewValue}
                onValueChange={setBjackViewValue}
              >
                <View>
                  <View style={styles.view1}>
                    <RNPRadioButton
                      color="#08288d"
                      uncheckedColor="#08288d"
                      value="Bjack"
                    />
                    <Text>Bjack</Text>
                  </View>
                </View>
              </RNPRadioButton.Group>
            </View>
            <BtnUpload />
          </View>
          <View style={[styles.frameView3, styles.mt8]}>
            <View style={styles.packingView}>
              <RNPRadioButton.Group
                value={packingViewValue}
                onValueChange={setPackingViewValue}
              >
                <View>
                  <View style={styles.view2}>
                    <RNPRadioButton
                      color="#08288d"
                      uncheckedColor="#49454f"
                      value="Packing List"
                    />
                    <Text>Packing List</Text>
                  </View>
                </View>
              </RNPRadioButton.Group>
            </View>
            <BtnUpload />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
  },
  ml16: {
    marginLeft: 16,
  },
  commercialViewText: {
    color: "#08288d",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  bjackViewText: {
    fontFamily: "Roboto",
    color: "#0a288f",
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  packingViewText: {
    fontFamily: "Roboto",
    color: "#08288d",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
  },
  mt8: {
    marginTop: 8,
  },
  mt15: {
    marginTop: 15,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#1a3596",
    borderTopWidth: 1,
    width: 39,
    height: 1,
    flexShrink: 0,
  },
  frameIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  sansoTransportionCompany: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
    width: 193,
  },
  tRPO123: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
    width: 74,
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  companyDetails: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  commercialView: {
    width: 117,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bjackView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  packingView: {
    width: 87,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  driverDetails: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    height: 346,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default UploadTab;
