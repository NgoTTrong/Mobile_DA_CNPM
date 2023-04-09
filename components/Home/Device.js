import React,{useState} from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity
} from 'react-native'

import { Dimensions } from "react-native";
import {publish} from '../../Utils/adafruit';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default Device = (props) => {
  const data = props.device
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => {
    if (previousState){
      publish(data.feed_id,'0')
      return false
    }else{
      if (data.feed_id === 'fan'){
        publish('fan','100')
      }else{
        publish(data.feed_id,'1')
      }
      return true
    }
  });
  const {navigation} = props
  return <View style={styles.deviceContainer}>
    <TouchableOpacity onPress={() =>
            navigation.navigate(data.route, {name: 'Jane'})
    }>
      <View style={styles.headerDevice}>
        <Image source={data.url} style={styles.deviceStyle}>
        </Image>
        <Switch
          trackColor={{false: '#767577', true: '#00e600'}}
          thumbColor={isEnabled ? '#002733' : '#e6f9ff'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.deviceInfo}>
        <Text style={styles.textStyle}>{data.device}</Text>
        <Text style={styles.textStyle}>{data.value}</Text>
      </View>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  deviceContainer:{
      width: screenWidth*1.2/3,
      height: screenHeight*1.4/8,
      backgroundColor: '#FFF5F5',
      opacity: 0.68,
      borderRadius: 20,
      marginLeft: 20,
      marginRight: 20,
  },
  deviceStyle:{
    width:40,
    height:40
  },
  headerDevice:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  deviceInfo:{
    marginLeft: 15,
    marginTop: 15
  },
  textStyle:{
    fontFamily: 'Poppins',
  }
})