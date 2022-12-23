import * as React from "react";
import { ScrollView, View, Image, StyleSheet, Text } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import TInput from "./components/TInput";
import UploadBtn from "./components/UploadBtn";
import SubmitBtn from "./components/SubmitBtn";
import BottomMenu from "../general/components/BottomMenu";

const AddCargo = () => {
  return (
    <View style={styles.addCargo}>
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
          <Text style={[styles.cargoInformation, styles.ml10]}>
            Cargo Information
          </Text>
        </View>
        <View style={styles.frameView9}>
          <View style={styles.frameView2}>
            <Text style={styles.commodityName}>Commodity Name</Text>
            <TInput frame458Placeholder="Whats  the Name of Product? " />
          </View>
          <View style={[styles.frameView3, styles.mt21]}>
            <Text style={styles.typeOfPacking}>Type of packing</Text>
            <TInput frame458Placeholder="Whats the Packaging of your product?" />
          </View>
          <View style={[styles.frameView6, styles.mt21]}>
            <View style={styles.frameView4}>
              <Text style={styles.totalNetWeight}>Total Net Weight</Text>
              <TInput
                frame458Placeholder=" 250000 kg"
                frame458AlignSelf="unset"
                frame458Width={153}
              />
            </View>
            <View style={styles.frameView5}>
              <Text style={styles.truckNetWeight}>{`Truck Net Weight `}</Text>
              <TInput
                frame458Placeholder="25,000,000 kg"
                frame458AlignSelf="unset"
                frame458Width={153}
              />
            </View>
          </View>
          <View style={[styles.frameView8, styles.mt21]}>
            <View style={styles.frameView7}>
              <Text style={styles.hSCode}>HS Code</Text>
              <TInput
                frame458Placeholder="010203040506"
                frame458AlignSelf="unset"
                frame458Width={153}
              />
            </View>
            <UploadBtn />
          </View>
        </View>
        <View style={styles.frameView10}>
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
  mt21: {
    marginTop: 21,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  fill4Icon: {
    position: "relative",
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
  cargoInformation: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#ffa824",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  commodityName: {
    position: "relative",
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
  typeOfPacking: {
    position: "relative",
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
  totalNetWeight: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  truckNetWeight: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView5: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  hSCode: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView7: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frameView9: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 14,
    paddingVertical: 21,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView10: {
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
  addCargo: {
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

export default AddCargo;
