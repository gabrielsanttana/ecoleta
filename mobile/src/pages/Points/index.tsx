import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Points: React.FC = () => {
  const navigator = useNavigation();

  const navigateToHome = () => {
    return navigator.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Icon name="arrow-left" size={24} color="#34CB79" />
        </TouchableOpacity>

        <Text style={styles.welcomeHeader}>Bem-vindo(a)</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta
        </Text>

        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>
      </View>

      <View></View>
    </>
  );
};

export default Points;
