import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Feather as Icon} from '@expo/vector-icons';
import styles from './styles';

const Home: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [uf, setUf] = useState<string>('');

  const navigator = useNavigation();

  const navigateToPointsPage = () => {
    navigator.navigate('Points', {
      city,
      uf,
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{width: 274, height: 368}}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />

        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>
            Seu marketplace de coleta de resíduos
          </Text>
          <Text style={styles.description}>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.addressInput}
          onChangeText={(text) => setCity(text)}
          placeholder="Digite a cidade"
          autoCorrect={false}
        />
        <TextInput
          style={styles.addressInput}
          onChangeText={(text) => setUf(text)}
          placeholder="Digite o estado (sigla)"
          autoCapitalize="characters"
          autoCorrect={false}
        />
        <RectButton style={styles.button} onPress={navigateToPointsPage}>
          <View style={styles.buttonIcon}>
            <Text style={styles.buttonIconText}>
              <Icon name="arrow-right" size={16} color="#fff" />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
