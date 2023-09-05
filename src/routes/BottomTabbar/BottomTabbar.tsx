import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EventsStack} from '../EventsStack/EventsStack';
import {TicketStack} from '../TicketsStack/TicketsStack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function BottomTabbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="EventsStack"
          component={EventsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="bars" size={size} color={color} />
            ),
            title: 'Etkinlikler',
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#828282',
          }}
        />
        <Tab.Screen
          name="TicketStack"
          component={TicketStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="ticket" size={size} color={color} />
            ),
            title: 'Biletler',
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#828282',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
