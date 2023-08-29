import {View, Text, Image, Pressable, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {EventsData} from '../../api/events';
import styles from './EventCard.style';
import dayjs = require('dayjs');

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

      <View style={styles.description}>
        <View style={styles.textContainer}>
          <Text style={styles.titles}>Etkinlik Adı:</Text>
          <Text style={styles.variables}>{item.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titles}>Şehir: </Text>
          <Text style={styles.variables}>{item.city}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titles}>Konum: </Text>
          <Text style={styles.variables}>{item.location}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titles}>Tarih: </Text>
          <Text style={styles.variables}>{item.date}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titles}>Saat: </Text>
          <Text style={styles.variables}>{item.time}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}₺</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default EventCard;
