import React,{useState,useEffect} from 'react'

import{
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import Chart from '../Home/Chart'
import { Dimensions } from "react-native";
import ChartReport from './ChartReport';
import FetchData from '../../Utils/FetchData';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Report = (props) => {

    const {navigation, route} = props;
    const [data, setData] = useState({
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [0, 1, 2, 1, 2, 2, 2, 2, 2, 0],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
      legend: ['Strawberry-stauts'], // optional
    });
    if (route.params.name === "Temperature"){
      useEffect(() => {
        const getData = async () => {
          setData({
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: (await FetchData('temperature-sensor')).map((e) =>
                parseInt(e)
              ),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
          legend: ['Temperature'], // optional
        });
        }
        getData();
      }, []);
    }else if(route.params.name === "Humidity"){
            useEffect(() => {
        const getData = async () => {
          setData({
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: (await FetchData('humidity-sensor')).map((e) =>
                parseInt(e)
              ),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
          legend: ['Humidity'], // optional
        });
        }
        getData();
      }, []);
    }else if (route.params.name === "Light intensity"){
        useEffect(() => {
        const getData = async () => {
          setData({
          key: 4,
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: (await FetchData('light-sensor')).map((e) => parseInt(e)),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
          legend: ['Light'], // optional
        });
        }
        getData();
      }, []);
    }

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
      <ChartReport name={route.params.name} data={data}/>
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