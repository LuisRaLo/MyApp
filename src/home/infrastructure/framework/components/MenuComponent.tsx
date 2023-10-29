import {Center, HStack, Image, Text} from '@gluestack-ui/themed';
import React, {Fragment} from 'react';
import {TouchableOpacity} from 'react-native';
import {TypeItenaryEnum} from '../../../../shared/domain/repository/ItineraryRepository';

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
              type: TypeItenaryEnum.places,
            })
          }>
          <Center justifyContent="center" alignItems="center" mr={'$5'}>
            <Image
              size="xl"
              source={require('../../../../shared/infrastructure/framework/assets/images/lugares.png')}
              alt="image"
            />
            <Text fontSize={'$xl'} mt={'$2'}>
              Lugares
            </Text>
          </Center>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.events,
            })
          }>
          <Center justifyContent="center" alignItems="center">
            <Image
              size="xl"
              source={require('../../../../shared/infrastructure/framework/assets/images/evento.png')}
              alt="image"
            />
            <Text fontSize={'$xl'} mt={'$2'}>
              Eventos
            </Text>
          </Center>
        </TouchableOpacity>
      </HStack>

      <HStack space="lg" mt={'$5'}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.enterprises,
            })
          }>
          <Center justifyContent="center" alignItems="center" mr={'$5'}>
            <Image
              size="xl"
              source={require('../../../../shared/infrastructure/framework/assets/images/edificio.png')}
              alt="image"
            />
            <Text fontSize={'$xl'} mt={'$2'}>
              Empresas
            </Text>
          </Center>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItineraryDetails', {
              type: TypeItenaryEnum.restaurants,
            })
          }>
          <Center justifyContent="center" alignItems="center">
            <Image
              size="xl"
              source={require('../../../../shared/infrastructure/framework/assets/images/restaurantes_parqueaderos.png')}
              alt="image"
            />
            <Text fontSize={'$xl'} mt={'$2'}>
              Restaurantes
            </Text>
          </Center>
        </TouchableOpacity>
      </HStack>
    </Fragment>
  );
}
