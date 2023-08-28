import {View, Text, Image} from 'react-native';
import React from 'react';
import {EventsData} from '../../api/events';

interface EventCardProps {
  item: EventsData;
}

const EventCard = ({item}: EventCardProps) => {
  return (
    <View>
      <Image source={{uri: item.imageUrl}} width={50} height={50} />
      <Text>{item.location}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

export default EventCard;
