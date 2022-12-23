//import liraries
import React, { Component } from 'react';
import ProgressBooking from '../screens/transporter/ProgressBooking';
import CompletedBooking from '../screens/transporter/CompletedBooking';
import NoNotification from '../screens/general/NoNotification';
import Notification from '../screens/general/Notification';
import BookingIcon from '../screens/transporter/BookingIcon';
import TrucksIcon from '../screens/transporter/TrucksIcon';
import DriverInfoIcon from '../screens/transporter/DriverInfoIcon';
import LoadingInfoIcon from '../screens/transporter/LoadingInfoIcon';
import DepartureInfoIcon from '../screens/transporter/DepartureInfoIcon';
import CargoInfoIcon from '../screens/transporter/CargoInfoIcon';

// create a component
const Transporter = (Stack:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="ProgressBooking" component={ProgressBooking} />
            <Stack.Screen name="CompletedBooking" component={CompletedBooking} />
            <Stack.Screen name="NoNotification" component={NoNotification} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="BookingIcon" component={BookingIcon} />
            <Stack.Screen name="TrucksIcon" component={TrucksIcon} />
            <Stack.Screen name="DriverInfoIcon" component={DriverInfoIcon} />
            <Stack.Screen name="LoadingInfoIcon" component={LoadingInfoIcon} />
            <Stack.Screen name="DepartureInfoIcon" component={DepartureInfoIcon} />
            <Stack.Screen name="CargoInfoIcon" component={CargoInfoIcon} />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default Transporter;
