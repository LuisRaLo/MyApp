import React, {Fragment} from 'react';
import {IItinerary} from '../../../domain/repository/ItineraryRepository';
import {HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import {itineraryImages} from '../../../../mocks/Itinerary';

type Props = {
  navigation: any;
  itineraryList: IItinerary[];
};

export default function ItineraryListComponent({
  navigation,
  itineraryList,
}: Props) {
  const ImageItinerary = ({pathImage}: {pathImage: string}): any => {
    if (pathImage) {
      return (
        <Image
          source={itineraryImages[pathImage]}
          alt="profile"
          w={'$24'}
          h={'$24'}
        />
      );
    }
    return <></>;
  };

  return (
    <Fragment>
      <VStack flex={1} justifyContent="flex-start" alignItems="flex-start">
        {itineraryList.map((itinerary, index) => (
          <HStack key={index} mb={'$5'}>
            <VStack>
              <ImageItinerary pathImage={itinerary.pathImage} />
            </VStack>

            <VStack
              ml={'$2'}
              justifyContent="center"
              alignItems="flex-start"
              flex={1}
              overflow="hidden"
              h={"auto"}>
              <Text fontSize={'$sm'}>
                <Text bold>Nombre:</Text> {itinerary.name}
              </Text>
              <Text fontSize={'$sm'}>
                <Text bold>ubicación:</Text> {itinerary.location || '-'}
              </Text>
              <Text fontSize={'$sm'}>
                <Text bold>descripción:</Text> {itinerary.description || '-'}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Fragment>
  );
}
