import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import styles from './EventDetailCard.style';
import {EventsDataProps} from '../../api/events';
import {useState} from 'react';

interface EventCardProps {
  item: EventsDataProps;
}

const EventDetailCard = ({item}: EventCardProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.head}>
          <Image
            source={{uri: item.imageUrl}}
            style={styles.image}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
          <View style={styles.wrappers}>
            <Text style={styles.titles}>Etkinlik Adı: </Text>
            <Text style={styles.variables}>{item.name}</Text>
          </View>
          <View style={styles.wrappers}>
            <Text style={styles.titles}>Etkinlik Kategorisi: </Text>
            <Text style={styles.variables}>{item.category}</Text>
          </View>
          <View style={styles.wrappers}>
            <Text style={styles.titles}>Şehir: </Text>
            <Text style={styles.variables}>{item.city}</Text>
          </View>
          <View style={styles.wrappers}>
            <Text style={styles.titles}>Tarih: </Text>
            <Text style={styles.variables}>{item.date}</Text>
          </View>
          <View style={styles.wrappers}>
            <Text style={styles.titles}>Konum: </Text>
            <Text style={styles.variables}>{item.location}</Text>
          </View>
        </View>

        <Text style={styles.rulesTitle}>Etkinlik Kuralları</Text>

        {item.rules.map((rule: string, index) => {
          return (
            <Text style={styles.rules} key={index}>
              * {rule}
            </Text>
          );
        })}
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>Fiyat: {item.price}₺</Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <Pressable style={styles.favorite}>
            <Text style={styles.buttonText}>Favoriye Ekle</Text>
          </Pressable>
          <Pressable style={styles.buy}>
            <Text style={styles.buttonText}>Satın Al</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailCard;
