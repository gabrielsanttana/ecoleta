import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 32,
    paddingHorizontal: 24,
  },

  goBackButton: {
    marginBottom: 24,
  },

  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  pointTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 24,
    color: '#322153',
  },

  pointItems: {
    fontSize: 14,
    lineHeight: 24,
    color: '#6C6C80',
    marginBottom: 4,
  },

  pointAddressTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24,
    color: '#322153',
  },

  pointAddressDescription: {
    fontSize: 14,
    lineHeight: 24,
    color: '#6C6C80',
  },

  footer: {
    marginTop: 60,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#6C6C80',
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  contactButton: {
    width: '48%',
    height: 50,
    backgroundColor: '#34CB79',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactButtonText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 6,
  },
});

export default styles;
