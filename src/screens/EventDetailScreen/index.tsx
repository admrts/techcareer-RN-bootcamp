import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EventsStackParams} from '../../routes/EventsStack/EventsStack';
import {useAppSelector, useAppDispatch} from '../../redux/hook';
import {increment} from '../../redux/eventsSlice';

type Props = NativeStackScreenProps<EventsStackParams, 'Detail'>;

const EventDetailScreen: React.FC<Props> = ({route}) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(store => store.events.counter);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile {route.params.id}</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>Arttır</Text>
      </Pressable>
      <Text>Count: {counter}</Text>
    </View>
  );
};

export default EventDetailScreen;
