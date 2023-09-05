import {View, Text, ActivityIndicator} from 'react-native';
import React, {useCallback, memo, useState, useEffect} from 'react';
import {useAppSelector} from '../../redux/hook';
import {useFocusEffect} from '@react-navigation/native';
import TicketCard from '../../components/TicketCard';
import {FlashList} from '@shopify/flash-list';
import {getAllTickets, TickectsIdsProps} from '../../api/getTicket';
import {EventsDataProps} from '../../api/events';
import {useIsFocused} from '@react-navigation/native';
import {store} from '../../redux/store';
import {getTickets} from '../../redux/ticketsSlice';

const TicketsScreen = () => {
  const isFocused = useIsFocused();
  const {ticketsIds} = useAppSelector(store => store.tickets);
  const [allTickets, setAllTickets] = useState<EventsDataProps[]>([]);
  const {initialEvents} = useAppSelector(store => store.events);

  useEffect(() => {
    const fetchData = async () => {
      await store.dispatch(getTickets());

      const filteredTickets = initialEvents.filter(item => {
        return ticketsIds.some(id => id.id.toString() == item.id);
      });
      setAllTickets(filteredTickets);
    };
    fetchData();
  }, [isFocused, ticketsIds.length]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      {allTickets.length > 0 ? (
        <FlashList
          data={allTickets}
          renderItem={({item}) => <TicketCard item={item} />}
          estimatedItemSize={ticketsIds.length}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Bilet Yok</Text>
        </View>
      )}
    </View>
  );
};

export default memo(TicketsScreen);
