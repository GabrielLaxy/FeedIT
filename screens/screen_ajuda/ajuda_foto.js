import React from 'react';
import { View, Text, StyleSheet, Image , FlatList} from 'react-native';

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          Tela 1
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFEF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
    color: '#5C4B4B',
  },
});
