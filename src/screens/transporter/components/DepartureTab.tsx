import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const DepartureTab = () => {
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
            <View style={styles.name}>
              <Text style={styles.companyName}>Company Name</Text>
              <Text style={[styles.marcoCompany, styles.mt4]}>
                Marco company
              </Text>
            </View>
            <View style={[styles.price, styles.mt12]}>
              <Text style={styles.cost}>Cost</Text>
              <Text style={styles.text}>5,000 $</Text>
            </View>
            <View style={[styles.agentName, styles.mt12]}>
              <Text style={styles.clearanceAgentName}>
                Clearance Agent Name
              </Text>
              <Text style={[styles.mischailJeyson, styles.mt4]}>
                Mischail Jeyson
              </Text>
            </View>
          </View>
          <View style={styles.frameView2}>
            <View style={styles.number}>
              <Text style={styles.phoneNumber}>Phone Number</Text>
              <Text style={[styles.text1, styles.mt4]}>+95-4564-78</Text>
            </View>
            <View style={[styles.address1, styles.mt13]}>
              <Text style={styles.address}>Address</Text>
              <Text style={[styles.turkishMarcoCompanyIstanb, styles.mt4]}>
                <Text style={styles.turkishMarco}>{`Turkish Marco `}</Text>
                <Text style={styles.companyIstanbul}>company, Istanbul,</Text>
                <Text style={styles.turkey}>343,Turkey</Text>
              </Text>
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
  mt4: {
    marginTop: 4,
  },
  mt12: {
    marginTop: 12,
  },
  mt13: {
    marginTop: 13,
  },
  mt25: {
    marginTop: 25,
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
  companyImgIcon: {
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
    width: 293,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  companyName: {
    position: "relative",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  marcoCompany: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  name: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cost: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 17,
    left: 0,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  price: {
    alignSelf: "stretch",
    position: "relative",
    height: 31,
    flexShrink: 0,
  },
  clearanceAgentName: {
    position: "relative",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  mischailJeyson: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  agentName: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  phoneNumber: {
    position: "relative",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  text1: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  number: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  address: {
    position: "relative",
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  turkishMarco: {
    marginStart: 0,
    marginEnd: 0,
  },
  companyIstanbul: {
    marginStart: 0,
    marginEnd: 0,
  },
  turkey: {
    margin: 0,
  },
  turkishMarcoCompanyIstanb: {
    flex: 1,
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    width: 91,
  },
  address1: {
    alignSelf: "stretch",
    height: 56,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  details: {
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

export default DepartureTab;
