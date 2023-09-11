import {Text, ActivityIndicator, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryButton from '../CategoryButton';
import styles from './index.style';
import {store} from '../../redux/store';
import {fetchCategories} from '../../redux/categoriesSlice';
import {useAppSelector, useAppDispatch} from '../../redux/hook';
import {filterCategory} from '../../redux/eventsSlice';

const CategoriesSection = () => {
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const {categories, error, isLoading} = useAppSelector(
    store => store.categories,
  );
  const handlePress = (item: string) => {
    setSelectedCategory(item);
    dispatch(filterCategory(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      await store.dispatch(fetchCategories());
    };
    fetchData();
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}>
      {isLoading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
      {categories.map((item, idx) => (
        <CategoryButton
          key={idx}
          name={item}
          onPress={() => handlePress(item)}
          marked={item == selectedCategory ? true : false}
        />
      ))}
    </ScrollView>
  );
};

export default CategoriesSection;
