import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    borderWidth: 0.25,
  },
  image: {
    width: screenWidth / 5,
    height: screenHeight / 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
