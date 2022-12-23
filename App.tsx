import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigations/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { saveUserData } from './src/slices/auth';
import { LogBox } from 'react-native';

const App = () => {
  const dispatch = useDispatch<any>();
  LogBox.ignoreAllLogs();
  useEffect(() => {
    (async()=>{
      const user = JSON.parse(await AsyncStorage.getItem('user') || "{}");
      const access_token = JSON.parse(await AsyncStorage.getItem('access_token') || "{}");
      console.log("async access token", access_token, user);

      if(!(access_token
      && Object.keys(access_token).length === 0
      && Object.getPrototypeOf(access_token) === Object.prototype)){
        dispatch(saveUserData({ user, access_token }))
        .unwrap()
        .then((res: any) => {
            console.log("res", res);
           
        })
        .catch((error:any) => {
            console.log("login error", error)
        });
      }  
    })();
  }, []);
  
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
};



export default App;
