import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home'
import Pumper from '../ControlDevices/Pumper'
import Datalog from '../Datalog/Datalog';
import Report from '../Report/Report'
import PlantCondition from '../PlantCondition/PlantCondition';
const Stack = createNativeStackNavigator();


const DataLogNavigator = () => {
  return (
      <Stack.Navigator  animationEnabled initialRouteName='DataLog'>
    <Stack.Screen name="DataLog" component={Datalog}
            options={{
              title: 'Data log',
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
            },}}
        />
            <Stack.Screen name="Temperature" component={Report} 
        options={{
            title: 'Chart Temperature',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        />
                    <Stack.Screen name="Humidity" component={Report} 
        options={{
            title: 'Chart Humidity',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        /> 
                    <Stack.Screen name="LightIntensity" component={Report} 
        options={{
            title: 'Chart Light intensity',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
          },}}
        /> 
        <Stack.Screen name="PlantCondition" component={PlantCondition} 
        options={{
            title: 'Plant Condition',
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

export default DataLogNavigator