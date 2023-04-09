import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// You can import from local files
import { Dimensions } from "react-native";
import AuthNavigator from './components/Navigation/AuthNavigator';
import { AuthProvider } from './context/AuthContext';
const screenHeight = Dimensions.get("window").height;
import client from './Utils/adafruit'
export default function App() {
  return (
    <AuthProvider>
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#07D24C', '#F98ECE', '#A80A43']}
        locations={[0,0.3,1]}
        style={{height:screenHeight}}
        >
          <AuthNavigator/>
        </LinearGradient>
    </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});