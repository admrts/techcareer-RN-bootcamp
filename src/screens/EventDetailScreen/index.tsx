import {View, Text, Button, Pressable, ActivityIndicator} from 'react-native';
import {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {EventsStackParams} from '../../routes/EventsStack/EventsStack';
import {useAppSelector} from '../../redux/hook';
import {store} from '../../redux/store';
import {getSingleEvent} from '../../redux/eventDetailSlice';

type Props = NativeStackScreenProps<EventsStackParams, 'Detail'>;

const EventDetailScreen: React.FC<Props> = ({route}) => {
  const {error, eventData, isLoading} = useAppSelector(state => state.event);

  useEffect(() => {
    store.dispatch(getSingleEvent(route.params.id));
  }, []);

  if (error) {
    return <Text>Error : {error}</Text>;
  }
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (eventData) {
    return (
      <View>
        <Text>{eventData.name}</Text>
      </View>
    );
  }
};

export default EventDetailScreen;
