import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import HeaderNotification from "./components/HeaderNotification";

const Notification = () => {
  return (
    <View style={styles.notification}>
      <HeaderNotification />
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
      <View style={styles.tBottomMenu}>
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover"
          source={require("../assets/vector37.png")}
        />
        <Image
          style={styles.vectorIcon5}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.vectorIcon6}
          resizeMode="cover"
          source={require("../assets/vector39.png")}
        />
      </View>
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
  vectorIcon3: {
    position: "relative",
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon4: {
    position: "relative",
    width: 25,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon5: {
    position: "relative",
    width: 21,
    height: 27,
    flexShrink: 0,
  },
  vectorIcon6: {
    position: "relative",
    width: 23,
    height: 27,
    flexShrink: 0,
  },
  tBottomMenu: {
    alignSelf: "stretch",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#5469b1",
    height: 75,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 54,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
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

export default Notification;
