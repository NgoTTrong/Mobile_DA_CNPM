import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { SnowIcon,HumidityIcon, LightIcon,Avatar   } from '../../assets';
import Activity from './Activity';
import Footer from '../Footer/Footer';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const ActivitiesAll = [
  {
    key: 1,
    date: "Today",
    activities: [
        {
        key: 1,
            hour: "19:31",
            content: "Watering 200mL (Manual)"
        },
        {
        key: 2,
            hour: "17:31",
            content: "Profile modified"
        },
        {
        key: 3,
            hour: "15:31",
            content: "Lighting On (Manual)"
        },
        {
            key: 4,
                hour: "9:31",
                content: "Watering 200mL (Manual)"
            }
    ]
  },
  {
  key: 2,
  date: "02/03/2023",
  activities: [
      {
        key: 1,
          hour: "10:02",
          content: "Change PIN"
      },
      {
        key: 2,
          hour: "9:53",
          content: "Adjust watering schedule"
      },
      {
        key: 3,
          hour: "9:31",
          content: "Sign in as [UserName]"
      }
  ]
},
]
export default Activities =() =>  {
  return (
    <ScrollView>

    <View style={styles.ctnAtvt}>
      {
          ActivitiesAll.map((ActivitiesOne)=>(
              <View key={ActivitiesOne.key} style={{marginBottom: 20}} >
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: "600"}}>{ActivitiesOne.date}</Text>
            {
                ActivitiesOne.activities.map((activity)=>(
                    <Activity activity={activity} key={activity.key}/>
                    ))
                }
          </View>
        ))
    }
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ctnAtvt: {
    minHeight: screenHeight*6.5/8,
    width: screenWidth,
    padding: 25,
    justifyContent: 'space-between',
  },
})