import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './EventDetailCard.style';
import {EventsDataProps} from '../../api/events';
import {useEffect, useState} from 'react';
import {buyTicket} from '../../api/buyTicket';
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../redux/hook';
import {store} from '../../redux/store';
import {getTickets} from '../../redux/ticketsSlice';
import {deleteTicket} from '../../api/deleteTicket';

interface EventCardProps {
  item: EventsDataProps;
}

const EventDetailCard = ({item}: EventCardProps) => {
  const {ticketsIds} = useAppSelector(store => store.tickets);
  const navigation = useNavigation();
  const handleBuy = async () => {
    const status = await buyTicket(item.id);
    if (status == 201) {
      Alert.alert('Bilet Alındı');
      await store.dispatch(getTickets());
    }
  };

  const handleCancel = async () => {
    const data = await deleteTicket(item.id);
    if (data.status == 200) {
      Alert.alert('İptal Edildi');
      await store.dispatch(getTickets());
    }
  };
  const haveTicket = ticketsIds.filter(
    ticket => ticket.id.toString() == item.id,
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        keyExtractor={item => item}
        data={item.rules}
        estimatedItemSize={item.rules.length}
        renderItem={({item}) => <Text style={styles.rules}>* {item}</Text>}
        ListHeaderComponent={<ListHeader item={item} />}
        ListFooterComponent={
          <>
            {haveTicket.length > 0 ? (
              <Pressable
                style={[styles.buyWrapper, {backgroundColor: 'red'}]}
                onPress={handleCancel}>
                <Text style={styles.buyText}>{item.price}₺ İptal Et</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.buyWrapper} onPress={handleBuy}>
                <Text style={styles.buyText}>{item.price}₺ Satın Al</Text>
              </Pressable>
            )}
          </>
        }
      />
    </SafeAreaView>
  );
};

export default EventDetailCard;

interface EventCardProps {
  item: EventsDataProps;
}
const ListHeader = ({item}: EventCardProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
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
    </>
  );
};
