//import liraries
import React, { Component } from 'react';
import Home from '../screens/driver/Home';
import SplashScreen from '../screens/general/SplashScreen';

// create a component
const Supplier = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default Supplier;
