import { Audio } from 'expo-av';

let backgroundMusic;

export const playBackgroundMusic = async () => {
  if (!backgroundMusic) {
    backgroundMusic = new Audio.Sound();
    try {
      await backgroundMusic.loadAsync(require('../assets/LostInTheWoods.mp3'), { isLooping: true });
      await backgroundMusic.playAsync();
    } catch (error) {
      console.error('Erro ao reproduzir música de fundo:', error);
    }
  }
};

export const stopBackgroundMusic = async () => {
  if (backgroundMusic) {
    try {
      await backgroundMusic.stopAsync();
      await backgroundMusic.unloadAsync();
    } catch (error) {
      console.error('Erro ao parar música de fundo:', error);
    } finally {
      backgroundMusic = null;
    }
  }
};