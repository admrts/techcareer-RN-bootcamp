import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './index.style';

interface CategoryButtonProps {
  name: string;
}

const CategoryButton = ({name}: CategoryButtonProps) => {
  const handlePress = () => {
    console.log(name);
  };
  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default CategoryButton;
