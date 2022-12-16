import * as React from "react";
import { useState } from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { RadioButton as RNPRadioButton } from "react-native-paper";
import HeaderD from "../driver/components/HeaderD";
import DownloadButton from "../driver/components/DownloadButton";
import ButtonWidth from "../driver/components/ButtonWidth";

const ExportDoc = () => {
  const [frameRadioValue, setFrameRadioValue] = useState("Comercial Invoice");
  const [frameRadio1Value, setFrameRadio1Value] = useState("Comercial Invoice");
  const [frameRadio2Value, setFrameRadio2Value] = useState("Bjack");
  const [frameRadio3Value, setFrameRadio3Value] = useState("Packing List");
  const [frameRadio4Value, setFrameRadio4Value] = useState("Packing List");
  const [frameRadio5Value, setFrameRadio5Value] = useState("Packing List");

  return (
    <View style={styles.exportDocView}>
      <HeaderD />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.loadingInfoView}>
          <View style={styles.frameView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.receivingExportDocuments, styles.ml6]}>
              Receiving export Documents
            </Text>
          </View>
          <View style={[styles.frameView13, styles.mt26]}>
            <View style={styles.frameView2}>
              <View style={styles.frameView1}>
                <RNPRadioButton.Group
                  value={frameRadioValue}
                  onValueChange={setFrameRadioValue}
                >
                  <View style={styles.view}>
                    <View style={styles.view6}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Comercial Invoice"
                      />
                      <Text>Comercial Invoice</Text>
                    </View>
                    <View style={styles.view7}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Bjack"
                      />
                      <Text>Bjack</Text>
                    </View>
                    <View style={styles.view8}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Packing List"
                      />
                      <Text>Packing List</Text>
                    </View>
                    <View style={styles.view9}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Packing List"
                      />
                      <Text>Packing List</Text>
                    </View>
                    <View style={styles.view10}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Packing List"
                      />
                      <Text>Packing List</Text>
                    </View>
                  </View>
                </RNPRadioButton.Group>
              </View>
            </View>
            <View style={[styles.frameView4, styles.mt24]}>
              <View style={styles.frameView3}>
                <RNPRadioButton.Group
                  value={frameRadio1Value}
                  onValueChange={setFrameRadio1Value}
                >
                  <View style={styles.view1}>
                    <View style={styles.view11}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Comercial Invoice"
                      />
                      <Text style={styles.frameRadio1Text}>
                        Comercial Invoice
                      </Text>
                    </View>
                  </View>
                </RNPRadioButton.Group>
              </View>
              <DownloadButton />
            </View>
            <View style={[styles.frameView6, styles.mt24]}>
              <View style={styles.frameView5}>
                <RNPRadioButton.Group
                  value={frameRadio2Value}
                  onValueChange={setFrameRadio2Value}
                >
                  <View style={styles.view2}>
                    <View style={styles.view12}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Bjack"
                      />
                      <Text style={styles.frameRadio2Text}>Bjack</Text>
                    </View>
                  </View>
                </RNPRadioButton.Group>
              </View>
              <DownloadButton />
            </View>
            <View style={[styles.frameView8, styles.mt24]}>
              <View style={styles.frameView7}>
                <RNPRadioButton.Group
                  value={frameRadio3Value}
                  onValueChange={setFrameRadio3Value}
                >
                  <View style={styles.view3}>
                    <View style={styles.view13}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Packing List"
                      />
                      <Text style={styles.frameRadio3Text}>Packing List</Text>
                    </View>
                  </View>
                </RNPRadioButton.Group>
              </View>
              <DownloadButton />
            </View>
            <View style={[styles.frameView10, styles.mt24]}>
              <View style={styles.frameView9}>
                <RNPRadioButton.Group
                  value={frameRadio4Value}
                  onValueChange={setFrameRadio4Value}
                >
                  <View style={styles.view4}>
                    <View style={styles.view14}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Packing List"
                      />
                      <Text style={styles.frameRadio4Text}>Packing List</Text>
                    </View>
                  </View>
                </RNPRadioButton.Group>
              </View>
              <DownloadButton />
            </View>
            <View style={[styles.frameView12, styles.mt24]}>
              <View style={styles.frameView11}>
                <RNPRadioButton.Group
                  value={frameRadio5Value}
                  onValueChange={setFrameRadio5Value}
                >
                  <View style={styles.view5}>
                    <View style={styles.view15}>
                      <RNPRadioButton
                        color="#6750a4"
                        uncheckedColor="#49454f"
                        value="Packing List"
                      />
                      <Text style={styles.frameRadio5Text}>Packing List</Text>
                    </View>
                  </View>
                </RNPRadioButton.Group>
              </View>
              <DownloadButton />
            </View>
          </View>
        </View>
        <ButtonWidth endOfLoading="Submit" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  frameRadioText: {},
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameRadio1Text: {
    fontFamily: "Roboto",
    color: "#08288d",
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameRadio2Text: {
    fontFamily: "Roboto",
    color: "#08288d",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameRadio3Text: {
    fontFamily: "Roboto",
    color: "#08288d",
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameRadio4Text: {
    fontFamily: "Roboto",
    color: "#08288d",
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameRadio5Text: {
    fontFamily: "Roboto",
    color: "#08288d",
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mt24: {
    marginTop: 24,
  },
  mt26: {
    marginTop: 26,
  },
  mt71: {
    marginTop: 71,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 29,
    paddingBottom: 20,
  },
  vectorIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  receivingExportDocuments: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  view6: {
    flexDirection: "row",
    alignItems: "center",
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
  },
  view8: {
    flexDirection: "row",
    alignItems: "center",
  },
  view9: {
    flexDirection: "row",
    alignItems: "center",
  },
  view10: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view11: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  view12: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  view13: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameView7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  view14: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameView9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView10: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  view15: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameView11: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView12: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  frameView13: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#e7e9f4",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 36,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loadingInfoView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
    boxSizing: "border-box",
  },
  exportDocView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 815,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ExportDoc;
