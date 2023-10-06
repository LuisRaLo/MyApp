import React, {Fragment} from 'react';
import {VStack, Center, Heading, Text} from '@gluestack-ui/themed';
import {StackScreenProps} from '@react-navigation/stack';
import {WelcomeStackParamList} from '../../../../shared/infrastructure/framework/router/welcome.route';
import BackgroundComponent from '../../../../shared/infrastructure/framework/components/BackgroundComponent';
import LinearGradient from 'react-native-linear-gradient';
import MenuComponent from '../components/MenuComponent';

interface Props extends StackScreenProps<WelcomeStackParamList, 'Home'> {}

export default function HomeScreen({route, navigation}: Props) {
  const params = route.params;

  return (
    <BackgroundComponent>
      <LinearGradient colors={['rgba(120, 170, 1, .6)', 'rgba(0, 0, 0, 0)']}>
        <VStack alignItems="center" w={'$full'}>
          <Heading size="4xl">Jardin-Trip</Heading>
        </VStack>
      </LinearGradient>

      <Center flex={1} justifyContent="center" alignItems="center" mt={'$5'}>
        <Text fontSize={'$2xl'} mb={30}>Qué planes tienes para hoy </Text>
        <MenuComponent navigation={navigation} />
      </Center>
    </BackgroundComponent>
  );
}
