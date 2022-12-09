import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderDCommon from "../components/HeaderDCommon";
import LoadingInfo from "../components/LoadingInfo";
import DischargeInfo from "../components/DischargeInfo";
import ButtonDoc from "../components/ButtonDoc";
import BottomMenu from "../components/BottomMenu";

const EndCustom = () => {
  return (
    <View style={styles.endCustomView}>
      <HeaderDCommon />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <LoadingInfo loadingInformation="Loading Information" />
        <DischargeInfo />
        <View style={[styles.commodityInfoView, styles.mt21]}>
          <View style={styles.frameView}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={[styles.commodityInformationText, styles.ml6]}>
              Commodity Information
            </Text>
          </View>
          <View style={[styles.frameView5, styles.mt8]}>
            <View style={styles.frameView2}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector8.png")}
              />
              <View style={styles.frameView1}>
                <Text style={styles.commodityNameText}>Commodity Name</Text>
                <Text style={[styles.casticSodaText, styles.mt4]}>
                  Castic Soda
                </Text>
              </View>
            </View>
            <View style={styles.frameView4}>
              <View style={styles.frameView3}>
                <Text style={styles.pakagingText1}>
                  <Text style={styles.pakagingText}>{`Pakaging `}</Text>
                </Text>
                <Text style={[styles.bag25Kg, styles.mt4]}>Bag, 25 kg</Text>
              </View>
              <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("../assets/vector9.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameView6, styles.mt21]}>
          <ButtonDoc
            exportAndShipping="End of Custom process and "
            documentsRequest="enter to destination country"
          />
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  mt21: {
    marginTop: 21,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
  },
  vectorIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  commodityInformationText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vectorIcon1: {
    position: "absolute",
    height: "40.91%",
    width: "14.77%",
    top: "1.01%",
    right: "85.23%",
    bottom: "58.08%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  commodityNameText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  casticSodaText: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    position: "relative",
    width: 121.89,
    height: 33,
    flexShrink: 0,
  },
  pakagingText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  pakagingText1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
    width: 53,
    height: 16,
  },
  bag25Kg: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView3: {
    position: "absolute",
    top: 0,
    left: 27,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon2: {
    position: "absolute",
    height: "42.42%",
    width: "25.27%",
    top: "3.15%",
    right: "74.73%",
    bottom: "54.42%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameView4: {
    position: "relative",
    width: 79.13,
    height: 33,
    flexShrink: 0,
  },
  frameView5: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#8493c7",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 22,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commodityInfoView: {
    alignSelf: "stretch",
    height: 105,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollView: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  endCustomView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default EndCustom;
