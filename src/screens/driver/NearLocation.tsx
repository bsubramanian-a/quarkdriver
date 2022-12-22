import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderDCommon from "../driver/components/HeaderDCommon";
import LoadingInfo from "../driver/components/LoadingInfo";
import DischargeInfo from "../driver/components/DischargeInfo";
import CommodityInfo from "../driver/components/CommodityInfo";
import ButtonWidth from "../driver/components/ButtonWidth";
import BottomMenu from "../driver/components/BottomMenu";

const NearLocation = () => {
  return (
    <View style={styles.nearLocationView}>
      <HeaderDCommon />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <LoadingInfo loadingInformation="Loading Information" />
        <DischargeInfo />
        <CommodityInfo />
        <ButtonWidth endOfLoading="Near to discharge Location" />
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
  frameScrollView: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  nearLocationView: {
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

export default NearLocation;
