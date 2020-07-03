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
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 10,
  },

  item: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemTitle: {
    marginTop: 20,
    fontSize: 13,
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },
});

export default styles;
