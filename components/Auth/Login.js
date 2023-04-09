import React, {useState} from 'react';
import{View, Text, StyleSheet, Image, Flatlist, TouchableOpacity, TextInput} from 'react-native'
import Welcome from '../../assets/welcome.png'
import {Dimensions} from "react-native";
import { ArrowAuth, LockIcon, PersonIcon, StraberryLogo } from '../../assets';
import useGlobalAuthContext from "../../context/AuthContext"
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Login = (props) => {
  const {navigation} = props
  const {setUser} = useGlobalAuthContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = ()=>{
setUser({username, password})
  }
  return (
  <View style={{height: screenHeight}}>
    <View style={styles.root}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome To Strawberry farm</Text>
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
        >
        <Image source={LockIcon} style={{width: 40, height: 40, marginRight: 10}}/>
        <TextInput style={styles.textBtn}
                onChangeText={setPassword}
                value={password}
                placeholder='Password...'
                />
          </View>
          <TouchableOpacity onPress={handleLogin}>
          <View style={{backgroundColor: "#fff", borderRadius: 10, padding: 15, marginTop: 30}}
        >
        <Image source={ArrowAuth} style={{width: 50, height: 50, padding: 10}}/>
          </View>
          </TouchableOpacity >
          <Text style={{marginTop: 5, fontSize: 15, textDecorationLine: 'underline'}}>Or Sign Up</Text>
    </View>
</View>);       
}
        

const styles = StyleSheet.create({
    root: {
      marginTop: 30,
      alignItems: 'center',
      padding: 5,
    },
    logo: {
      width: 200,
      height: 200
    },
    ContainerBtns: {
      flex: 1,
      alignItems: 'center',
      marginTop: 15,
      flexBasis: "100%",
    },

    buttonAuth: {
      flexDirection: 'row',
      alignItems: 'center',
    backgroundColor: "#FFFFFF",
    opacity: 0.9,
    borderRadius: 30,
    color: "#090805",
    marginTop: 20,
    paddingHorizontal: 20
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 23,
    paddingVertical: 35,
    width: "70%"
  }

});