import * as React from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import HeaderWelcome from "../driver/components/HeaderWelcome";
import CompletedShipment from "../driver/components/CompletedShipment";
import BottomMenu from "../driver/components/BottomMenu";

const BookingConfirmed = () => {
  return (
    <View style={styles.bookingConfirmedView}>
      <HeaderWelcome />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView2}>
          <View style={styles.frameView1}>
            <Text style={styles.dearQuarki12456YouAreOnA}>
              <Text style={styles.dearQuarki124561}>
                <Text
                  style={styles.dearQuarki12456}
                >{`Dear Quarki 12456 `}</Text>
              </Text>
              <Text style={styles.youAreOnAMissinonOf18345}>
                <Text
                  style={styles.youAreOn}
                >{`You are on a missinon of `}</Text>
                <Text style={styles.text}>{`18345 `}</Text>
                <Text style={styles.bookingNumberText}>booking number</Text>
              </Text>
            </Text>
            <Text style={[styles.feelFreeToContactUsForAn, styles.mt12]}>
              Feel free to contact us for any assistant good luck
            </Text>
            <View style={[styles.frameView, styles.mt12]}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle-292.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameView3, styles.mt46]}>
          <CompletedShipment />
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  mt46: {
    marginTop: 46,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 38,
  },
  dearQuarki12456: {
    color: "#fff",
  },
  dearQuarki124561: {
    marginStart: 0,
    marginEnd: 5,
  },
  youAreOn: {
    color: "#fff",
  },
  text: {
    color: "#08288d",
  },
  bookingNumberText: {
    color: "#fff",
  },
  youAreOnAMissinonOf18345: {
    margin: 0,
  },
  dearQuarki12456YouAreOnA: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    textAlign: "center",
    width: 269,
  },
  feelFreeToContactUsForAn: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 269,
  },
  rectangleIcon: {
    position: "relative",
    width: 177,
    height: 78,
    flexShrink: 0,
  },
  frameView: {
    width: 273,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 32,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#8493c7",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingTop: 96,
    paddingBottom: 42,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
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
  bookingConfirmedView: {
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

export default BookingConfirmed;
