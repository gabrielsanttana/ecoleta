import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{width: 274, height: 368}}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />

        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
        </Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button}>
          <View style={styles.buttonIcon}>
            <Text style={styles.buttonIconText}>{'>'}</Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
