import React, { useRef, useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import TInput from "./components/TInput";
import PInput from "./components/PInput";
import MainButton from "./components/MainButton";
import GoogleButton from "./components/GoogleButton";
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { login } from '../../slices/auth';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

const SignIn = () => {
  type Nav = {
    navigate: (value: string, {}) => void;
  }

  const [formattedValue, setFormattedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const { navigate } = useNavigation<Nav>()
  const [uType, setUtype] = useState('');
  const route:any = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      if (route?.params) {
        setUtype(route?.params.user_type);
      }
    }, [route?.params])
  );

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  const onSubmit = (values: any) => {
    console.log("form values", values);
    setErrorMessage("");
    setIsLoading(true);

    dispatch(login({ email: values.email, password: values.password }))
      .unwrap()
      .then((res: any) => {
        console.log("res", res);
        if (res?.status == 409) {
          setIsLoading(false);
          setErrorMessage(res.message);
        } else if (res.status == 200) {
          setIsLoading(false);
          setErrorMessage(res.message);
          // navigate('Home')
        } else {
          setIsLoading(false);
          setErrorMessage("Please try again");
        }
      })
      .catch((error: any) => {
        console.log("login error", error)
        setErrorMessage(error.data.message);
        setIsLoading(false);
      });
  }

  const navigateToPage = (page: string) => {
    navigate(page, {type: uType});
  }

  return (
    <ScrollView
      style={styles.signIn1}
      contentContainerStyle={styles.signInScrollViewContent}
    >
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="stretch"
        source={require("../../assets/frame481.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../../assets/logo-1-32.png")}
        />
        <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
      </ImageBackground>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={values => onSubmit(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
          <View style={[styles.content, styles.mt12]}>
            <Text style={styles.signIn}>Sign in</Text>
            {errorMessage && <Text style={styles.errTxt}>{errorMessage}</Text>}
            <View style={[styles.formInput, styles.mt27]}>
              <View style={styles.email}>
                <Text style={styles.emailID}>Email ID</Text>
                <TInput name="email" onChangeText={handleChange} onBlur={handleBlur} />
                {errors.email &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                }
              </View>
              <View style={[styles.password1, styles.mt13]}>
                <Text style={styles.password}>Password</Text>
                <PInput name="password" onChangeText={handleChange} onBlur={handleBlur} />
                {errors.password &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                }
              </View>
              <View style={[styles.buttonLink, styles.mt27]}>
                <Pressable onPress={() => navigate('ResetPassword',{})}>
                  <Text style={styles.forgetYourPasworrd}>Forget your Pasworrd?</Text>
                </Pressable>
            
                <View style={[styles.linkButton, styles.mt19]}>
                  <MainButton
                    frame466MarginTop="unset"
                    frame466Height={51}
                    frame466FlexShrink={0}
                    submit="Sign in"
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                  />
                  <View style={[styles.divider, styles.mt28]}>
                    <View style={styles.line_view1}></View>
                    <Text style={styles.or}>Or</Text>
                    <View style={styles.line_view1}></View>
                  </View>
                  <GoogleButton />
                  <View style={[styles.signupLink, styles.mt28]}>
                    <Text style={styles.donotHaveAnAccount}>
                      Donot have an account?
                    </Text>
                    <Pressable onPress={() => navigateToPage('Signup')}>
                      <Text style={[styles.signUp, styles.mt11]}>Sign Up</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errTxt: {
    color: 'red',
    marginVertical: 5
  },
  mt_7: {
    marginTop: -7,
  },
  mt4: {
    marginTop: 4,
  },
  mt13: {
    marginTop: 13,
  },
  ml6: {
    marginLeft: 6,
  },
  mt11: {
    marginTop: 11,
  },
  mt28: {
    marginTop: 28,
  },
  mt19: {
    marginTop: 19,
  },
  mt27: {
    marginTop: 27,
  },
  mt12: {
    marginTop: 12,
  },
  signInScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  lOGO13: {
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
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
  signIn: {
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  emailID: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  email: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  password: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  password1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  formInput: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  forgetYourPasworrd: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "center",
  },
  or: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  divider: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 8,
    marginBottom: 28,
    alignItems: "center",
    justifyContent: "space-between",
  },
  donotHaveAnAccount: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  signUp: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#ffa824",
    textAlign: "center",
  },
  signupLink: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  linkButton: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLink: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  signIn1: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  line_view:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
   },
   line_view1:{
     width: '44%',
     borderBottomWidth: 1,
     borderColor: "#D8DEE8",
   },
});

export default SignIn;
