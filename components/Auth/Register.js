import React, {useState} from 'react';
import{View, Text, StyleSheet, Image, Flatlist, TouchableOpacity, TextInput} from 'react-native'
import Welcome from '../../assets/welcome.png'
import {Dimensions} from "react-native";
import { ArrowAuth, KeyIcon, LockIcon, PersonIcon, StraberryLogo } from '../../assets';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Login = (props) => {
  const {navigation} = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
  <View style={{height: screenHeight}}>
    <View style={styles.root}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Let’s Get Started</Text>
      <Image source={StraberryLogo} style={styles.logo} />
    </View>
    <View style={styles.ContainerBtns}>

          <View style={styles.buttonAuth}>
        <Image source={PersonIcon} style={{width: 40, height: 40, marginRight: 10}}/>

      <TextInput style={styles.textBtn}
                onChangeText={setUsername}
                value={username}
                placeholder='Username...'
                />
          </View>
          <View style={styles.buttonAuth} 
          onPress={() => navigation.navigate('Home') 
        }>
        <Image source={LockIcon} style={{width: 40, height: 40, marginRight: 10}}/>
        <TextInput style={styles.textBtn}
                onChangeText={setPassword}
                value={password}
                placeholder='Password...'
                />
          </View>
          <View style={styles.buttonAuth} 
          onPress={() => navigation.navigate('Home') 
        }>
        <Image source={KeyIcon} style={{width: 40, height: 40, marginRight: 10}}/>
        <TextInput style={styles.textBtn}
                onChangeText={setPassword}
                value={password}
                placeholder='Key...'
                />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <View style={{backgroundColor: "#fff", borderRadius: 10, padding: 15, marginTop: 30}}
        >
        <Image source={ArrowAuth} style={{width: 40, height: 40, padding: 10}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text 
          style={{marginTop: 5, fontSize: 15, textDecorationLine: 'underline'}} 
          >Or Sign In</Text>
          </TouchableOpacity>
    </View>
</View>);       
}
        

const styles = StyleSheet.create({
    root: {
      marginTop: 15,
      alignItems: 'center',
      padding: 5,
    },
    logo: {
      width: 180,
      height: 180
    },
    ContainerBtns: {
      flex: 1,
      alignItems: 'center',
      marginTop: 8,
      flexBasis: "100%",
    },

    buttonAuth: {
      flexDirection: 'row',
      alignItems: 'center',
    backgroundColor: "#FFFFFF",
    opacity: 0.9,
    borderRadius: 30,
    color: "#090805",
    marginTop: 15,
    paddingHorizontal: 20
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 23,
    paddingVertical: 28,
    width: "75%"
  }

});