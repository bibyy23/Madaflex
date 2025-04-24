import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack'
import Inscription from './script/inscription';
import Login from './script/login';
import Chargment from './script/chargment';
import App1 from './mflex/App1'
import React from 'react';
import Ecran from './script/ecran';
const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{headerShown: false,
    CardStyleInterpolators:CardStyleInterpolators.forHorizontalIOS}}
    >
    
      <Stack.Screen name="ecran" component={Ecran}/>
      <Stack.Screen name="splash" component={Chargment}/>
      <Stack.Screen name="inscription" component={Inscription}/>
      <Stack.Screen name="Login" component={Login}/>
   
      <Stack.Screen name='navbar' component={App1}/>
      
    </Stack.Navigator>
   </NavigationContainer>
  );
}


