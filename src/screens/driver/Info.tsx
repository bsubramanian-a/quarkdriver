import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderD from "../../driver/components/HeaderD";
import ButtonWidth from "../../driver/components/ButtonWidth";
import BottomMenu from "../../driver/components/BottomMenu";

const Info = () => {
  return (
    <View style={styles.infoView}>
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
              source={require("../../assets/vector1.png")}
            />
            <Text style={[styles.loadingInformationText, styles.ml6]}>
              Loading Information
            </Text>
          </View>
          <View style={[styles.frameView8, styles.mt8]}>
            <View style={styles.frameView7}>
              <View style={styles.frameView3}>
                <View style={styles.frameView2}>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../../assets/vector2.png")}
                  />
                  <View style={[styles.frameView1, styles.ml7]}>
                    <Text style={styles.agentText}>Agent</Text>
                    <Text style={[styles.mrKatrinSalvomo, styles.mt4]}>
                      Mr. katrin Salvomo
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameView6}>
                <View style={styles.frameView5}>
                  <Image
                    style={styles.vectorIcon2}
                    resizeMode="cover"
                    source={require("../../assets/vector3.png")}
                  />
                  <View style={[styles.frameView4, styles.ml7]}>
                    <Text style={styles.phoneNumberText}>Phone Number</Text>
                    <Text style={[styles.text, styles.mt4]}>
                      +65-548-5486-123
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.loadingInfoView1, styles.mt45]}>
          <View style={styles.frameView9}>
            <Image
              style={styles.vectorIcon3}
              resizeMode="cover"
              source={require("../../assets/vector1.png")}
            />
            <Text style={[styles.dischargeInformationText, styles.ml6]}>
              Discharge Information
            </Text>
          </View>
          <View style={[styles.frameView17, styles.mt8]}>
            <View style={styles.frameView16}>
              <View style={styles.frameView12}>
                <View style={styles.frameView11}>
                  <Image
                    style={styles.vectorIcon4}
                    resizeMode="cover"
                    source={require("../../assets/vector2.png")}
                  />
                  <View style={[styles.frameView10, styles.ml7]}>
                    <Text style={styles.agentText1}>Agent</Text>
                    <Text style={[styles.mrKatrinSalvomo1, styles.mt4]}>
                      Mr. katrin Salvomo
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameView15}>
                <View style={styles.frameView14}>
                  <Image
                    style={styles.vectorIcon5}
                    resizeMode="cover"
                    source={require("../../assets/vector3.png")}
                  />
                  <View style={[styles.frameView13, styles.ml7]}>
                    <Text style={styles.phoneNumberText1}>Phone Number</Text>
                    <Text style={[styles.text1, styles.mt4]}>
                      +65-548-5486-123
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.commodityInfoView, styles.mt45]}>
          <View style={styles.frameView18}>
            <Image
              style={styles.vectorIcon6}
              resizeMode="cover"
              source={require("../../assets/vector1.png")}
            />
            <Text style={[styles.commodityInformationText, styles.ml6]}>
              Commodity Information
            </Text>
          </View>
          <View style={[styles.frameView23, styles.mt8]}>
            <View style={styles.frameView20}>
              <Image
                style={styles.vectorIcon7}
                resizeMode="cover"
                source={require("../../assets/vector8.png")}
              />
              <View style={styles.frameView19}>
                <Text style={styles.commodityNameText}>Commodity Name</Text>
                <Text style={[styles.casticSodaText, styles.mt4]}>
                  Castic Soda
                </Text>
              </View>
            </View>
            <View style={styles.frameView22}>
              <View style={styles.frameView21}>
                <Text style={styles.pakagingText1}>
                  <Text style={styles.pakagingText}>{`Pakaging `}</Text>
                </Text>
                <Text style={[styles.bag25Kg, styles.mt4]}>Bag, 25 kg</Text>
              </View>
              <Image
                style={styles.vectorIcon8}
                resizeMode="cover"
                source={require("../../assets/vector9.png")}
              />
            </View>
          </View>
        </View>
        <ButtonWidth endOfLoading="Submit" />
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
  ml7: {
    marginLeft: 7,
  },
  mt8: {
    marginTop: 8,
  },
  mt45: {
    marginTop: 45,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 20,
  },
  vectorIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  loadingInformationText: {
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
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  agentText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  mrKatrinSalvomo: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon2: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  phoneNumberText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView6: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView8: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#08288d",
    height: 73,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 26,
    paddingTop: 24,
    paddingBottom: 16,
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
  vectorIcon3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  dischargeInformationText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vectorIcon4: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  agentText1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  mrKatrinSalvomo1: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView10: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView11: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView12: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon5: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  phoneNumberText1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView13: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView15: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView16: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView17: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#08288d",
    height: 73,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 26,
    paddingTop: 24,
    paddingBottom: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loadingInfoView1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon6: {
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
  frameView18: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vectorIcon7: {
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
    width: 97,
  },
  casticSodaText: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView19: {
    position: "absolute",
    top: 0,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView20: {
    alignSelf: "stretch",
    position: "relative",
    width: 121.89,
    flexShrink: 0,
  },
  pakagingText: {
    marginStart: 0,
    marginEnd: 0,
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
    color: "#fff",
    textAlign: "left",
  },
  frameView21: {
    position: "absolute",
    top: 0,
    left: 27,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon8: {
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
  frameView22: {
    position: "relative",
    width: 79.13,
    height: 33,
    flexShrink: 0,
  },
  frameView23: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#08288d",
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
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
    boxSizing: "border-box",
  },
  infoView: {
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

export default Info;
