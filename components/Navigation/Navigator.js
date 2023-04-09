import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home'
import Pumper from '../ControlDevices/Pumper'
import AirConditioner from '../ControlDevices/AirConditioner';
import Light from '../ControlDevices/Light';
const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
      <Stack.Navigator animationEnabled initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} 
        options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
          
        />
        <Stack.Screen name="Pumper" component={Pumper} 
        options={{
            title: 'Control Pumper',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />   
                <Stack.Screen name="AirConditioner" component={AirConditioner} 
        options={{
            title: 'Control Air Condition',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />
                <Stack.Screen name="Light" component={Light} 
        options={{
            title: 'Control Light',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />               
      </Stack.Navigator>
    // </NavigationContainer>  
  );
};

export default MyStack