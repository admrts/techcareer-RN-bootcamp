import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {EventsDataProps} from '../../api/events';
import styles from './index.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TicketStackParams} from '../../routes/TicketsStack/TicketsStack';

export interface TicketProps {
  item: EventsDataProps;
}

const TicketCard = ({item}: TicketProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TicketStackParams>>();
  const handlePress = () => {
    navigation.navigate('Detail', {id: item.id});
  };
  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <Image style={styles.image} source={{uri: item.imageUrl}} />
      <Text>{item.name}</Text>
      <Text>{item.date}</Text>
    </Pressable>
  );
};

export default TicketCard;
