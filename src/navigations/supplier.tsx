//import liraries
import React, { Component } from 'react';
import CustomerHome from '../screens/supplier/CustomerHome';
import ProgressBooking from '../screens/supplier/ProgressBooking';
import CompletedBooking from '../screens/supplier/CompletedBooking';
import OTP from '../screens/supplier/OTP';
import ConfirmCompany from '../screens/supplier/ConfirmCompany';
import AddCargo from '../screens/supplier/AddCargo';
import AddLoading from '../screens/supplier/AddLoading';
import AddDeparture from '../screens/supplier/AddDeparture';
import CargoInfo from '../screens/supplier/CargoInfo';
import LoadingInfo from '../screens/supplier/LoadingInfo';
import DepartureInfo from '../screens/supplier/DepartureInfo';
import BookingIcon from '../screens/supplier/BookingIcon';
import TrucksIcon from '../screens/supplier/TrucksIcon';
import DriverInfoIcon from '../screens/supplier/DriverInfoIcon';
import UploadDocIcon from '../screens/supplier/UploadDocIcon';
import MessageIcon from '../screens/supplier/MessageIcon';
import NoNotification from '../screens/general/NoNotification';
import Notification from '../screens/general/Notification';

// create a component
const Supplier = (Stack:any, Tab:any) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="CustomerHome" component={CustomerHome} />
            <Stack.Screen name="ProgressBooking" component={ProgressBooking} />
            <Stack.Screen name="CompletedBooking" component={CompletedBooking} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="ConfirmCompany" component={ConfirmCompany} />
            <Stack.Screen name="AddCargo" component={AddCargo} />
            <Stack.Screen name="AddLoading" component={AddLoading} />
            <Stack.Screen name="AddDeparture" component={AddDeparture} />
            <Stack.Screen name="CargoInfo" component={CargoInfo} />
            <Stack.Screen name="LoadingInfo" component={LoadingInfo} />
            <Stack.Screen name="DepartureInfo" component={DepartureInfo} />
            <Stack.Screen name="BookingIcon" component={BookingIcon} />
            <Stack.Screen name="TrucksIcon" component={TrucksIcon} />
            <Stack.Screen name="DriverInfoIcon" component={DriverInfoIcon} />
            <Stack.Screen name="UploadDocIcon" component={UploadDocIcon} />
            <Stack.Screen name="MessageIcon" component={MessageIcon} />
            <Stack.Screen name="NoNotification" component={NoNotification} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default Supplier;
