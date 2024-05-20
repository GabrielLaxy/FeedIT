import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Config() {
  return (
    <View style={{ backgroundColor: "#FBFEF4", flex: 1 }}>
      <Text style={titulo}>
        {'\n'}Configurações
      </Text>
      <Text style={linha}>
        -    -    -    -    -    -    -    -    -    -    -    -
        {/* Preciso descobrir como fazer essa linha de um jeito mais limpo, tentei colocar uma borda pontilhada e não deu certo */}
      </Text>
      <Text style={topicos}>Sons</Text>
      <Text style={topicos}>Música</Text>
      <TouchableOpacity onPress={() => alert('Perfil clicked')}>
        <Text style={topicos}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Suporte clicked')}>
        <Text style={topicos}>Suporte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Sair clicked')}>
        <Text style={topicos}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const titulo = {
  backgroundColor: "#FBFEF4",
  color: "#5C4B4B",
  fontFamily: "Poppins_700Bold",
  fontSize: 27,
  textAlign: 'center',
};

const linha = {
  backgroundColor: "#FBFEF4",
  color: "#5C4B4B",
  fontFamily: "Poppins_700Bold",
  fontSize: 20,
  textAlign: 'center',
  marginTop: 20,
  margin:20,
};

const topicos = {
  backgroundColor: "#FBFEF4",
  color: "#5C4B4B",
  fontFamily: "Poppins_700Bold",
  fontSize: 20,
  textAlign: 'left',
  marginTop: 20,
  marginLeft: 50,
};
