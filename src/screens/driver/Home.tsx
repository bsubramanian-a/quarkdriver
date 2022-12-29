import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import HeaderWelcome from "../driver/components/HeaderWelcome";
import ConfirmButton from "../driver/components/ConfirmButton";
import IgnoreButton from "../driver/components/IgnoreButton";
import CompletedShipment from "../driver/components/CompletedShipment";
import BottomMenu from "../driver/components/BottomMenu";

const Home = () => {
  return (
    <View style={styles.homeView}>
      <HeaderWelcome />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView3}>
          <ImageBackground
            style={styles.frameIcon}
            resizeMode="stretch"
            source={require("../../assets/frame4811.png")}
          >
            <View style={styles.frameView2}>
              <Text style={styles.cONGRATULATIONText}>CONGRATULATION!</Text>
              <View style={[styles.frameView1, styles.mt9]}>
                <Text style={styles.dearQuarki12456BookingNum}>
                  <Text
                    style={styles.dearQuarki12456}
                  >Dear Quarki 12456{'\n'}</Text>
                  <Text style={styles.bookingNumberFor}>
                    Booking number for your new trip
                  </Text>
                </Text>
                <TextInput
                  style={[styles.frameTextInput, styles.mt14]}
                  keyboardType="default"
                />
                <View style={styles.frameView}>
                  <View style={[styles.groupView, styles.mt14]}>
                    <Text style={styles.fromText}>From</Text>
                    <Text style={styles.turkeyAnkaraText}>Turkey, Ankara</Text>  
                  </View>
                  <View style={[styles.groupView1, styles.mt26]}>
                    <Text style={styles.toText}>To</Text>
                    <Text style={styles.hamburgGermanyText}>
                      Hamburg, Germany
                    </Text>
                  </View>
                  <View style={[styles.groupView2, styles.mt26]}>
                    <Text style={styles.freightCostperTon}>
                      Freight cost(per ton)
                    </Text>
                    <Text style={styles.uSDText}>5000 USD</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.frameView4, styles.mt12]}>
          <ConfirmButton />
          <IgnoreButton />
        </View>
        <View style={[styles.frameView5, styles.mt12]}>
          <CompletedShipment />
        </View>
      </ScrollView>
      {/* <BottomMenu /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mt26: {
    marginTop: 26,
  },
  mt14: {
    marginTop: 14,
  },
  mt9: {
    marginTop: 9,
  },
  ml12: {
    marginLeft: 12,
  },
  mt12: {
    marginTop: 12,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  cONGRATULATIONText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  dearQuarki12456: {
    marginStart: 0,
    marginEnd: 5,
  },
  bookingNumberFor: {
    margin: 0,
  },
  dearQuarki12456BookingNum: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameTextInput: {
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 36,
    width: 200,
    flexShrink: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  turkeyAnkaraText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  fromText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  groupView: {
    alignSelf: "stretch",
    textAlign: 'center',
    flexShrink: 0,
  },
  hamburgGermanyText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  toText: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  groupView1: {
    alignSelf: "stretch",
    textAlign: 'center',
    flexShrink: 0,
  },
  uSDText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  freightCostperTon: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  groupView2: {
    alignSelf: "stretch",
    textAlign: 'center',
    flexShrink: 0,
  },
  frameView: {
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView1: {
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameIcon: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 25,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 204,
  },
  frameView3: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView4: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 8,
    paddingBottom: 28,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
    boxSizing: "border-box",
  },
  homeView: {
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

export default Home;
