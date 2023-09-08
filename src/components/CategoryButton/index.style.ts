import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
    width: 100,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
