import * as React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import HeaderWelcome from "../driver/components/HeaderWelcome";
import CompletedShipment from "../driver/components/CompletedShipment";
import BottomMenu from "../driver/components/BottomMenu";

const BookingSoon = () => {
  return (
    <View style={styles.bookingSoonView}>
      <HeaderWelcome />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView4}>
          <View style={styles.frameView3}>
            <View style={styles.frameView2}>
              <Text style={styles.dearQuarki12456WeWillSen}>
                <Text
                  style={styles.dearQuarki12456}
                >{`Dear Quarki 12456, We will send you your booking number soon `}</Text>
                <Text style={styles.keepSafeText}>keep safe</Text>
              </Text>
              <View style={[styles.frameView1, styles.mt_8]}>
                <View style={styles.frameView}>
                  <Image
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle-291.png")}
                  />
                </View>
                <Image
                  style={[styles.rectangleIcon1, styles.ml7]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-290.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameView5, styles.mt44]}>
          <CompletedShipment />
        </View>
      </ScrollView>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  ml7: {
    marginLeft: 7,
  },
  mt_8: {
    marginTop: -8,
  },
  mt44: {
    marginTop: 44,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 81,
  },
  dearQuarki12456: {
    marginBlockStart: 0,
    marginBlockEnd: 5,
  },
  keepSafeText: {
    margin: 0,
  },
  dearQuarki12456WeWillSen: {
    position: "relative",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
    width: 162,
    undefined: "",
  },
  rectangleIcon: {
    position: "relative",
    width: 141,
    height: 60,
    flexShrink: 0,
  },
  frameView: {
    width: 141,
    height: 70,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleIcon1: {
    position: "relative",
    width: 125,
    height: 194,
    flexShrink: 0,
  },
  frameView1: {
    width: 273,
    height: 194,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView2: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 42,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView3: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#ffe8b3",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingTop: 25,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
    minHeight: 204,
  },
  frameView4: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 313,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
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
  bookingSoonView: {
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

export default BookingSoon;
