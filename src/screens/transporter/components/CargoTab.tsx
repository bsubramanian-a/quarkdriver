import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const CargoTab = () => {
  return (
    <View style={styles.detailView}>
      <View style={styles.lineView} />
      <View style={[styles.details1, styles.mt15]}>
        <View style={styles.companyDetails}>
          <Image
            style={styles.companyImgIcon}
            resizeMode="cover"
            source={require("../../../assets/frame-631.png")}
          />
          <View style={[styles.frameView, styles.ml16]}>
            <Text style={styles.sansoTransportionCompany}>
              Sanso Transportion company
            </Text>
            <Text style={[styles.tRPO123, styles.mt6]}>TR-PO-123</Text>
          </View>
        </View>
        <View style={[styles.details, styles.mt25]}>
          <View style={styles.frameView1}>
            <View style={styles.commodity}>
              <Text style={styles.commodityName}>{`Commodity Name `}</Text>
              <Text style={styles.causticSoda}>Caustic soda</Text>
            </View>
            <View style={[styles.pack, styles.mt12]}>
              <Text style={styles.packing}>Packing</Text>
              <Text style={styles.bag25Kg}>Bag, 25 kg</Text>
            </View>
            <View style={[styles.code, styles.mt12]}>
              <Text style={styles.hSCode}>HS Code</Text>
              <Text style={styles.text}>457891</Text>
            </View>
          </View>
          <View style={styles.frameView2}>
            <View style={styles.net}>
              <Text style={styles.netWeight}>Net Weight</Text>
              <Text style={styles.istanbulTurkey}>Istanbul/Turkey</Text>
            </View>
            <View style={[styles.gross, styles.mt12]}>
              <Text style={styles.grossWeight}>Gross Weight</Text>
              <Text style={styles.warshoPoland}>Warsho/Poland</Text>
            </View>
            <View style={[styles.time, styles.mt12]}>
              <Text style={styles.loadingTime}>Loading Time</Text>
              <Text style={styles.mrSamoelLeit}>Mr. Samoel Leit</Text>
            </View>
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
  mt12: {
    marginTop: 12,
  },
  mt25: {
    marginTop: 25,
  },
  mt15: {
    marginTop: 15,
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "#1a3596",
    borderTopWidth: 1,
    width: 39,
    height: 1,
    flexShrink: 0,
  },
  companyImgIcon: {
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  sansoTransportionCompany: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
    width: 193,
  },
  tRPO123: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  companyDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  commodityName: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  causticSoda: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  commodity: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
  packing: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  bag25Kg: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  pack: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
  hSCode: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  text: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  code: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
  frameView1: {
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  netWeight: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  istanbulTurkey: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  net: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
  grossWeight: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  warshoPoland: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  gross: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
  loadingTime: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  mrSamoelLeit: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  time: {
    alignSelf: "stretch",
    flexShrink: 0,
  },
  frameView2: {
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 40,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  details1: {
    width: "100%",
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

export default CargoTab;
