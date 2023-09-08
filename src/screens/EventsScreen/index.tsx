import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  VirtualizedList,
} from 'react-native';
import React, {useEffect} from 'react';
import EventCard from '../../components/EventCard';
import {store} from '../../redux/store';
import {getEvents} from '../../redux/eventsSlice';
import {useAppSelector} from '../../redux/hook';
import styles from './index.style';
import SearchBar from '../../components/SearchBar';
import CategoriesSection from '../../components/CategoriesSection';
import {EventsDataProps} from '../../api/events';
import {FlashList} from '@shopify/flash-list';

const EventsScreen = () => {
  const {error, lastEvents, isLoading} = useAppSelector(state => state.events);

  useEffect(() => {
    const fetchData = async () => {
      await store.dispatch(getEvents());
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {error && (
        <View style={styles.view}>
          <Text> Hata : {error}</Text>
        </View>
      )}
      {isLoading ? (
        <View style={styles.view}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.list}>
          <FlashList
            ListHeaderComponent={
              <View>
                <SearchBar />
                <CategoriesSection />
              </View>
            }
            estimatedItemSize={lastEvents.length}
            data={lastEvents}
            keyExtractor={item => item.id}
            renderItem={({item}) => <EventCard item={item} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default EventsScreen;
