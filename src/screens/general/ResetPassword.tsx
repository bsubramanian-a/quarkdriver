import React, {useState} from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ActivityIndicator
} from "react-native";
import TInput from "./components/TInput";
import MainButton from "./components/MainButton";
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { forget } from '../../slices/auth';
import { useNavigation, useRoute } from '@react-navigation/native';

const ResetPassword = () => {
  type Nav = {
    navigate: (value: string) => void;
  }

  const [formattedValue, setFormattedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const { navigate } = useNavigation<Nav>()
  const [uType, setUtype] = useState('');
  const route = useRoute();

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required')
  })

  const onSubmit = (values:any) => {
    console.log("form values", values);
    setErrorMessage("");
    setIsLoading(true);

    dispatch(forget({ email: values.email}))
      .unwrap()
      .then((res: any) => {
          console.log("res", res);
          if (res?.status == 409) {
              setIsLoading(false);
              setErrorMessage(res.status);
          }else if (res.status == 'success') {
              setIsLoading(false);
              setErrorMessage('Email has been sent to you to reset');
          }else{
              setIsLoading(false);
              setErrorMessage(res.status);
          }
      })
      .catch((error:any) => {
          console.log("login error", error)
          setErrorMessage(error.data.status);
          setIsLoading(false);
      });
  }

  return (
    <ScrollView
      style={styles.resetPassword1}
      contentContainerStyle={styles.resetPasswordScrollViewContent}
    >
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="stretch"
        source={require("../../assets/frame4816.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../../assets/logo-1-39.png")}
        />
        <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
      </ImageBackground>
      <View style={[styles.frameView, styles.mt30]}>
        <Text style={styles.resetPassword}>Reset Password</Text>
        <Text style={[styles.pleaseEnterYourEmailAddres, styles.mt20]}>
          please enter your email address associated with your account
        </Text>
        {errorMessage && <Text style={styles.errTxt}>{errorMessage}</Text>}   
      </View>
     
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '' }}
        onSubmit={values => onSubmit(values)}>
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
            <View style={[styles.frameView1, styles.mt30]}>
              <TInput
                frame458Color="#0A288F"
                frame458JustifyContent="center"
                frame458MarginTop="unset"
                name="email" onChangeText={handleChange} onBlur={handleBlur}
              />
              <MainButton frame466MarginTop={82} submit="Verify email" isLoading={isLoading} handleSubmit={handleSubmit}/>
            </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  mt82: {
    marginTop: 82,
  },
  mt30: {
    marginTop: 30,
  },
  resetPasswordScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  lOGO13: {
    position: "relative",
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
    position: "relative",
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
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
  resetPassword: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  pleaseEnterYourEmailAddres: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
    width: 200,
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 28,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  resetPassword1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    // overflow: "hidden",
    maxWidth: "100%",
  },
});

export default ResetPassword;
