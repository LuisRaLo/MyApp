import React, {Fragment} from 'react';
import {IItinerary} from '../../../domain/repository/ItineraryRepository';
import {HStack, Image, Text, VStack} from '@gluestack-ui/themed';

type Props = {
  navigation: any;
  itineraryList: IItinerary[];
};

export default function ItineraryListComponent({
  navigation,
  itineraryList,
}: Props) {
  return (
    <Fragment>
      <VStack flex={1} justifyContent="flex-start" alignItems="flex-start">
        {itineraryList.map((itinerary, index) => (
          <HStack key={index} mb={'$5'}>
            <VStack>
              <Image
                source={{uri: itinerary.pathImage}}
                alt="profile"
                w={'$24'}
                h={'$24'}
              />
            </VStack>

            <VStack
              ml={'$2'}
              justifyContent="center"
              alignItems="flex-start"
              flex={1}
              overflow="hidden"
              h={'$24'}>
              <Text>
                <Text bold>Nombre:</Text> {itinerary.name}
              </Text>
              <Text>
                <Text bold>ubicación:</Text> {itinerary.location || '-'}
              </Text>
              <Text>
                <Text bold>descripción:</Text> {itinerary.name || '-'}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Fragment>
  );
}
