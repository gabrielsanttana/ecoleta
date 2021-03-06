import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0f5',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  descriptionContainer: {
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 48,
    color: '#322153',
    maxWidth: 270,
  },

  description: {
    fontSize: 16,
    marginTop: 16,
    color: '#6C6C80',
    maxWidth: 270,
    lineHeight: 24,
  },

  footer: {},

  addressInput: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 5,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    overflow: 'hidden',
  },

  buttonIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  buttonIconText: {
    color: '#fff',
  },

  buttonText: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default styles;
