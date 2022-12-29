import * as React from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import TInput from "./components/TInput";
import TextAInput from "./components/TextAInput";
import SubmitBtn from "./components/SubmitBtn";
import BottomMenu from "../general/components/BottomMenu";

const AddLoading = () => {
  return (
    <View style={styles.addLoading}>
      <HeaderNotification
        lOGO13={require("../../assets/logo-1-3.png")}
        createNewBooking="Create New Booking"
      />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView1}>
          <View style={styles.frameView}>
            <Image
              style={styles.fill4Icon}
              resizeMode="cover"
              source={require("../../assets/fill4.png")}
            />
          </View>
          <Text style={[styles.loadingInformation, styles.ml10]}>
            Loading Information
          </Text>
        </View>
        <View style={styles.frameView10}>
          <View style={styles.frameView2}>
            <Text style={styles.companyName}>Company Name</Text>
            <TInput frame458Placeholder="Full Company name of Shipper" />
          </View>
          <View style={[styles.frameView3, styles.mt21]}>
            <Text style={styles.companyRepresentative}>
              Company Representative
            </Text>
            <TInput frame458Placeholder="Full Company name of Shipper" />
          </View>
          <View style={[styles.frameView4, styles.mt21]}>
            <Text style={styles.companyClearanceAgent}>
              Company Clearance Agent
            </Text>
            <TInput frame458Placeholder="Full Name of Shipper Clearance Agent" />
          </View>
          <View style={[styles.frameView5, styles.mt21]}>
            <Text style={styles.hSCode}>HS Code</Text>
            <TInput frame458Placeholder="HS Code according to MSDS" />
          </View>
          <View style={[styles.frameView6, styles.mt21]}>
            <Text style={styles.adresss}>Adresss</Text>
            <TextAInput />
          </View>
          <View style={[styles.frameView9, styles.mt21]}>
            <View style={styles.frameView7}>
              <Text style={styles.zipCode}>Zip Code</Text>
              <TInput frame458Placeholder="90210" frame458Width="100%" />
            </View>
            <View style={[styles.frameView8, styles.ml16]}>
              <Text style={styles.phoneNumber}>Phone Number</Text>
              <TInput
                frame458Placeholder="+95-12345-234"
                frame458Width="100%"
              />
            </View>
          </View>
        </View>
        <View style={styles.frameView11}>
          <SubmitBtn sUBMIT="SUBMIT" />
        </View>
      </ScrollView>
      <BottomMenu
        vector={{ uri: "vector9@3x.png" }}
        vector1={{ uri: "vector6@3x.png" }}
        vector2={require("../../assets/vector.png")}
        vector3={require("../../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  mt4: {
    marginTop: 4,
  },
  ml16: {
    marginLeft: 16,
  },
  mt21: {
    marginTop: 21,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  fill4Icon: {
    width: 8,
    height: 5,
    flexShrink: 0,
  },
  frameView: {
    borderRadius: 10,
    backgroundColor: "#8493c7",
    width: 20,
    height: 20,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingInformation: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#ffb300",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  companyName: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  companyRepresentative: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  companyClearanceAgent: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView4: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  hSCode: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView5: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  adresss: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  zipCode: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView7: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  phoneNumber: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView8: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView9: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView10: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 14,
    paddingVertical: 21,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView11: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 22,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  addLoading: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 978,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default AddLoading;
