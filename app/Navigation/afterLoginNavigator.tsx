import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/GetStarted';
import FamilyDashboard from '../Screens/FamilyDashboard';
import PortFolio from '../Screens/Portfolio';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: 'GetStarted',
    component: GetStarted,
  },
  {
    name: 'FamilyDashboard',
    component: FamilyDashboard,
  },
  {
    name: 'PortFolio',
    component: PortFolio,
  },
];

const AfterLoginNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {screens.map((item: {name: string; component: any}, index) => (
      <Stack.Screen name={item.name} component={item.component} key={index} />
    ))}
  </Stack.Navigator>
);

export default AfterLoginNavigator;
