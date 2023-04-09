import React from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../../assets';
import Activity from '../Activities/Activity';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const ActivitiesPlant = [
  {
    key: 1,
    date: "Today",
    activities: [
        {
        key: 1,
            hour: "19:31",
            content: "Strawberry plant in healthy state",
          img: Avatar

        },
        {
        key: 2,
            hour: "17:31",
            content: "Strawberry plant showing signs of disease: macularis",
          img: Avatar

        },
        {
        key: 3,
            hour: "15:31",
            content: "Strawberry plant in healthy state",
          img: Avatar

        },
        {
            key: 4,
                hour: "9:31",
                content: "Strawberry plant in healthy state",
          img: Avatar

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
          content: "Strawberry plant in healthy state",
          img: Avatar
      },
      {
        key: 2,
          hour: "9:53",
          content: "Strawberry plant showing signs of disease: Sphaerotheca macularis",
          img: Avatar

      },
      {
        key: 3,
          hour: "9:31",
          content: "Strawberry plant in healthy state",
          img: Avatar

      }
  ]
},
]
export default function PlantCondition() {
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
  return (
    <ScrollView>

    <View style={styles.ctnAtvt}>
    <FlatList
        data={months}
        renderItem={({item}) =><View style={styles.textContainer}><Text style={styles.textStyle}>{item.value}</Text></View>}
        keyExtractor={item=>item.key}
        contentContainerStyle={styles.monthContainer}
      />
      {
          ActivitiesPlant.map((ActivityPlant)=>(
              <View key={ActivityPlant.key} style={{marginBottom: 20}}>
            <Text style={styles.dateAtvt}>{ActivityPlant.date}</Text>
            {
                ActivityPlant.activities.map((activity, index)=>(
                    <Activity activity={activity} key={index}/>
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
  dateAtvt: {
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: "600"
  },
  monthContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    // marginTop: 50,
  },
  textContainer:{
    width: screenWidth*1/7,
    height: 30,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#FFF5F5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})