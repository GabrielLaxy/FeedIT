import React, { useEffect } from 'react';
import { Audio } from 'expo-av';

const BackgroundMusic = () => {
  useEffect(() => {
    const playBackgroundMusic = async () => {
      const backgroundMusic = new Audio.Sound();
      try {
        await backgroundMusic.loadAsync(require('./assets/musica_teste.mp3'));
        await backgroundMusic.playAsync();
      } catch (error) {
        console.error('Erro ao reproduzir música de fundo:', error);
      }
    };

    playBackgroundMusic();

    return () => {
      backgroundMusic.unloadAsync();
    };
  }, []);

  return null; 
};

export default BackgroundMusic;
