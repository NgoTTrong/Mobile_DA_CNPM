import React,{useState,useEffect} from 'react'

import{
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native'

import{
  HumidityIcon,
  LightIcon,
  SnowIcon
} from '../../assets/index'
import Device from './Device'

import { Dimensions } from "react-native";
import { getLastValue } from "../../Utils/adafruit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default ControlDevices = (props) => {
  const [devices,setDevices] = useState([
  {
    key: 1,
    url: HumidityIcon,
    device: 'Pumper',
    value: '70%',
    route: 'Pumper',
    feed_id:'pumper'

  },
  {
    key: 2,
    url: LightIcon,
    device: 'Light',
    value: '78 Lux',
    route: 'Light',
    feed_id:'led'

  },
  {
    key: 3,
    url: SnowIcon,
    device: 'Air Conditioner',
    value: '24°C',
    route: 'AirConditioner',
    feed_id:'fan'
  },
])
useEffect(()=>{
  const getData = async () => {
    setDevices([
      {
        key: 1,
        url: HumidityIcon,
        device: 'Pumper',
        value: (await getLastValue('humidity-sensor'))+"%",
        route: 'Pumper',
        feed_id:'pumper'

      },
      {
        key: 2,
        url: LightIcon,
        device: 'Light',
        value: (await getLastValue('light-sensor'))+' Lux',
        route: 'Light',
        feed_id:'led'

      },
      {
        key: 3,
        url: SnowIcon,
        device: 'Air Conditioner',
        value: (await getLastValue('temperature-sensor'))+'°C',
        route: 'AirConditioner',
        feed_id:'fan'
      },
    ]);
  };
  getData()
},[])
  const {navigation} = props
  return <View>
    <FlatList
      data={devices}
      renderItem={({item}) => <Device device={item} navigation={navigation}/>}
      keyExtractor={item=>item.key}
      contentContainerStyle={styles.devicesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
}

const styles = StyleSheet.create({
  devicesContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:20,
    height: screenHeight*1.5/8
  }
})