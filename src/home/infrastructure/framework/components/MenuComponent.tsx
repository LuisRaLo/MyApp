import {Center, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import React, {Fragment} from 'react';
import {TouchableOpacity} from 'react-native';
import {TypeItenaryEnum} from '../../../domain/repository/ItineraryRepository';

type MenuComponentsProps = {
  navigation: any;
};

export default function MenuComponent({navigation}: MenuComponentsProps) {
  return (
    <Fragment>
      <HStack space="lg">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.location,
            })
          }>
          <Center justifyContent="center" alignItems="center">
            <Image
              size="xl"
              source={{
                uri: 'https://source.unsplash.com/random',
              }}
              alt="image"
            />
            <Text fontSize={'$2xl'} mt={'$2'}>
              Lugares
            </Text>
          </Center>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.event,
            })
          }>
          <Center justifyContent="center" alignItems="center">
            <Image
              size="xl"
              source={{
                uri: 'https://source.unsplash.com/random',
              }}
              alt="image"
            />
            <Text fontSize={'$2xl'} mt={'$2'}>
              Eventos
            </Text>
          </Center>
        </TouchableOpacity>
      </HStack>

      <HStack space="lg" mt={'$5'}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.enterprise,
            })
          }>
          <Center justifyContent="center" alignItems="center">
            <Image
              size="xl"
              source={{
                uri: 'https://source.unsplash.com/random',
              }}
              alt="image"
            />
            <Text fontSize={'$2xl'} mt={'$2'}>
              Empresas
            </Text>
          </Center>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.restaurant,
            })
          }>
          <Center justifyContent="center" alignItems="center">
            <Image
              size="xl"
              source={{
                uri: 'https://source.unsplash.com/random',
              }}
              alt="image"
            />
            <Text fontSize={'$2xl'} mt={'$2'}>
              Restaurantes
            </Text>
          </Center>
        </TouchableOpacity>
      </HStack>
    </Fragment>
  );
}
