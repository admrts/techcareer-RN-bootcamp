import {View, Text, FlatList, ActivityIndicator} from 'react-native';
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
    <View style={styles.wrapper}>
      {isLoading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
      {categories.map((item, idx) => (
        <CategoryButton key={idx} name={item} />
      ))}
    </View>
  );
};

export default memo(CategoriesSection);
