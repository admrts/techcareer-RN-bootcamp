import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {EventsData} from '../../api/events';
import styles from './EventCard.style';

interface EventCardProps {
  item: EventsData;
}

const EventCard = ({item}: EventCardProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <Pressable style={styles.container} onPress={() => console.log(item.id)}>
      <Image
        source={{uri: item.imageUrl}}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      <ActivityIndicator animating={loading} style={styles.loading} />

      <Text>{item.name}</Text>
      <Text>{item.city}</Text>
      <Text>{item.location}</Text>
      <Text>{item.price}</Text>
    </Pressable>
  );
};

export default EventCard;
