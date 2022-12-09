import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderDCommon from "../components/HeaderDCommon";
import LoadingInfo from "../components/LoadingInfo";
import DischargeInfo from "../components/DischargeInfo";
import CommodityInfo from "../components/CommodityInfo";
import ButtonWidth from "../components/ButtonWidth";
import ButtonDoc from "../components/ButtonDoc";
import BottomMenu from "../components/BottomMenu";

const EndOfficial = () => {
  return (
    <View style={styles.endOfficialView}>
      <HeaderDCommon />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <LoadingInfo loadingInformation="Loading Information" />
        <DischargeInfo />
        <CommodityInfo />
        <View style={[styles.frameView, styles.mt21]}>
          <ButtonWidth endOfLoading="End of official export procedure" />
          <ButtonDoc
            exportAndShipping="Export and Shipping "
            documentsRequest="Documents Request"
          />
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: 7,
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
  frameView: {
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
  endOfficialView: {
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

export default EndOfficial;