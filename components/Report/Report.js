import React from 'react'

import{
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import Chart from '../Home/Chart'
import { Dimensions } from "react-native";
import ChartReport from './ChartReport';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Report = (props) => {
  const {navigation, route} = props;
  const months = [
    {
      key: 1,
      value: 'Jan'
    },
    {
      key: 2,
      value: 'Feb'
    },
    {
      key: 3,
      value: 'Mar'
    },
    {
      key: 4,
      value: 'April'
    },
  ]
  return <View>
      <FlatList
        data={months}
        renderItem={({item}) =><View style={styles.textContainer}><Text style={styles.textStyle}>{item.value}</Text></View>}
        keyExtractor={item=>item.key}
        contentContainerStyle={styles.monthContainer}
      />
      <ChartReport name={route.params.name}/>
  </View>
}

const styles = StyleSheet.create({
    monthContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 40,
      marginTop: 50,
    },
    textStyle:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20,
    },
    textContainer:{
      width: screenWidth*1/7,
      height: 30,
      marginLeft:5,
      marginRight:5,
      backgroundColor:'#FFF5F5',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    }
})