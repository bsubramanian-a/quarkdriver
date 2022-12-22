import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type LoadingInfoType = {
  loadingInformation?: string;
};

const LoadingInfo = ({ loadingInformation }: LoadingInfoType) => {
  return (
    <View style={styles.loadingInfoView}>
      <View style={styles.frameView}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../../assets/vector.png")}
        />
        <Text style={[styles.loadingInformationText, styles.ml6]}>
          {loadingInformation}
        </Text>
      </View>
      <View style={[styles.frameView10, styles.mt8]}>
        <View style={styles.frameView9}>
          <View style={styles.frameView5}>
            <View style={styles.frameView2}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../../../assets/vector2.png")}
              />
              <View style={[styles.frameView1, styles.ml7]}>
                <Text style={styles.agentText}>Agent</Text>
                <Text style={[styles.mrKatrinSalvomo, styles.mt4]}>
                  Mr. katrin Salvomo
                </Text>
              </View>
            </View>
            <View style={[styles.frameView4, styles.mt9]}>
              <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("../../../assets/vector12.png")}
              />
              <View style={[styles.frameView3, styles.ml7]}>
                <Text style={styles.addressText}>Address</Text>
                <Text style={[styles.atatrkBulvarDermanSkNo, styles.mt4]}>
                  <Text style={styles.atatrkBulvarText}>Atatürk Bulvar Derman Sk. No: 29 06050 Opera, Ulus, ANKARA</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameView8}>
            <View style={styles.frameView7}>
              <Image
                style={styles.vectorIcon3}
                resizeMode="cover"
                source={require("../../../assets/vector3.png")}
              />
              <View style={[styles.frameView6, styles.ml7]}>
                <Text style={styles.phoneNumberText}>Phone Number</Text>
                <Text style={[styles.text, styles.mt4]}>+65-548-5486-123</Text>
              </View>
            </View>
            <Image
              style={[styles.groupIcon, styles.mt10]}
              resizeMode="cover"
              source={require("../../../assets/group-526.png")}
            />
          </View>
        </View>
      </View>
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
  mt9: {
    marginTop: 9,
  },
  mt10: {
    marginTop: 10,
  },
  mt8: {
    marginTop: 8,
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
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  agentText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  mrKatrinSalvomo: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
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
  vectorIcon2: {
    width: 14,
    height: 20,
    flexShrink: 0,
  },
  addressText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  atatrkBulvarText: {
    marginStart: 0,
    marginEnd: 0,
  },
  dermanSkNo: {
    margin: 0,
  },
  atatrkBulvarDermanSkNo: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView3: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 2,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView5: {
    width: "45%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon3: {
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  phoneNumberText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  text: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon: {
    width: 62,
    height: 62,
    flexShrink: 0,
  },
  frameView8: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView9: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView10: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#8493c7",
    height: 147,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 26,
    paddingVertical: 22,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loadingInfoView: {
    alignSelf: "stretch",
    height: 175,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom:21
  },
});

export default LoadingInfo;
