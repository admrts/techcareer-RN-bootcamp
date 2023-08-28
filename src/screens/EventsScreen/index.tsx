import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllEvents} from '../../api/events';
import {EventsData} from '../../api/events';
import EventCard from '../../components/EventCard';

const EventsScreen = () => {
  const [eventsData, setEventsData] = useState<EventsData[] | any>();
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
    <View>
      {eventsData && (
        <FlatList
          data={eventsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => <EventCard item={item} />}
        />
      )}
    </View>
  );
};

export default EventsScreen;
