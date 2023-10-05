import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

export type WelcomeStackParamList = {
  Home: undefined;
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
    </Stack.Navigator>
  );
}
