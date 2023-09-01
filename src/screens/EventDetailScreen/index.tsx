import {View, Text, Button, Pressable, ActivityIndicator} from 'react-native';
import {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EventsStackParams} from '../../routes/EventsStack/EventsStack';
import {useAppSelector} from '../../redux/hook';
import {store} from '../../redux/store';
import {getSingleEvent} from '../../redux/eventDetailSlice';
import styles from './index.style';
import EventDetailCard from '../../components/EventDetailCard';

type Props = NativeStackScreenProps<EventsStackParams, 'Detail'>;

const EventDetailScreen: React.FC<Props> = ({route}) => {
  const {error, eventData, isLoading} = useAppSelector(state => state.event);

  useEffect(() => {
    store.dispatch(getSingleEvent(route.params.id));
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error : {error}</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  if (eventData) {
    return (
      <View>
        <EventDetailCard item={eventData} />
      </View>
    );
  }
};

export default EventDetailScreen;
