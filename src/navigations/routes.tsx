import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './authstack';
//import Mainstack from './mainstack';
import { useSelector } from 'react-redux';
const Routes = () => {
  const Stack = createStackNavigator();
  //const userData = useSelector((state)=> state.auth.userData)
  //console.log("access token :",userData?.access_token);
  return (    
      <>
        {/* {!!userData && userData?.access_token ? Mainstack(Stack)
                    : Authstack(Stack)
                } */}
        {Authstack(Stack)}
      </>
  );
};

//make this component available to the app
export default Routes;
