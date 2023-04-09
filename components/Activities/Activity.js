import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { Avatar } from '../../assets';
const screenHeight = Dimensions.get("window").height;
export default function Activity({activity}) {
  return (
    <View style={styles.ctnItAtvt}>
    <View style={{width: 51}}>
    <Text>{activity.hour}</Text>

    </View>
    <View style={styles.AtvtMid}>
        <View style={styles.AtvtLine}></View>
        <View style={styles.AtvtCirle}>
        <View style={styles.AtvtCirleMini}></View>

        </View>
    </View>
    <View style={styles.divContent}>
    {activity.img&&<Image source={activity.img} style={styles.imgPlant}></Image>}
        <Text style={{width: '84%', paddingRight: 15, paddingLeft: 8}}>{activity.content}</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    ctnItAtvt:{
        flexDirection: "row",
        width: "100%",
        minHeight: screenHeight*0.9/8,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        marginTop: -1
      },
      divContent: {
        flex: 2,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 100,
        minHeight: 55,
        backgroundColor: "#FFF5F5",
      },
      imgPlant: {
        width: 55,
        height: 55,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
      },
      AtvtMid: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        marginRight: 20
      },
      AtvtCirle: {
        width: 20,
        height: 20,
        backgroundColor: "#004A8E",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
      },
      AtvtCirleMini: {
        width: 10,
        height: 10,
        backgroundColor: "#fff",
        borderRadius: 100
      },
      AtvtLine: {
        position: "absolute",
        width: 2,
        height: "100%",
        backgroundColor: "#004A8E",
      }
})