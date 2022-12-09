import React, { useRef, useState }  from "react";
import { Text, StyleSheet, View } from "react-native";
import LoginLogo from "../components/LoginLogo";
import MainButton from "../components/MainButton";
import PhoneInput from "@therightfit/react-native-phone-number-input"
import { green100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Register = () => {
  const phoneInput = useRef<PhoneInput>(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [value, setValue] = useState("");
  const dis = true;
  return (
    <View style={styles.registerView}>
      <LoginLogo />
      <View style={[styles.frameView, styles.mt38]}>
        <Text style={styles.welcomeToQuark}>Welcome to Quark</Text>
        <Text
          style={[styles.pleaseEnterYourMobileNumbe, styles.mt20]}
        >{`please enter your mobile number below `}</Text>
      </View>
      <View style={[styles.frameView1, styles.mt38]}>
      <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="second"
            textInputStyle={styles.textInputStyle}
            containerStyle={styles.containerStyle}
            textContainerStyle={styles.textContainerStyle}
            codeTextStyle={styles.codeTextStyle}
            flagButtonStyle={styles.flagButtonStyle}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />       
        <MainButton submit="Submit" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flagButtonStyle:{
    borderWidth:3,
    borderColor: "orange"
  },
  codeTextStyle:{
    borderWidth:1,
    borderColor: "magenta"
  },
  textContainerStyle: {
    borderWidth:1,
    borderColor: "yellow"
  },
  containerStyle: {
    borderWidth:1,
    borderColor: "green"
  },
  mt20: {
    marginTop: 20,
  },
  mt85: {
    marginTop: 85,
  },
  mt38: {
    marginTop: 38,
  },
  welcomeToQuark: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  pleaseEnterYourMobileNumbe: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 28,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInputStyle: {
    alignSelf: "stretch",
    position: "relative",
    height: 57,
    flexShrink: 0,
    borderColor:"red",
    borderWidth:1,
    fontFamily: "Roboto"
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "blue"
  },
  registerView: {
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

export default Register;
