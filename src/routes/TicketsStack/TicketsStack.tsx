import EventsScreen from '../../screens/EventsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventDetailScreen from '../../screens/EventDetailScreen';
import TicketsScreen from '../../screens/TicketsScreen';
import MapScreen from '../../screens/MapScreen';

export type TicketStackParams = {
  Tickets: undefined;
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

const Stack = createNativeStackNavigator<TicketStackParams>();

export const TicketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{title: 'Biletler'}}
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
