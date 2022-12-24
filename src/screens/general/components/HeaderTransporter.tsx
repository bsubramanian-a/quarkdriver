import * as React from "react";
import { Text, StyleSheet, View, Image, TextInput, Pressable } from "react-native";
import TInput from "./TInput";
import { useDispatch } from "react-redux";
import { logout } from '../../../slices/auth';
import { useNavigation } from '@react-navigation/native';

const HeaderTransporter = () => {
  const dispatch = useDispatch<any>();
  type Nav = {
    navigate: (value: string) => void;
  }
  const { navigate } = useNavigation<Nav>()
  const handleLogout = () => {
      dispatch(logout());   
      navigate('/')         
  };

  return (
    <View style={styles.headerTransporter}>
      <View style={styles.profileView}>
        <View style={styles.textView}>
          <Text style={styles.hiJani}>Hi Jani</Text>
          <Text style={[styles.trackYourShippment, styles.mt10]}>
            Track your shippment
          </Text>
        </View>
       <View>
          <Pressable onPress={handleLogout}>
            <Text style={{fontSize: 17, color: "#fff", marginBottom: 10}}>Logout</Text>
          </Pressable>
          <Image
            style={styles.profilePicIcon}
            resizeMode="cover"
            source={require("../../../assets/profilepic.png")}
          />
        </View>
      </View>
      <View style={[styles.inputView, styles.mt25]}>
        <TextInput
          style={styles.textInput}
          placeholder="Inter booking number"
          keyboardType="default"
          placeholderTextColor="#b6bfdd"
        />
        {/* <TInput
          frame458Color="unset"
          frame458MarginTop="unset"
          frame458AlignSelf="unset"
          frame458BorderStyle="unset"
          frame458BorderColor="unset"
          frame458Height={45}
          frame458PaddingVertical={10}
          frame458FontWeight="unset"
          frame458FontFamily="unset"
          frame458Flex={1}
          frame458BackgroundColor="#fff"
        /> */}
        <Image
          style={[styles.logisticIcon, styles.ml17]}
          resizeMode="cover"
          source={require("../../../assets/logistic-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    height: 45,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mt10: {
    marginTop: 10,
  },
  ml17: {
    marginLeft: 17,
  },
  mt25: {
    marginTop: 25,
  },
  hiJani: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  trackYourShippment: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  textView: {
    width: 177,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profilePicIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
  },
  profileView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logisticIcon: {
    position: "relative",
    width: 72,
    height: 72,
    flexShrink: 0,
  },
  inputView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTransporter: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 237,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingTop: 59,
    paddingBottom: 31,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HeaderTransporter;
