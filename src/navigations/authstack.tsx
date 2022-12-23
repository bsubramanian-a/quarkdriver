import React, { Component } from 'react';
import LoginAs from '../screens/general/LoginAs';
import Register from '../screens/driver/Register';
import VerifyOTP from '../screens/driver/VerifyOTP';
import SignIn from '../screens/general/SignIn';
import ResetPassword from '../screens/general/ResetPassword';
import Signup from '../screens/general/Signup';
import SplashScreen from '../screens/general/SplashScreen';
// create a component
const Authstack = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LoginAs" component={LoginAs} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default Authstack;