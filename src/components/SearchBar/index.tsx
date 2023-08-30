import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useState} from 'react';
import styles from './SearchBar.style';
import {useAppDispatch} from '../../redux/hook';
import {searchValue} from '../../redux/eventsSlice';

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>();
  const dispatch = useAppDispatch();

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearchText(e.nativeEvent.text);
    dispatch(searchValue(e.nativeEvent.text));
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        onChange={handleChange}
        value={searchText}
      />
    </View>
  );
};

export default SearchBar;
