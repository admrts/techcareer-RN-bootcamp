import EventsScreen from '../../screens/EventsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventDetailScreen from '../../screens/EventDetailScreen';
import TicketsScreen from '../../screens/TicketsScreen';

export type TicketStackParams = {
  Tickets: undefined;
  Detail: {
    id: string;
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
    </Stack.Navigator>
  );
};
