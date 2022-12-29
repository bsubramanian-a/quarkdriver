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
import ExportDoc from '../screens/driver/ExportDoc';
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";
import BottomMenu from '../screens/driver/components/BottomMenu';

// create a component
const Driver = (Stack:any, Tab:any) => {
    function MyTabBar({ state, descriptors, navigation }:any) {
        return (
            <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route:any, index:any) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
      
              const isFocused = state.index === index;
      
              const onPress = () => {
                console.log("tab press")
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true });
                }
              };
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };
      
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                //   onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ flex: 1 }}
                >
                  <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
    }
    
    const MyTabs = () => {
        return (
            <Tab.Navigator tabBar={(props:any) => <MyTabBar {...props}/>}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="DriveStart" component={DriveStart} />
                <Tab.Screen name="ArrivedLoading" component={ArrivedLoading} />
                <Tab.Screen name="EndLoading" component={EndLoading} />
                <Tab.Screen name="ArrivedBorder" component={ArrivedBorder} />
            </Tab.Navigator>
        );
    }

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Tabs" component={MyTabs} />
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

const styles = StyleSheet.create({
    customTabBarStyle:{
        backgroundColor: 'red',
    }
});
//make this component available to the app
export default Driver;
