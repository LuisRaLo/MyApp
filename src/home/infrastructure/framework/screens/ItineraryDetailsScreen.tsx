import React, {Fragment} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {WelcomeStackParamList} from '../../../../shared/infrastructure/framework/router/welcome.route';
import useItinerary from '../hooks/useItinerary';
import BackgroundComponent from '../../../../shared/infrastructure/framework/components/BackgroundComponent';
import {Center, Text} from '@gluestack-ui/themed';
import ItineraryListComponent from '../components/ItineraryListComponent';
import BackArrowComponent from '../components/BackArrowComponent';

interface Props
  extends StackScreenProps<WelcomeStackParamList, 'ItineraryDetails'> {}

export default function ItineraryDetailsScreen({route, navigation}: Props) {
  const {type} = route.params;
  const {itinerary, titleToSpanish} = useItinerary(type);

  return (
    <Fragment>
      <BackArrowComponent navigation={navigation} />
      <BackgroundComponent scrollable>
        <Center
          backgroundColor="#67de3c"
          w={'$full'}
          h={'$16'}
          alignItems="flex-end"
          paddingHorizontal={20}
          pl={'$5'}>
          <Text fontSize={'$2xl'} color="$white" bold>
            {titleToSpanish(type)}
          </Text>
        </Center>

        <Center
          flex={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          mt={'$10'}
          marginHorizontal={20}>
          <ItineraryListComponent
            itineraryList={itinerary}
            navigation={navigation}
          />
        </Center>
      </BackgroundComponent>
    </Fragment>
  );
}
