import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const BookingTab = () => {
  return (
    <View style={styles.detailView}>
      <View style={styles.lineView} />
      <View style={[styles.details, styles.mt15]}>
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
        <View style={[styles.frameView3, styles.mt25]}>
          <View style={styles.frameView1}>
            <View style={styles.dCargo}>
              <Text style={styles.cargo}>Cargo</Text>
              <Text style={styles.causticSoda}>Caustic soda</Text>
            </View>
            <View style={[styles.dCost, styles.mt12]}>
              <Text style={styles.cost}>Cost</Text>
              <Text style={styles.text}>5,000 $</Text>
            </View>
            <View style={[styles.dPayment, styles.mt12]}>
              <Text style={styles.paymentTerms}>Payment Terms</Text>
              <Text style={styles.cash}>Cash</Text>
            </View>
          </View>
          <View style={styles.frameView2}>
            <View style={styles.dFrom}>
              <Text style={styles.from}>From</Text>
              <Text style={styles.istanbulTurkey}>Istanbul/Turkey</Text>
            </View>
            <View style={[styles.dTo, styles.mt12]}>
              <Text style={styles.to}>To</Text>
              <Text style={styles.warshoPoland}>Warsho/Poland</Text>
            </View>
            <View style={[styles.dAgent, styles.mt12]}>
              <Text
                style={styles.agentCompanyAtDestination}
              >{`Agent Company \n at Destination `}</Text>
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
  cargo: {
    fontSize: 11,
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
  dCargo: {
    flexShrink: 0,
  },
  cost: {
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
  dCost: {
    flexShrink: 0,
  },
  paymentTerms: {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  cash: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  dPayment: {
    flexShrink: 0,
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  from: {
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
  dFrom: {
    flexShrink: 0,
  },
  to: {
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
  dTo: {
    flexShrink: 0,
  },
  agentCompanyAtDestination: {
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
  dAgent: {
    flexShrink: 0,
  },
  frameView2: {
    width: "45%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  details: {
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

export default BookingTab;
