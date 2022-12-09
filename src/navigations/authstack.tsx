import React, { Component } from 'react';
import Home from '../screens/Home';
import ArrivedBorder from '../screens/ArrivedBorder';
import ArrivedLoading from '../screens/ArrivedLoading';
import LoginAs from '../screens/LoginAs';
import Register from '../screens/Register';

// create a component
const Authstack = (Stack) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LoginAs" component={LoginAs} />
        </Stack.Navigator>
    );
};

export default Authstack;