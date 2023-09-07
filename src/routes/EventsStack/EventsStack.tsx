import EventsScreen from '../../screens/EventsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventDetailScreen from '../../screens/EventDetailScreen';
import MapScreen from '../../screens/MapScreen';

export type EventsStackParams = {
  Events: undefined;
  Detail: {
    id: string;
  };
  Map: {
    location: {
      name: string;
      latitude: number;
      longitude: number;
    };
  };
};

const Stack = createNativeStackNavigator<EventsStackParams>();

export const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{title: 'Etkinlikler'}}
      />
      <Stack.Screen
        name="Detail"
        component={EventDetailScreen}
        options={{title: 'Detaylar'}}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{title: 'Konum'}}
      />
    </Stack.Navigator>
  );
};
