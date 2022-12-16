import React, { Component } from 'react';
import LoginAs from '../screens/driver/LoginAs';

// create a component
const Authstack = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LoginAs" component={LoginAs} />
        </Stack.Navigator>
    );
};

export default Authstack;