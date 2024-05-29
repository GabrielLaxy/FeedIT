import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const foto = require('../assets/circDino.png');

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.retangulo}>
            <Text style={styles.title}>Tutorial de Fotos Divertidas!</Text>
        </View>
        <Text style={styles.instructions}>
            Olá! Vamos tirar fotos de alimentos deliciosos para ganhar pontos para o seu bichinho!
        </Text>
        <Text style={styles.instructions}>
            1. Centralize o alimento dentro do quadrado na tela.
        </Text>
        <Text style={styles.instructions}>
            2. Tire a foto e veja quantos pontos você ganhou!
        </Text>
        <Text style={styles.instructions}>
            3. Explore e descubra quais alimentos dão mais pontos!
        </Text>
        <Text style={styles.instructions}>
            Divirta-se tirando fotos e cuidando do seu bichinho!
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFEF4',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    marginTop: 15,
    marginBottom: 20,
  },
  retangulo: {
    width: '100%',
    height: 150,
    backgroundColor: '#8AC600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#5C4B4B',
    textAlign: 'center',
    marginBottom:30,
  },
});
