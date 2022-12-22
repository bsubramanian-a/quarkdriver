import axios from "axios";
import authHeader from "./auth-header";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = "http://192.168.18.134:8000/api/v1/users/";
// const API_URL = "https://quark-api-141h.onrender.com/api/v1/users/";

const register = (email:string, password:string, firstname:string, lastname:string) => {
  return axios.post(API_URL + "create-user", {
    email, password, firstname, lastname
  });
};

const forget = (email:string) => {
  return axios.post(API_URL + "forget-password", {
    email
  }).then((response) => {
    return response.data;
  });;
};

const verifyEmail = (email:string) => {
  return axios.post(API_URL + "verify-email", {
    email
  });
};

const resetpassword = (email:string, otp:number, password:string, confirmPassword:string) => {
  return axios.post(API_URL + "reset-password", {
    email,
    otp,
    password,
    confirmPassword
  }).then(async (response) => {
    console.log("response from server", response);
    if (response.data.token) {
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
    }
    return response.data;
  });;
};

const login = (email:string, password:string) => {
  return axios
    .post(API_URL + "login-user", {
      email,
      password
    })
    .then((response) => {
      return response.data;
    });
};

const loginWithOtp = (phone:string, user_type:string) => {
  return axios
    .post(API_URL + "login-with-otp", {
      phone,
      user_type
    })
    .then((response) => {
      console.log("loginWithOtp service", response);
      return response;
    });
};

const verifyLoginOtp = (phone:string, otp:string) => {
  return axios
    .post(API_URL + "verify-login-otp", {
      phone,
      otp
    })
    .then(async(response) => {
      console.log("verify login service", response);
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      await AsyncStorage.setItem('access_token', JSON.stringify(response.data.user));
      return response.data;
    });
};

const otp = (email:string, otp:number) => {
  console.log("sending otp",otp);
  return axios.post(API_URL + "user-otp", {
    email,
    otp
  }).then(async(response) => {
    console.log("response from server", response);
    if (response.data.token) {
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
    }
    return response.data;
  });;
};

// const changepassword = (email:string, currentpassword:number, newpassword:number) => {
//   console.log("email1",email);
//     console.log("currentpassword1",currentpassword);
//     console.log("newpassword1",newpassword);
//   return axios.post(API_URL + "user-change-password", {
//     email,
//     currentpassword,
//     newpassword
//   }, { headers: authHeader() }).then(async(response) => {
//     console.log("response from server", response);
//     if (response.data.token) {
//       await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
//       await AsyncStorage.setItem('accesstoken', JSON.stringify(response.data.token));
//     }
//     return response.data;
//   });;
// };

const logout = async() => {
  await AsyncStorage.clear();
};

const authService = {
  register,
  login,
  logout,
  otp,
  forget,
  resetpassword,
  // changepassword,
  verifyEmail,
  loginWithOtp,
  verifyLoginOtp
};

export default authService;