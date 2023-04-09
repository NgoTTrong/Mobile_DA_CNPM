import React from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Chart = ({name}) => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: [name] // optional
      };
      
    return <View style={styles.chartContainer}>
          <LineChart
            data={data}
            width={screenWidth}
            height={screenHeight*2.5/8}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
          />
          {/* <FlatList
            data={records}
            keyExtractor={item => item.key}
            renderItem={({item})=><View style={styles.dotStyle}></View>}
            contentContainerStyle={styles.chartDot}
          /> */}
        </View>
}

const chartConfig={
      backgroundColor: "#bff5ff",
      backgroundGradientFrom: "#bef4fe",
      backgroundGradientFromOpacity: 0.2,
      backgroundGradientTo: "#FFF",
      backgroundGradientToOpacity: 0.5,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
}

const styles = StyleSheet.create({
    chartContainer:{
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 15,
    marginLeft: 15,
    overflow: "hidden"
  },
  dotStyle:{
    width:10,
    height:10,
    backgroundColor:'#C7c2be',
    borderRadius: 50,
    marginLeft:2,
    marginRight:2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16.00,

    elevation: 24,
  },
  chartDot:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  }
})