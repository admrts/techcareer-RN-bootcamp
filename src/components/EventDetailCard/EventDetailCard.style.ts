import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginHorizontal: 5,
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
});