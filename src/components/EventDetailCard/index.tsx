import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Alert,
  Share,
} from 'react-native';
import styles from './EventDetailCard.style';
import {EventsDataProps} from '../../api/events';
import {useState} from 'react';
import {buyTicket} from '../../api/buyTicket';
import {FlashList} from '@shopify/flash-list';
import {useAppSelector} from '../../redux/hook';
import {store} from '../../redux/store';
import {getTickets} from '../../redux/ticketsSlice';
import {deleteTicket} from '../../api/deleteTicket';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {EventsStackParams} from '../../routes/EventsStack/EventsStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface EventCardProps {
  item: EventsDataProps;
}

const EventDetailCard = ({item}: EventCardProps) => {
  const {ticketsIds} = useAppSelector(store => store.tickets);
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
  const navigation =
    useNavigation<NativeStackNavigationProp<EventsStackParams>>();
  const onShare = async () => {
    try {
      const result = await Share.share({
        //shared
        message: item.imageUrl,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // activiy type
        } else {
          //shared
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Paylaşım iptal');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const goMap = () => {
    navigation.navigate('Map', {location: item.location});
  };
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
          <Text style={styles.variables}>{item.location.name}</Text>
        </View>
        <View style={styles.shareWrapper}>
          <Pressable style={styles.location} onPress={goMap}>
            <Text style={styles.shareText}>Konumu Göster</Text>
            <Icon name="map" size={16} color="#fff" />
          </Pressable>
          <Pressable style={styles.share} onPress={onShare}>
            <Text style={styles.shareText}>Etkinliği Paylaş</Text>
            <Icon name="share-alt" size={16} color="#fff" />
          </Pressable>
        </View>
      </View>

      <Text style={styles.rulesTitle}>Etkinlik Kuralları</Text>
    </>
  );
};
