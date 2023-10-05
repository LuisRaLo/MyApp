import React from 'react';
import {VStack, Text} from '@gluestack-ui/themed';
import BackgroundComponent from '../components/BackgroundComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { WelcomeStackParamList } from '../router/welcome.route';

interface Props extends StackScreenProps<WelcomeStackParamList, 'Home'>{};

export default function HomeScreen({route, navigation}: Props) {
  const params = route.params;
  
  return (
    <BackgroundComponent paddingX={30} paddingY={20}>
      <Text>asdkjask</Text>
    </BackgroundComponent>
  );
}
