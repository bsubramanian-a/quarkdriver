import React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import LoginLogo from "../components/LoginLogo";
import CheckboxLabel from "../components/CheckboxLabel";
import MainButton from "../components/MainButton";
import CheckBox from "../components/CheckboxCustom";

const LoginAs = () => {
  const [userType, setUserType] = useState(false);
  return (
    <View style={styles.loginAsView}>
      <LoginLogo />
      <View style={[styles.frameView1, styles.mt38]}>
        <Text style={styles.pleaseChooseOneOfFollowing}>
          Please Choose one of following options
        </Text>
        <View style={[styles.frameView, styles.mt30]}>
          <CheckBox
            onPress={() => setUserType(!userType)}
            title="userType"
            isChecked={userType}
          />  
          {/* <CheckboxLabel driver="Driver" />
          <CheckboxLabel driver="Buyer" />
          <CheckboxLabel driver="Reciver" />
          <CheckboxLabel driver="Transportation company" /> */}
        </View>
        <MainButton submit="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt24: {
    marginTop: 24,
  },
  mt30: {
    marginTop: 30,
  },
  mt38: {
    marginTop: 38,
  },
  pleaseChooseOneOfFollowing: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 17,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loginAsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 815,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default LoginAs;
