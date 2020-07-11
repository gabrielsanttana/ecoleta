import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';
import * as Location from 'expo-location';
import api from '../../services/api';
import styles from './styles';

interface RouteParams {
  selectedCity: string;
  selectedUf: string;
}

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  image: string;
  name: string;
  latitude: number;
  longitude: number;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const navigator = useNavigation();
  const route = useRoute();

  const routeParams = route.params as RouteParams;

  useEffect(() => {
    async function loadInitialPosition() {
      const {status} = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Oops...',
          'Precisamos da sua permissão para obter sua localização',
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const {latitude, longitude} = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    api
      .get('/points', {
        params: {
          city: routeParams.selectedCity,
          uf: routeParams.selectedUf,
          items: selectedItems,
        },
      })
      .then((response) => setPoints(response.data));
  }, [selectedItems]);

  useEffect(() => {
    api.get('/items').then((response) => {
      setItems(response.data);
    });
  }, []);

  function navigateBack() {
    navigator.goBack();
  }

  function navigateToDetailsPage(point_id: number) {
    navigator.navigate('Details', {point_id});
  }

  function selectPressedItem(item: number) {
    const alreadySelected = selectedItems.findIndex(
      (selectedItem) => selectedItem === item,
    );

    if (alreadySelected >= 0) {
      const itemsWithoutPressedItem = selectedItems.filter(
        (selectedItem) => selectedItem !== item,
      );

      setSelectedItems(itemsWithoutPressedItem);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={navigateBack}>
          <Icon name="arrow-left" size={24} color="#34CB79" />
        </TouchableOpacity>

        <Text style={styles.welcomeHeader}>Bem-vindo(a)</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta
        </Text>

        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView
              style={styles.map}
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point) => {
                return (
                  <Marker
                    key={point.id}
                    style={styles.mapMarker}
                    coordinate={{
                      latitude: point.latitude,
                      longitude: point.longitude,
                    }}
                    onPress={() => navigateToDetailsPage(point.id)}
                  >
                    <View style={styles.mapMarkerContainer}>
                      <Image
                        style={styles.mapMarkerImage}
                        source={require('../../assets/recycling.jpg')}
                      />
                      <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                    </View>
                  </Marker>
                );
              })}
            </MapView>
          )}
        </View>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 24}}
        >
          {items.map((item) => {
            return (
              <TouchableOpacity
                style={[
                  styles.item,
                  selectedItems.includes(item.id) ? styles.selectedItem : {},
                ]}
                onPress={() => selectPressedItem(item.id)}
                key={String(item.id)}
                activeOpacity={0.6}
              >
                <SvgUri width={42} height={42} uri={item.image_url} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Points;
