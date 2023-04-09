import React from 'react';
import {NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../Auth';
import BottomTabNavigator from './FooterNavigator';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import userGlobalAuthContext from "../../context/AuthContext"
const Stack = createNativeStackNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };
import client from '../../Utils/adafruit';
function AuthNavigator() {
  const {user} = userGlobalAuthContext();
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={ !user ? "Auth" : "BottomTabNavigator"}> 
      {!user ? <><Stack.Screen
        name={"Auth"}
        component={Auth}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={"Login"}
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
        },}}
      />
        <Stack.Screen
        name={"Register"}
        component={Register}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
        },}}
      /></>:
      <Stack.Screen
        name={"BottomTabNavigator"}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
