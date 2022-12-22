import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './authstack';
//import Mainstack from './mainstack';
import { useSelector } from 'react-redux';
import Mainstack from './mainstack';
const Routes = () => {
  const Stack = createStackNavigator();
  const { user, access_token } = useSelector((state: any) => state.auth);
  console.log("access token :", access_token);

  return (    
      <>
      {(!(access_token
      && Object.keys(access_token).length === 0
      && Object.getPrototypeOf(access_token) === Object.prototype)) && access_token != null
       ? Mainstack(Stack)
                    : Authstack(Stack)
                }
      </>
  );
};

//make this component available to the app
export default Routes;
