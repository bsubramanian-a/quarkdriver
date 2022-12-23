import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const MessageTab = () => {
  return (
    <View style={styles.detailView}>
      <View style={styles.lineView} />
      <View style={[styles.chat, styles.mt15]}>
        <View style={styles.details}>
          <View style={styles.companyDetails}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../../../assets/frame-631.png")}
            />
            <View style={[styles.frameView, styles.ml16]}>
              <Text style={styles.sansoTransportionCompany}>
                Sanso Transportion company
              </Text>
              <Text style={[styles.tRPO123, styles.mt6]}>TR-PO-123</Text>
            </View>
          </View>
        </View>
        <View style={styles.sender}>
          <View style={styles.lineView1} />
          <View style={[styles.senderChat, styles.ml24]}>
            <Image
              style={styles.userImgIcon}
              resizeMode="cover"
              source={require("../../../assets/userimg.png")}
            />
            <View style={[styles.frameView2, styles.ml6]}>
              <View style={styles.frameView1}>
                <Text style={styles.hiJaniCouldYouPleaseUplo}>
                  <Text
                    style={styles.hiJaniCould}
                  >{`Hi Jani, could you please `}</Text>
                  <Text style={styles.uploadBjack}>upload Bjack ?</Text>
                </Text>
              </View>
              <Text style={[styles.jan20221230pm, styles.mt6]}>
                4 Jan,2022 / 12:30pm
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.receiver}>
          <View style={styles.receiverChat}>
            <View style={styles.frameView3}>
              <Text style={styles.hiPatrickAsSoonAsPosible}>
                <Text style={styles.hiPatrick}>{`Hi Patrick, `}</Text>
                <Text style={styles.asSoonAs}>as soon as posible</Text>
              </Text>
            </View>
            <Text style={[styles.jan20221240pm, styles.mt6]}>
              4 Jan,2022 / 12:40pm
            </Text>
          </View>
          <Image
            style={[styles.userImgIcon1, styles.ml6]}
            resizeMode="cover"
            source={require("../../../assets/userimg1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
  },
  ml16: {
    marginLeft: 16,
  },
  ml6: {
    marginLeft: 6,
  },
  ml24: {
    marginLeft: 24,
  },
  mt15: {
    marginTop: 15,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#1a3596",
    borderTopWidth: 1,
    width: 39,
    height: 1,
    flexShrink: 0,
  },
  frameIcon: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  sansoTransportionCompany: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
    width: 193,
  },
  tRPO123: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
    width: 74,
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  companyDetails: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  details: {
    width: 343,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#1a3596",
    borderRightWidth: 3,
    width: 3,
    height: 89,
    flexShrink: 0,
  },
  userImgIcon: {
    position: "relative",
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  hiJaniCould: {
    marginStart: 0,
    marginEnd: 0,
  },
  uploadBjack: {
    margin: 0,
  },
  hiJaniCouldYouPleaseUplo: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView1: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#e7e9f4",
    flexDirection: "row",
    paddingLeft: 16,
    paddingTop: 4,
    paddingRight: 10,
    paddingBottom: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  jan20221230pm: {
    position: "relative",
    fontSize: 8,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  senderChat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sender: {
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  hiPatrick: {
    marginStart: 0,
    marginEnd: 0,
  },
  asSoonAs: {
    margin: 0,
  },
  hiPatrickAsSoonAsPosible: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "left",
  },
  frameView3: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: "#b6bfdd",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  jan20221240pm: {
    position: "relative",
    fontSize: 8,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#8493c7",
    textAlign: "left",
  },
  receiverChat: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  userImgIcon1: {
    position: "relative",
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  receiver: {
    width: 343,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  chat: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    height: 346,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 15,
    paddingBottom: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MessageTab;
