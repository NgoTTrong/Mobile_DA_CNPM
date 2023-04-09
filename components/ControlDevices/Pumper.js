import React from 'react';
import { View, StyleSheet, Alert, Text, Image } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Control from "./index"
import { Datalog2 } from '../../assets';
import { getLastValue } from '../../Utils/adafruit';

export default function Pumper() {
    const [humidity,setHumidity] = React.useState(70)
    React.useEffect(()=>{
      const getData = async()=>{
        setHumidity(await getLastValue('humidity-sensor'))
      }
      getData()
    },[])
   return (
    <Control>
  <Text style={{fontSize: 50, marginTop: 50, fontWeight: '600'}}>{humidity}</Text>
  <Image source={Datalog2} style={{width: 200, height: 200}}/>
</Control>
  );
}