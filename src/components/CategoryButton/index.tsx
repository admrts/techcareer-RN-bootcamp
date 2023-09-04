import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './index.style';
import {useAppDispatch} from '../../redux/hook';
import {filterCategory} from '../../redux/eventsSlice';

interface CategoryButtonProps {
  name: string;
}

const CategoryButton = ({name}: CategoryButtonProps) => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(filterCategory(name));
  };
  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default CategoryButton;
