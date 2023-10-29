import React, {Fragment} from 'react';
import {IItinerary} from '../../../../shared/domain/repository/ItineraryRepository';
import {Button, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import {Alert, Linking, Platform} from 'react-native';

type Props = {
  navigation: any;
  itineraryList: IItinerary[];
};

export default function ItineraryListComponent({itineraryList}: Props) {
  const ImageItinerary = ({pathImage}: {pathImage: string}): any => {
    if (pathImage) {
      return (
        <Image source={{uri: pathImage}} alt="profile" w={'$24'} h={'$24'} />
      );
    }
    return <></>;
  };

  function gotoLocation(
    location: {lat: number; lng: number},
    locationName: string,
  ): void | Promise<any> {
    const scheme = Platform.select({
      ios: 'maps://0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${location.lat},${location.lng}`;
    const url: string | undefined = Platform.select({
      ios: `${scheme}${locationName}@${latLng}`,
      android: `${scheme}${latLng}(${locationName})`,
    });

    if (url) {
      return Linking.openURL(url);
    }

    return Alert.alert(
      'No pudimos procesar su petición en este momentos, por favor intentelo nuevamente más tarde',
    );
  }

  if (itineraryList.length === 0) {
    return (
      <Fragment>
        <VStack flex={1} justifyContent="flex-start" alignItems="flex-start">
          <Text>No existen registros en la Base de Datos </Text>
        </VStack>
      </Fragment>
    );
  }

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
              h={'auto'}>
              <Text fontSize={'$sm'}>
                <Text bold>Nombre:</Text> {itinerary.name}
              </Text>

              {itinerary.location ? (
                <Button
                  variant={'link'}
                  onPress={() =>
                    gotoLocation(
                      {
                        lat: itinerary.location?.lat as number,
                        lng: itinerary.location?.lng as number,
                      },
                      itinerary.name,
                    )
                  }>
                  <Text bold color="$indigo500">
                    Ir a la ubicación
                  </Text>
                </Button>
              ) : (
                <Text fontSize={'$sm'}>
                  <Text bold>ubicación:</Text>{' '}
                  {JSON.stringify(itinerary.location) || '-'}
                </Text>
              )}

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
