import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderDCommon from "../driver/components/HeaderDCommon";
import LoadingInfo from "../driver/components/LoadingInfo";
import DischargeInfo from "../driver/components/DischargeInfo";
import CommodityInfo from "../driver/components/CommodityInfo";
import ButtonDoc from "../driver/components/ButtonDoc";
import BottomMenu from "../driver/components/BottomMenu";


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
        <CommodityInfo />
        <View style={[styles.frameView, styles.mt21]}>
          <ButtonDoc
            exportAndShipping="End Custom process "
            documentsRequest="of destination country"
          />
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollView: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  endCustomView: {
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
