import React from 'react';
import {VStack, Text} from '@gluestack-ui/themed';
import {StackScreenProps} from '@react-navigation/stack';
import {WelcomeStackParamList} from '../../../../shared/infrastructure/framework/router/welcome.route';
import BackgroundComponent from '../../../../shared/infrastructure/framework/components/BackgroundComponent';

interface Props extends StackScreenProps<WelcomeStackParamList, 'Home'> {}

export default function HomeScreen({route, navigation}: Props) {
  const params = route.params;

  return (
    <BackgroundComponent paddingX={30} paddingY={20} scrollable>
      <VStack>
        <Text>Home</Text>
        <Text>Welcome</Text>
      </VStack>
    </BackgroundComponent>
  );
}
