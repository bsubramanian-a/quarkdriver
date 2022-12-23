import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authstack from './authstack';
//import Mainstack from './mainstack';
import { useSelector } from 'react-redux';
import Driver from './driver';
import Supplier from './supplier';
import Transporter from './transporter';
const Routes = () => {
  const Stack = createStackNavigator();
  const { user, access_token } = useSelector((state: any) => state.auth);
  console.log("access token route:", access_token);
  console.log("user", user)

  return (    
      <>
      {(!(access_token
      && Object.keys(access_token).length === 0
      && Object.getPrototypeOf(access_token) === Object.prototype)) && access_token != null
       ? (user.user_type == 'driver' ? Driver(Stack) : (user.user_type == 'supplier' ? Supplier(Stack) : Transporter(Stack)))
                    : Authstack(Stack)
                }
      </>
  );
};

//make this component available to the app
export default Routes;
