import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {config, GluestackUIProvider} from '@gluestack-ui/themed';
import WelcomeRoute from './src/shared/infrastructure/framework/router/welcome.route';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <WelcomeRoute />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
