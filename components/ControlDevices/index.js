import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { calendarIcon, icon } from '../../assets';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const index = ({children}) => {
  return (
    <View style={styles.ctnControl}>
         <View style={styles.ctnTop}>
            <View style={{flexDirection: "column", alignItems: "center"}}>
                <Image source={calendarIcon} style={{width: 60, height: 60, marginBottom: 10}}/>
                <Text>Schedule</Text>
            </View>
            <View style={{flexDirection: "column", alignItems: "center"}}>
                <Image source={icon} style={{width: 60, height: 60, marginBottom: 10}}/>
                <Text>Auto</Text>
            </View>
        </View>
        <View style={styles.ctnMiddle}>
      {children}
        </View>


          <View
      style={{
        alignItems: 'center'
      }}
      >
      <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        width={230}
        onComplete={() => {}}
        title="OFF"
        titleStyle={{ color: 'black',
        fontSize: 28,
        fontWeight: 'bold',}}
        borderRadius={100}
        containerGradientProps={{
          colors: ['red', 'white'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        underlayTitle="ON"
        underlayTitleStyle={{ color: 'black',
        fontSize: 28,
        fontWeight: 'bold',}}
        underlayStyle={{
          borderRadius: 100,
        }}
        underlayContainerGradientProps={{
          colors: ['green', 'white'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        />
    </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
ctnControl: {
flexDirection: "column",
justifyContent: 'space-between',
alignItems: 'center',
height: screenHeight - 200
},
ctnTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: screenWidth,
    marginTop: 30
},
ctnMiddle: {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: screenWidth,
}
})