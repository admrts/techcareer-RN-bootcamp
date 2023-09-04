import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './EventDetailCard.style';
import {EventsDataProps} from '../../api/events';
import {useState} from 'react';
import {buyTicket} from '../../api/buyTicket';
import {useNavigation} from '@react-navigation/native';

interface EventCardProps {
  item: EventsDataProps;
}

const EventDetailCard = ({item}: EventCardProps) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handlePress = async () => {
    const status = await buyTicket(item.id);
    if (status == 201) {
      Alert.alert('Bilet Alındı');
      navigation.goBack();
    } else {
      Alert.alert('Hata');
      navigation.goBack();
    }
  };
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
          <ActivityIndicator animating={loading} style={styles.loading} />
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
        <Pressable style={styles.buyWrapper} onPress={handlePress}>
          <Text style={styles.buyText}>{item.price}₺ Satın Al</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailCard;
