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
  priceWrapper: {
    alignItems: 'center',
  },
  price: {
    backgroundColor: 'rgb(255,159,10)',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    borderRadius: 7,
    overflow: 'hidden',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 5,
  },
  favorite: {
    backgroundColor: 'rgb(255,69,58)',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 7,
    justifyContent: 'center',
  },
  buy: {
    backgroundColor: 'rgb(48,209,88)',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 7,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});
