import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DashedLine from 'react-native-dashed-line';

export default function Config() {
  return (
    <View style={{ backgroundColor: "#FBFEF4", flex: 1 }}>
      <Text style={styles.titulo}>
        {'\n'}Configurações
      </Text>
      <View style={{ padding: '5%'}}>
        <DashedLine dashLength={5} dashThickness={2} dashGap={10} dashColor='#5C4B4B'/>
      </View>
      <Text style={styles.topicos}>Sons</Text>
      <Text style={styles.topicos}>Música</Text>
      <TouchableOpacity onPress={() => alert('Perfil clicked')}>
        <Text style={styles.topicos}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Suporte clicked')}>
        <Text style={styles.topicos}>Suporte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Sair clicked')}>
        <Text style={styles.topicos}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    backgroundColor: "#FBFEF4",
    color: "#5C4B4B",
    fontFamily: "Poppins_700Bold",
    fontSize: 27,
    textAlign: 'center',
  },
  linha: {
    backgroundColor: "#FBFEF4",
    color: "#5C4B4B",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    margin:20,
  },
  topicos: {
    backgroundColor: "#FBFEF4",
    color: "#5C4B4B",
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 50,
    textDecorationLine:'underline',
  },
});
