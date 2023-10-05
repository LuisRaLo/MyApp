import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/shared/infrastructure/framework/screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
