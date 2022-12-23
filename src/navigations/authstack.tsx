import React, { Component } from 'react';
import LoginAs from '../screens/general/LoginAs';
import Register from '../screens/driver/Register';
import VerifyOTP from '../screens/driver/VerifyOTP';
import Home from '../screens/driver/Home';
import DriveStart from '../screens/driver/DriveStart';
import ArrivedLoading from '../screens/driver/ArrivedLoading';
import EndLoading from '../screens/driver/EndLoading';
import ArrivedBorder from '../screens/driver/ArrivedBorder';
import StartCustom from '../screens/driver/StartCustom';
import EndCustom from '../screens/driver/EndCustom';
import NearLocation from '../screens/driver/NearLocation';
import ArrivedLocation from '../screens/driver/ArrivedLocation';
import StartDischarge from '../screens/driver/StartDischarge';
import EndDischarge from '../screens/driver/EndDischarge';
import End from '../screens/driver/End';
import ReceiveMoney from '../screens/driver/ReceiveMoney';
import BookingSoon from '../screens/driver/BookingSoon';
import BookingConfirmed from '../screens/driver/BookingConfirmed';
import Info from '../screens/driver/Info';
import ExportDoc from '../screens/driver/ExportDoc'
import SignIn from '../screens/general/SignIn';
import ResetPassword from '../screens/general/ResetPassword';
import Signup from '../screens/general/Signup';

// create a component
const Authstack = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {/* <Stack.Screen name="Info" component={Info} /> */}
            <Stack.Screen name="LoginAs" component={LoginAs} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ExportDoc" component={ExportDoc} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );
};

export default Authstack;