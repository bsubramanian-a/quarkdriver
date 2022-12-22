import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";
import BottomMenu from "./components/BottomMenu";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <HeaderNotification
        lOGO13={require("../assets/logo-1-37.png")}
        group425Width={95}
        group410Width={95}
        createNewBooking="Notification"
      />
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.frameView9}>
          <View style={styles.frameView2}>
            <View style={styles.frameView1}>
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-83.png")}
              />
              <View style={[styles.frameView, styles.ml9]}>
                <Text style={styles.katrinaPaweel}>Katrina Paweel</Text>
                <Text style={[styles.hiJaniCouldYouPleaseUplo, styles.mt10]}>
                  Hi Jani, could you please upload Bjack ?
                </Text>
              </View>
            </View>
            <Text style={styles.aM}>12:30 AM</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.mt10]}
            resizeMode="cover"
            source={require("../assets/vector-17.png")}
          />
          <View style={[styles.frameView5, styles.mt10]}>
            <View style={styles.frameView4}>
              <Image
                style={styles.ellipseIcon1}
                resizeMode="cover"
                source={require("../assets/ellipse-83.png")}
              />
              <View style={[styles.frameView3, styles.ml9]}>
                <Text style={styles.saraKarlou}>Sara Karlou</Text>
                <Text style={[styles.hiJaniCouldYouPleaseUplo1, styles.mt10]}>
                  Hi Jani, could you please upload Bjack ?
                </Text>
              </View>
            </View>
            <Text style={styles.aM1}>12:30 AM</Text>
          </View>
          <Image
            style={[styles.vectorIcon1, styles.mt10]}
            resizeMode="cover"
            source={require("../assets/vector-17.png")}
          />
          <View style={[styles.frameView8, styles.mt10]}>
            <View style={styles.frameView7}>
              <Image
                style={styles.ellipseIcon2}
                resizeMode="cover"
                source={require("../assets/ellipse-83.png")}
              />
              <View style={[styles.frameView6, styles.ml9]}>
                <Text style={styles.peterAskara}>Peter Askara</Text>
                <Text style={[styles.hiJaniCouldYouPleaseUplo2, styles.mt10]}>
                  Hi Jani, could you please upload Bjack ?
                </Text>
              </View>
            </View>
            <Text style={styles.aM2}>12:30 AM</Text>
          </View>
          <Image
            style={[styles.vectorIcon2, styles.mt10]}
            resizeMode="cover"
            source={require("../assets/vector-17.png")}
          />
        </View>
      </ScrollView>
      <BottomMenu
        vector={require("../assets/vector1.png")}
        vector1={require("../assets/vector2.png")}
        vector2={require("../assets/vector.png")}
        vector3={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  ml9: {
    marginLeft: 9,
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  ellipseIcon: {
    position: "relative",
    width: 44,
    height: 44,
    flexShrink: 0,
  },
  katrinaPaweel: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  hiJaniCouldYouPleaseUplo: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aM: {
    position: "relative",
    fontSize: 8,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 25,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  vectorIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  ellipseIcon1: {
    position: "relative",
    width: 44,
    height: 44,
    flexShrink: 0,
  },
  saraKarlou: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  hiJaniCouldYouPleaseUplo1: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aM1: {
    position: "relative",
    fontSize: 8,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView5: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 25,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  vectorIcon1: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  ellipseIcon2: {
    position: "relative",
    width: 44,
    height: 44,
    flexShrink: 0,
  },
  peterAskara: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  hiJaniCouldYouPleaseUplo2: {
    position: "relative",
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  aM2: {
    position: "relative",
    fontSize: 8,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 25,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  vectorIcon2: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  frameView9: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 54,
    paddingBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  notification: {
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

export default Notification1;
