import React, {useState} from "react";
import LoginLogo from "../driver/components/LoginLogo";
import {
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
  ActivityIndicator
} from "react-native";
import OtpInput from "./components/OtpInput";
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { verifyLoginOtp, resendLoginOtp } from '../../slices/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyOTP = () => {
  type Nav = {
    navigate: (value: string) => void;
  }
  const route = useRoute();
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { navigate } = useNavigation<Nav>()
  const dispatch = useDispatch<any>();
  const [phone, setPhone] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      if(route?.params){
        setPhone(route.params.phone);
      }
    }, [route?.params])
  );

  const handleSubmit = () => {
    if(otpCode == ''){
      setErrorMessage("Please enter the otp");
    }else{
      setErrorMessage("");

      setIsLoading(true);

      dispatch(verifyLoginOtp({ phone: phone, otp : otpCode}))
        .unwrap()
        .then(async(res: any) => {
            console.log("res", res);
            if (res?.status == 409) {
                setIsLoading(false);
                setErrorMessage(res.message);
            }else if (res.status == 200) {
                setIsLoading(false);
                setErrorMessage(res.message);
                // const user = JSON.parse(await AsyncStorage.getItem('user') || "{}");
                // console.log("res user", user);
                navigate('Home')
            }else{
                setIsLoading(false);
                setErrorMessage("Please try again");
            }
        })
        .catch((error:any) => {
            console.log("login error", error)
            setErrorMessage(error.message);
            setIsLoading(false);
        });
    }
  }

  const resendOtp = () => {
    setErrorMessage("");

    setIsLoading(true);

    dispatch(resendLoginOtp({ phone: phone}))
      .unwrap()
      .then(async(res: any) => {
          console.log("res resend", res);
          if (res?.status == 409) {
              setIsLoading(false);
              setErrorMessage(res.message);
          }else if (res.status == 200) {
              setIsLoading(false);
              setErrorMessage(res.message);
              // const user = JSON.parse(await AsyncStorage.getItem('user') || "{}");
              // console.log("res user", user);
              navigate('Home')
          }else{
              setIsLoading(false);
              setErrorMessage("Please try again");
          }
      })
      .catch((error:any) => {
          console.log("login error", error)
          setErrorMessage(error.message);
          setIsLoading(false);
      });
  }

  return (
    <View style={styles.verifyOTPView}>
      {isLoading && 
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      }
      <LoginLogo />
      <View style={[styles.frameView, styles.mt38]}>
        <Text style={styles.welcomeToQuark}>Welcome to Quark</Text>
        <Text style={[styles.pleaseEnterYourOTPNumber, styles.mt20]}>
          Please Enter your OTP Number
        </Text>
      </View>

      <OtpInput code={otpCode}
       setCode={setOTPCode}
       maximumLength={maximumCodeLength}
       setIsPinReady={setIsPinReady}/>
      {errorMessage && <Text style={styles.errTxt}>{errorMessage}</Text>}   
      <View style={[styles.frameView3, styles.mt38]}>
        <View style={[styles.frameView2, styles.mt68]}>
          <Pressable onPress={resendOtp}>
            <Text style={styles.resendOTPCode}>Resend OTP Code</Text>
          </Pressable>
          
          {
            otpCode?.length == maximumCodeLength && <Pressable onPress={handleSubmit} style={[styles.framePressable, styles.mt29]}>
              {!isLoading ? <Text style={styles.submitText}>Submit</Text> : <ActivityIndicator size="small" color="#0000ff" />}
            </Pressable>
          }
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100000,
  },
  errTxt:{
    color: 'red',
    marginVertical: 5
  },
  mt_7: {
    marginTop: -7,
  },
  mt20: {
    marginTop: 20,
  },
  mt29: {
    marginTop: 29,
  },
  mt68: {
    marginTop: 68,
  },
  mt38: {
    marginTop: 38,
  },
  lOGO13: {
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARKText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameIcon: {
    alignSelf: "stretch",
    height: 204,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 138,
    paddingVertical: 32,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
  welcomeToQuark: {
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  pleaseEnterYourOTPNumber: {
    alignSelf: "stretch",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#1a3596",
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
  text: {
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#b6bfdd",
    textAlign: "left",
  },
  text1: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#b6bfdd",
    textAlign: "left",
  },
  frameView1: {
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#5469b1",
    borderWidth: 1,
    width: 343,
    flexDirection: "row",
    paddingHorizontal: 164,
    paddingVertical: 21,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  resendOTPCode: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#ffb300",
    textAlign: "left",
  },
  submitText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  framePressable: {
    alignSelf: "stretch",
    borderRadius: 30,
    backgroundColor: "#ffb300",
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  verifyOTPView: {
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

export default VerifyOTP;
