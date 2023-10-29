import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../../home/infrastructure/framework/screens/HomeScreen';
import { TypeItenaryEnum } from '../../../domain/repository/ItineraryRepository';
import ItineraryDetailsScreen from '../../../../home/infrastructure/framework/screens/ItineraryDetailsScreen';

export type WelcomeStackParamList = {
  Home: undefined;
  ItineraryDetails: {type: TypeItenaryEnum};
};

const Stack = createStackNavigator<WelcomeStackParamList>();

export default function WelcomeRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItineraryDetails"
        component={ItineraryDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
