import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 32,
    paddingHorizontal: 24,
  },

  button: {
    marginBottom: 15,
  },

  welcomeHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    color: '#6C6C80',
    marginBottom: 20,
  },

  mapContainer: {
    borderRadius: 16,
  },

  map: {
    height: 500,
    width: '100%',
  },

  itemsContainer: {},

  item: {},
});

export default styles;
