import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api';
import styles from './styles';

interface RouteParams {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  collectedItems: {
    title: string;
  }[];
}

const Details: React.FC = () => {
  const [data, setData] = useState<Data>({} as Data);

  const navigator = useNavigation();
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  useEffect(() => {
    api.get(`/points/${routeParams.point_id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  function navigateBack() {
    navigator.navigate('Points');
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: 'Interesse em coleta de resíduos',
      recipients: [data.point.email],
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send`);
  }

  if (!data.point) {
    return null;
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
            uri: data.point.image,
          }}
        />

        <Text style={styles.pointTitle}>{data.point.name}</Text>
        {data.collectedItems.map((item, index) => {
          return (
            <Text key={String(index)} style={styles.pointItems}>
              {item.title}
            </Text>
          );
        })}

        <Text style={styles.pointAddressTitle}>Endereço</Text>
        <Text style={styles.pointAddressDescription}>
          {data.point.city}, {data.point.uf}
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.contactButton} onPress={sendWhatsapp}>
          <Icon name="whatsapp" size={16} color="#fff" />
          <Text style={styles.contactButtonText}>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton} onPress={sendEmail}>
          <Icon name="envelope" size={16} color="#fff" />
          <Text style={styles.contactButtonText}>E-mail</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Details;
