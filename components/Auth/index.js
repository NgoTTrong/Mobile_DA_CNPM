import React, {useState} from 'react';
import{View, Text, StyleSheet, Image, Flatlist, TouchableOpacity} from 'react-native'
import Welcome from '../../assets/welcome.png'
import {Dimensions} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Login = (props) => {
  const {navigation} = props
  return (<View style={{height: screenHeight}}>
    <View style={styles.root}>
      <Image source={Welcome} style={styles.logo} resizemode="contain" />
    </View>
    <View style={styles.ContainerBtns}>
      <TouchableOpacity onPress={() => navigation.navigate('Login') }>

          <View style={styles.buttonAuth} >
      <Text style={styles.textBtn}>Sign In</Text>
          </View>
            </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('Register') }
          >

          <View style={styles.buttonAuth} 
          >
      <Text style={styles.textBtn}>Sign Up</Text>
          </View>
        </TouchableOpacity>

    </View> 
</View>);       
}
        

const styles = StyleSheet.create({
    root: {
      marginTop: 70,
      alignItems: 'center',
      padding: 5,
    },
    logo: {
      width: '100%',
      height: 375,
    },
    ContainerBtns: {
      flex: 1,
      alignItems: 'center',
      flexBasis: "100%",
    },

    buttonAuth: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#fff",
    opacity: 0.7,
    alignItems: 'center',
    borderRadius: 30,
    color: "#090805",
    paddingHorizontal: "30%",
    // width: "80%",
    padding: 35,
    marginTop: 30,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 25
  }

});