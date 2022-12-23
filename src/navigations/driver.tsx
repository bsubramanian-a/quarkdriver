//import liraries
import React, { Component } from 'react';
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

// create a component
const Driver = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DriveStart" component={DriveStart} />
            <Stack.Screen name="ArrivedLoading" component={ArrivedLoading} />
            <Stack.Screen name="EndLoading" component={EndLoading} />
            <Stack.Screen name="ArrivedBorder" component={ArrivedBorder} />
            <Stack.Screen name="StartCustom" component={StartCustom} />
            <Stack.Screen name="EndCustom" component={EndCustom} />
            <Stack.Screen name="NearLocation" component={NearLocation} />
            <Stack.Screen name="ArrivedLocation" component={ArrivedLocation} />
            <Stack.Screen name="StartDischarge" component={StartDischarge} />
            <Stack.Screen name="EndDischarge" component={EndDischarge} />
            <Stack.Screen name="End" component={End} />
            <Stack.Screen name="ReceiveMoney" component={ReceiveMoney} />
            <Stack.Screen name="BookingSoon" component={BookingSoon} />
            <Stack.Screen name="BookingConfirmed" component={BookingConfirmed} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="ExportDoc" component={ExportDoc} />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default Driver;
