import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'relative',
    borderWidth: 0.5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 5,
    zIndex: -100,
    height: screenHeight / 3,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
  },
  description: {
    paddingHorizontal: 5,
    rowGap: 5,
    marginTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  titles: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  variables: {
    fontSize: 16,
  },
  priceContainer: {
    alignItems: 'flex-end',
    paddingVertical: 5,
  },
  price: {
    width: 80,
    textAlign: 'center',
    padding: 7,
    backgroundColor: 'rgb(255,159,10)',
    overflow: 'hidden',
    borderRadius: 5,
  },
});
