import * as React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

const TruckTab = () => {
  return (
    <View style={styles.detailView}>
      <View style={styles.lineView} />
      <View style={[styles.details, styles.mt15]}>
        <View style={styles.companyDetails}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame-631.png")}
          />
          <View style={[styles.frameView, styles.ml16]}>
            <Text style={styles.sansoTransportionCompany}>
              Sanso Transportion company
            </Text>
            <Text style={[styles.tRPO123, styles.mt6]}>TR-PO-123</Text>
          </View>
        </View>
        <View style={[styles.driverDetails, styles.mt15]}>
          <View style={styles.driver1}>
            <View style={styles.frameView3}>
              <View style={styles.frameView1}>
                <Image
                  style={styles.profilePicIcon}
                  resizeMode="cover"
                  source={require("../assets/profilepic1.png")}
                />
                <Text style={[styles.kevinLarsem, styles.ml9]}>
                  kevin Larsem
                </Text>
              </View>
              <View style={styles.frameView2}>
                <View style={styles.kindpng4073935}>
                  <ImageBackground
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle.png")}
                  />
                  <Text style={styles.a11}>A1-1</Text>
                </View>
                <Text style={[styles.loading, styles.ml11]}>Loading</Text>
              </View>
            </View>
          </View>
          <View style={[styles.driver11, styles.mt8]}>
            <View style={styles.frameView6}>
              <View style={styles.frameView4}>
                <Image
                  style={styles.profilePicIcon1}
                  resizeMode="cover"
                  source={require("../assets/profilepic1.png")}
                />
                <Text style={[styles.danielJanson, styles.ml9]}>
                  Daniel Janson
                </Text>
              </View>
              <View style={styles.frameView5}>
                <View style={styles.kindpng40739351}>
                  <ImageBackground
                    style={styles.rectangleIcon1}
                    resizeMode="cover"
                    source={require("../assets/rectangle.png")}
                  />
                  <Text style={styles.a12}>A1-2</Text>
                </View>
                <Text style={[styles.loading1, styles.ml11]}>Loading</Text>
              </View>
            </View>
          </View>
          <View style={[styles.driver12, styles.mt8]}>
            <View style={styles.frameView9}>
              <View style={styles.frameView7}>
                <Image
                  style={styles.profilePicIcon2}
                  resizeMode="cover"
                  source={require("../assets/profilepic1.png")}
                />
                <Text style={[styles.danielJanson1, styles.ml9]}>
                  Daniel Janson
                </Text>
              </View>
              <View style={styles.frameView8}>
                <View style={styles.kindpng40739352}>
                  <ImageBackground
                    style={styles.rectangleIcon2}
                    resizeMode="cover"
                    source={require("../assets/rectangle.png")}
                  />
                  <Text style={styles.a13}>A1-3</Text>
                </View>
                <Text style={[styles.loading2, styles.ml11]}>Loading</Text>
              </View>
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
  ml9: {
    marginLeft: 9,
  },
  ml11: {
    marginLeft: 11,
  },
  mt8: {
    marginTop: 8,
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
  frameIcon: {
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
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profilePicIcon: {
    position: "relative",
    borderRadius: 10,
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  kevinLarsem: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  a11: {
    position: "absolute",
    top: "20%",
    left: "21.57%",
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    undefined: "",
  },
  kindpng4073935: {
    position: "relative",
    shadowColor: "rgba(8, 40, 141, 0.75)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 51,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    alignSelf: "center",
  },
  loading: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  driver1: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#b6bfdd",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profilePicIcon1: {
    position: "relative",
    borderRadius: 10,
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  danielJanson: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  a12: {
    position: "absolute",
    top: "20%",
    left: "19.61%",
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    undefined: "",
  },
  kindpng40739351: {
    position: "relative",
    shadowColor: "rgba(8, 40, 141, 0.75)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 51,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    alignSelf: "center",
  },
  loading1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  driver11: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#b6bfdd",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profilePicIcon2: {
    position: "relative",
    borderRadius: 10,
    width: 32,
    height: 32,
    flexShrink: 0,
  },
  danielJanson1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  a13: {
    position: "absolute",
    top: "20%",
    left: "19.61%",
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
    undefined: "",
  },
  kindpng40739352: {
    position: "relative",
    shadowColor: "rgba(8, 40, 141, 0.75)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 51,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    alignSelf: "center",
  },
  loading2: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView9: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  driver12: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#b6bfdd",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  driverDetails: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  details: {
    alignSelf: "stretch",
    height: 211,
    flexShrink: 0,
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

export default TruckTab;
