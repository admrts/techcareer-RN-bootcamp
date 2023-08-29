import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllEvents} from '../../api/events';
import {EventsDataProps} from '../../api/events';
import EventCard from '../../components/EventCard';

const EventsScreen = () => {
  const [eventsData, setEventsData] = useState<EventsDataProps[] | any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await getAllEvents();
        setEventsData(events);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {eventsData && (
        <FlatList
          style={{marginHorizontal: 5}}
          data={eventsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <EventCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default EventsScreen;
