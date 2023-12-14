// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movie from './src/Movie';
import Home from './src/Home';
import Login from './src/Login';
import BottomTabNavigator from './src/BotttomTabNavigator';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Movie'component={Movie} /> */}
       
         <Stack.Screen name='BottomTopNavigator'component={BottomTabNavigator} /> 
         <Stack.Screen name='Login'component={Login} />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;