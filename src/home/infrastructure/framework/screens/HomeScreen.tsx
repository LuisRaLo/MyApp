import React from 'react';
import {VStack, Center, Heading, Text, Image} from '@gluestack-ui/themed';
import {StackScreenProps} from '@react-navigation/stack';
import {WelcomeStackParamList} from '../../../../shared/infrastructure/framework/router/welcome.route';
import BackgroundComponent from '../../../../shared/infrastructure/framework/components/BackgroundComponent';
import LinearGradient from 'react-native-linear-gradient';
import MenuComponent from '../components/MenuComponent';

interface Props extends StackScreenProps<WelcomeStackParamList, 'Home'> {}

export default function HomeScreen({navigation}: Props) {
  return (
    <BackgroundComponent>
      <LinearGradient
        colors={['rgba(120, 170, 1, .6)', 'rgba(0, 0, 0, 0)']}
        style={{
          flex: 1,
          height: 80,
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <VStack alignItems="center" w={'$full'}>
          <Heading size="3xl">Jardin-Trip</Heading>
        </VStack>
      </LinearGradient>

      <Center
        flex={1}
        justifyContent="center"
        alignItems="center"
        mt={'$40'}
        mb={'$20'}>
        <Text fontSize={'$2xl'} mb={30}>
          Qué planes tienes para hoy{' '}
        </Text>
        <MenuComponent navigation={navigation} />
      </Center>

      <Center flex={1} justifyContent="center" alignItems="center" mt={'$5'}>
        <Image
          source={require('../../../../shared/infrastructure/framework/assets/images/imagen_foot_inicio.jpg')}
          alt="profile"
          w={'$full'}
          h={'$full'}
        />
      </Center>
    </BackgroundComponent>
  );
}
