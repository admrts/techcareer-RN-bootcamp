import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight / 3,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
  },
});
