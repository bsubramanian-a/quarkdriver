import React, { Component } from 'react';
import LoginAs from '../screens/driver/LoginAs';
import Register from '../screens/driver/Register';
import VerifyOTP from '../screens/driver/VerifyOTP';


// create a component
const Authstack = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LoginAs" component={LoginAs} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        </Stack.Navigator>
    );
};

export default Authstack;