import * as React from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";

const HeaderTransporter = () => {
  return (
    <View style={styles.headerTransporter}>
      <View style={styles.profileView}>
        <View style={styles.textView}>
          <Text style={styles.hiJani}>Hi Jani</Text>
          <Text style={[styles.trackYourShippment, styles.mt10]}>
            Track your shippment
          </Text>
        </View>
        <Image
          style={styles.profilePicIcon}
          resizeMode="cover"
          source={require("../assets/profilepic.png")}
        />
      </View>
      <View style={[styles.inputView, styles.mt25]}>
        <TextInput
          style={styles.textInput}
          placeholder="Inter booking number"
          keyboardType="default"
          placeholderTextColor="#b6bfdd"
        />
        <Image
          style={[styles.logisticIcon, styles.ml17]}
          resizeMode="cover"
          source={require("../assets/logistic-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  ml17: {
    marginLeft: 17,
  },
  mt25: {
    marginTop: 25,
  },
  hiJani: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  trackYourShippment: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  textView: {
    width: 177,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profilePicIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
  },
  profileView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 45,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logisticIcon: {
    position: "relative",
    width: 72,
    height: 72,
    flexShrink: 0,
  },
  inputView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTransporter: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 237,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 59,
    paddingBottom: 31,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HeaderTransporter;
