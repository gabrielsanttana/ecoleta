import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import styles from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

const Details: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.get('/items').then((response) => {
      setItems(response.data);
    });
  }, []);

  const navigator = useNavigation();

  function navigateBack() {
    navigator.navigate('Points');
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.goBackButton} onPress={navigateBack}>
          <Icon name="arrow-left" size={22} color="#34CB79" />
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.tce.sp.gov.br/sites/default/files/styles/max_800x800/public/noticias/coleta%20seletivaaa.png',
          }}
        />

        <Text style={styles.pointTitle}>Mercado do Carlão</Text>
        <Text style={styles.pointItems}>Lâmpadas, Óleo de Cozinha</Text>

        <Text style={styles.pointAddressTitle}>Endereço</Text>
        <Text style={styles.pointAddressDescription}>Americana, São Paulo</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="whatsapp" size={16} color="#fff" />
          <Text style={styles.contactButtonText}>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Icon name="envelope" size={16} color="#fff" />
          <Text style={styles.contactButtonText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Details;
