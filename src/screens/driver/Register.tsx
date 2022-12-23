import React, { useRef, useState }  from "react";
import { Text, StyleSheet, View } from "react-native";
import LoginLogo from "../driver/components/LoginLogo";
import MainButton from "../general/components/MainButton";
import PhoneInput from "@therightfit/react-native-phone-number-input"
import { useDispatch } from "react-redux";
import { loginWithOtp } from '../../slices/auth';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

const Register = () => {
  type Nav = {
    navigate: (value: string, {}) => void;
  }
  const phoneInput = useRef<PhoneInput>(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const { navigate } = useNavigation<Nav>()
  const [uType, setUtype] = useState('');
  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      if(route?.params){
        setUtype(route.params.user_type);
      }
    }, [route?.params])
  );

  const handleSubmit = () => {
    if(value == ''){
      setErrorMessage("Please enter the number");
    }else{
      setErrorMessage("");

      setIsLoading(true);

      dispatch(loginWithOtp({ phone: formattedValue, user_type : uType}))
        .unwrap()
        .then((res: any) => {
            console.log("res", res);
            if (res?.data?.status == 409) {
                setIsLoading(false);
                setErrorMessage(res.data.message);
            }else if (res.status == 200) {
                setIsLoading(false);
                setErrorMessage(res.data.message);
                navigate('VerifyOTP', {phone : formattedValue})
            }else{
                setIsLoading(false);
                setErrorMessage("Please try again");
            }
        })
        .catch((error:any) => {
            console.log("login error", error)
            setErrorMessage(error.data.message);
            setIsLoading(false);
        });
    }
  }

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
        {errorMessage && <Text style={styles.errTxt}>{errorMessage}</Text>}   
        <MainButton submit="Submit" handleSubmit={handleSubmit} isLoading={isLoading}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errTxt:{
    color: 'red',
    marginVertical: 5
  },
  flagButtonStyle:{
    borderWidth:1,
    borderColor: "#5469B1",
    backgroundColor: "#fff",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: -1,
    borderRadius: 10
  },
  textContainerStyle: {
    borderWidth:1,
    borderColor: "#5469B1",
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 10
  },
  containerStyle: {
    width: "100%",
    borderRadius:10,
    marginBottom: 85
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
    height: 36,
    flexShrink: 0,
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
