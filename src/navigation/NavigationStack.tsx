import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InitialScreen from '../screens/InitialScreen';
import InformativeScreen from '../screens/InformativeScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Informative"
        component={InformativeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
