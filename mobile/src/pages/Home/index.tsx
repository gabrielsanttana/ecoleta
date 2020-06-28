import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />

      <Text>Seu marketplace de coleta de resíduos</Text>
      <Text>
        Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
      </Text>

      <TextInput />
      <TextInput />
      <TouchableOpacity />
    </View>
  );
};

export default Home;
