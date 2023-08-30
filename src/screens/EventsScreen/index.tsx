import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import EventCard from '../../components/EventCard';
import {store} from '../../redux/store';
import {getEvents} from '../../redux/eventsSlice';
import {useAppSelector} from '../../redux/hook';
import styles from './index.style';
import SearchBar from '../../components/SearchBar';

const EventsScreen = () => {
  const {error, events, isLoading} = useAppSelector(state => state.events);

  useEffect(() => {
    const fetchData = async () => {
      await store.dispatch(getEvents());
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={styles.view}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.flatList}>
          <SearchBar />
          <FlatList
            data={events}
            keyExtractor={item => item.id}
            renderItem={({item}) => <EventCard item={item} />}
          />
        </View>
      )}
      {error && (
        <View style={styles.view}>
          <Text> Hata : {error}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EventsScreen;
