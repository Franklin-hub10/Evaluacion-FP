import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screens1 from '../screens/Screens1';
import { Screens2 } from '../screens/Screens2';
import { Screens3 } from '../screens/Screens3';
import { Screens4 } from '../screens/Screens4';
import { Screens5 } from '../screens/Screens5';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {
          backgroundColor: 'black', 
        },
        headerTintColor: 'white', 
      }}
    >
      <Stack.Screen name="Home" options={{ headerShown: true }} component={Screens1} />
      <Stack.Screen name="Imagen1" options={{ headerShown: false }} component={Screens2} />
      <Stack.Screen name="Imagen2" options={{ headerShown: false }} component={Screens3} />
      <Stack.Screen name="Calculo1" options={{ headerShown: false }} component={Screens4} />
      <Stack.Screen name="Calculo2" options={{ headerShown: false }} component={Screens5} />

    </Stack.Navigator>
  )
}

