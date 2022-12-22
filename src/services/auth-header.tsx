import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function authHeader() {
  const user = JSON.parse(await AsyncStorage.getItem('user') || "{}");
  const accesstoken = JSON.parse(await AsyncStorage.getItem('accesstoken') || "");
  console.log("user from header",user);
  console.log("accesstoken from header", accesstoken);
  
    if (user && accesstoken) {
      console.log("accesstoken coming in");
      // For Spring Boot back-end
      return { Authorization: "Bearer " + accesstoken };
  
      // for Node.js Express back-end
      // return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }