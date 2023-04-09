import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Home from '../Home/Home';
import { HomeIcon, ActivityIcon, DataLog, SettingIcon } from '../../assets';
import DataLogNavigator from "./DataLogNavigator"
import Footer from "../Footer/Footer"
import {useNavigation} from '@react-navigation/native';
import Activities from '../Activities/Activities';
import Datalog from '../Datalog/Datalog';
import Settings from '../Settings/Settings';
import MyStack from './Navigator';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator tabBar={(props) => <Footer {...props} 
    options={{}}
    />}>
    <Tab.Screen name="MyStack" component={MyStack} 
    options={{
      title: HomeIcon,
      headerShown: false}}
    />
    <Tab.Screen name="Activities" component={Activities} 
            options={{
              tabBarLabel: ActivityIcon,
              title: "Activities",
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
            },}}/>
    <Tab.Screen name="DataLogNavigator" component={DataLogNavigator}
        options={{
          title: DataLog,
          headerShown: false}}
        
    />
    <Tab.Screen name="Settings" component={Settings} 
                    options={{
              tabBarLabel: SettingIcon,

                      title: "Settings",
                      headerStyle: {
                        backgroundColor: 'transparent',
                      },
                      headerTitleAlign: 'center',
                      headerTintColor: '#000',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                    },}}/>

  </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    paddingLeft: 30,
    backgroundColor: "#fff",
    borderTopWidth: 0,
    bottom: 30,
    right: 10,
    left: 10,
    height: 92,
  },
});
