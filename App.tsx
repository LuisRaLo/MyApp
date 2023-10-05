import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeRoute from './src/shared/infrastructure/framework/router/welcome.route';

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeRoute />
    </NavigationContainer>
  );
}
