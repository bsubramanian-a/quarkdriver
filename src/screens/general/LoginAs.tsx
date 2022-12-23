import React, { useState } from "react";
import { Text, StyleSheet, View, } from "react-native";
import LoginLogo from "../driver/components/LoginLogo";
import CheckboxLabel from "../driver/components/CheckboxLabel";
import MainButton from "../general/components/MainButton";
// import CheckBox from "../driver/components/CheckboxCustom";
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginAs = () => {
  type Nav = {
    navigate: (value: string, { }) => void;
  }

  const { navigate } = useNavigation<Nav>()

  const [userType, setUserType] = useState({
    driver: false,
    buyer: false,
    receiver: false,
    company: false
  });

  const [uType, setUtype] = useState('');

  const changeUserType = (value: boolean, type: string) => {
    setUtype(type);
    if (type == 'driver') {
      setUserType({ ...userType, driver: value, buyer: false, receiver: false, company: false })
    } else if (type == 'supplier') {
      setUserType({ ...userType, driver: false, buyer: value, receiver: false, company: false })
    } else if (type == 'receiver') {
      setUserType({ ...userType, driver: false, buyer: false, receiver: value, company: false })
    } else if (type == 'transporter') {
      setUserType({ ...userType, driver: false, buyer: false, receiver: false, company: value })
    } else {
      setUserType({ ...userType, driver: false, buyer: false, receiver: false, company: false })
    }
  }

  const onSubmit = () => {
    navigate(uType == 'driver' ? 'Register' : 'SignIn', { user_type: uType })
  }

  return (
    <View style={styles.loginAsView}>
      <LoginLogo />
      <View style={[styles.frameView1, styles.mt38]}>
        <Text style={styles.pleaseChooseOneOfFollowing}>
          Please Choose one of following options
        </Text>
        <View style={[styles.frameView, styles.mt30]}>
          {/* <CheckBox
            onPress={() => setUserType(!userType)}
            title="userType"
            isChecked={userType}
          />  
          <CheckboxLabel driver="Driver" />
          <CheckboxLabel driver="Buyer" />
          <CheckboxLabel driver="Reciver" />
          <CheckboxLabel driver="Transportation company" /> */}

          <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={userType.driver}
              onValueChange={(newValue) => changeUserType(newValue, 'driver')}
            />
            <Text style={styles.typeName}>Driver</Text>
          </View>

          <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={userType.buyer}
              onValueChange={(newValue) => changeUserType(newValue, 'supplier')}
            />
            <Text style={styles.typeName}>Supplier</Text>
          </View>

          <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={userType.receiver}
              onValueChange={(newValue) => changeUserType(newValue, 'receiver')}
            />
            <Text style={styles.typeName}>Receiver</Text>
          </View>

          <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={userType.company}
              onValueChange={(newValue) => changeUserType(newValue, 'transporter')}
            />
            <Text style={styles.typeName}>Transportation company</Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={onSubmit}>
            <MainButton submit="Submit" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  mt24: {
    marginTop: 24,
  },
  mt30: {
    marginTop: 30,
  },
  mt38: {
    marginTop: 38,
  },
  typeName: {
    marginStart: 15,
  },
  cBox: {
    width: 24,
    height: 24,
  },
  btnView: {
    width: "100%",
  },
  pleaseChooseOneOfFollowing: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 17,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loginAsView: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 815,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default LoginAs;