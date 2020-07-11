import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {Feather as Icon} from '@expo/vector-icons';
import axios from 'axios';
import styles from './styles';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECitiesResponse {
  nome: string;
}

const Home: React.FC = () => {
  const [ufs, setUfs] = useState<Item[]>([]);
  const [cities, setCities] = useState<Item[]>([]);

  const [selectedUf, setSelectedUf] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const navigator = useNavigation();

  const navigateToPointsPage = () => {
    navigator.navigate('Points', {
      selectedCity,
      selectedUf,
    });
  };

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => ({
          label: uf.sigla,
          value: uf.sigla,
          key: uf.sigla,
        }));

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECitiesResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityNames = response.data.map((city) => ({
          label: city.nome,
          value: city.nome,
          key: city.nome,
        }));

        setCities(cityNames);
      });
  }, [selectedUf]);

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
        <RNPickerSelect
          items={ufs}
          onValueChange={(value) => setSelectedUf(value)}
          style={{
            viewContainer: {
              ...styles.addressInput,
            },
          }}
          placeholder={{
            label: 'Selecione o UF',
            value: '0',
            displayValue: 'Selecione o UF',
          }}
        />

        <RNPickerSelect
          items={cities}
          onValueChange={(value) => setSelectedCity(value)}
          style={{
            viewContainer: {
              ...styles.addressInput,
            },
          }}
          placeholder={{
            label: 'Selecione a cidade',
            value: '0',
            displayValue: 'Selecione a cidade',
          }}
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
