import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { SnowIcon,HumidityIcon, LightIcon,Avatar, Datalog2, Datalog3, Datalog4   } from '../../assets';
import {useNavigation} from '@react-navigation/native';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const devices = [
  {
    url: SnowIcon,
    device: 'Temperature',
    route: "Temperature"

  },
  {
    url: Datalog2,
    device: 'Humidity',
    route: "Humidity"

  },
  {
    url: Datalog3,
    device: 'Light intensity',
    route: "LightIntensity"

  },
  {
    url: Datalog4,
    device: 'Plant\'s condition',
    route: "PlantCondition"
  },
]
export default Datalog = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.ctnDtl}>
      {
        devices.map((device,index)=>(
          <TouchableOpacity onPress={()=> navigation.navigate(device.route, {name: device.device})} key={index}>

      <View style={styles.ctnItemDtl}>
        <View style={styles.itemDtl}>
          <Image source={device.url} style={styles.itemIcon}>
          </Image>
          <Text style={{fontSize: 28, fontWeight: "bold"}}>{device.device}</Text>
        </View>
      </View>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  ctnDtl: {
    height: screenHeight*6.5/8,
    width: screenWidth,
    padding: 25,
    justifyContent: 'space-between'
  },
  ctnItemDtl:{
    width: "100%",
    height: screenHeight*1.35/8,
    backgroundColor: "#FFF5F5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  itemDtl:{
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    width: "100%",
    // paddingRight: 40,
    // paddingLeft: 10
  },
  itemIcon:{
    width:100,
    height:100,
    marginRight: 5
  }
})