import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, memo} from 'react';
import CategoryButton from '../CategoryButton';
import styles from './index.style';
import {store} from '../../redux/store';
import {fetchCategories} from '../../redux/categoriesSlice';
import {useAppSelector} from '../../redux/hook';

const CategoriesSection = () => {
  const {categories, error, isLoading} = useAppSelector(
    store => store.categories,
  );
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
        <CategoryButton key={idx} name={item} />
      ))}
    </ScrollView>
  );
};

export default memo(CategoriesSection);
