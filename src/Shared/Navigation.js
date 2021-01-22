import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Features/Dashboard/Dashboard';
import Detail from '../Features/Detail/Detail';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
