import {NavigationContainer} from '@react-navigation/native';
import EventsScreen from '../../screens/EventsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventDetailScreen from '../../screens/EventDetailScreen';

export type EventsStackParams = {
  Events: undefined;
  Detail: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<EventsStackParams>();

export const EventsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Detail" component={EventDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
