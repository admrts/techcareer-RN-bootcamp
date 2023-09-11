import {Text, Pressable} from 'react-native';
import React from 'react';
import styles from './index.style';

interface CategoryButtonProps {
  name: string;
  marked: boolean;
  onPress: () => void;
}

const CategoryButton = ({name, onPress, marked}: CategoryButtonProps) => {
  return (
    <Pressable
      style={[
        styles.wrapper,
        marked ? {backgroundColor: '#828282'} : {backgroundColor: 'white'},
      ]}
      onPress={onPress}>
      <Text style={[styles.text, marked ? {color: 'white'} : {color: 'black'}]}>
        {name}
      </Text>
    </Pressable>
  );
};

export default CategoryButton;
