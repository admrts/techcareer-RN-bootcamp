import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import {EventsDataProps} from '../../api/events';
import styles from './index.style';

export interface TicketProps {
  item: EventsDataProps;
}

const TicketCard = ({item}: TicketProps) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{uri: item.imageUrl}} />
      <Text>{item.name}</Text>
      <Text>{item.date}</Text>
    </View>
  );
};

export default memo(TicketCard);
