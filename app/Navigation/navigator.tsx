import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AfterLoginNavigator from './afterLoginNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <AfterLoginNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
