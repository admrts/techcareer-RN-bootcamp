import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EventsStackParams} from '../../routes/EventsStack/EventsStack';

type Props = NativeStackScreenProps<EventsStackParams, 'Detail'>;

const EventDetailScreen: React.FC<Props> = ({route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile {route.params.id}</Text>
    </View>
  );
};

export default EventDetailScreen;
