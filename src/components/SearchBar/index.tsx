import {View, TextInput} from 'react-native';
import {useState} from 'react';
import styles from './SearcgBar.style';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();
  console.log(searchValue);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        onChangeText={text => setSearchValue(text)}
        value={searchValue}
      />
    </View>
  );
};

export default SearchBar;
