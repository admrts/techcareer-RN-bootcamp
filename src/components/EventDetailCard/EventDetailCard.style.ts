import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginHorizontal: 5,
    height: '100%',
    width: '100%',
  },
  head: {
    gap: 5,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 5,
    height: screenHeight / 3,
    borderWidth: 2,
  },
  wrappers: {
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
  rulesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rules: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  buyWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(48,209,88)',
    padding: 15,
    borderRadius: 10,
  },
  buyText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
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
