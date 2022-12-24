import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from '../../../slices/auth';
import { useNavigation } from '@react-navigation/native';

const HeaderWelcome = () => {
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
    <View style={styles.frameView2}>
      <View style={styles.frameView1}>
        <View style={styles.frameView}>
          <Text style={styles.welcomeBack}>Welcome back !</Text>
          <Text style={[styles.quarki12456Text, styles.mt10]}>
            Quarki 12456
          </Text>
        </View>
        <View>
          <Pressable onPress={handleLogout}>
            <Text style={{fontSize: 17, color: "#fff", marginBottom: 10}}>Logout</Text>
          </Pressable>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../../../assets/ellipse-771.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  welcomeBack: {
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
    width: "100%",
  },
  quarki12456Text: {
    position: "relative",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 50,
    height: 52,
    flexShrink: 0,
  },
  frameView1: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frameView2: {
    alignSelf: "stretch",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#5469b1",
    height: 137,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 28,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HeaderWelcome;
