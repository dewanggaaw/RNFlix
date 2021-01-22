import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Navigations from './src/Shared/Navigation';
import {createStackNavigator} from '@react-navigation/stack';
import DashPage from './src/Features/Dashboard/Dashboard';
import DetailPage from './src/Features/Detail/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashPage} />
        <Stack.Screen name="Detail" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
