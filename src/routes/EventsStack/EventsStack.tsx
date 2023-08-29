// In App.js in a new project

import * as React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EventsScreen from '../../screens/EventsScreen';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<EventsStackParams, 'Detail'>;

const Detail: React.FC<Props> = ({route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile {route.params.id}</Text>
    </View>
  );
};

export type EventsStackParams = {
  Events: undefined;
  Detail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<EventsStackParams>();

export const EventsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
