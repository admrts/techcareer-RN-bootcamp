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
import Icon from 'react-native-vector-icons/FontAwesome';

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
        style={styles.input}
      />
      <Icon name="search" size={20} style={{marginRight: 10}} />
    </View>
  );
};

export default SearchBar;
