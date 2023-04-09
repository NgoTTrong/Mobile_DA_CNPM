import React from 'react';
import { Image, Text } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { Datalog3 } from '../../assets';
import Control from "./index";
import { getLastValue } from '../../Utils/adafruit';
export default function Light() {

    const [light,setLight] = React.useState(70)
    React.useEffect(()=>{
      const getData = async()=>{
        setLight(await getLastValue('light-sensor'))
      }
      getData()
    },[])
   return (
    <Control>
  <Text style={{fontSize: 50, marginTop: 50, fontWeight: '600'}}>{light}</Text>
  <Image source={Datalog3} style={{width: 200, height: 200}}/>
</Control>
  );
}