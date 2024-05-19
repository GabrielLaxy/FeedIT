import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Config() {
  return (
    <View style={{ backgroundColor: "#FBFEF4", flex: 1 }}>
      <Text style={titulo}>
        {'\n'}Configurações
      </Text>
      <Text style={linha}>
        -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -    -
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
  fontFamily: "Poppins",
  fontSize: 27,
  textAlign: 'center',
  fontWeight: 'bold',
};

const linha = {
  backgroundColor: "#FBFEF4",
  color: "#5C4B4B",
  fontFamily: "Poppins",
  fontSize: 10,
  textAlign: 'center',
  fontWeight: 'thin',
  marginTop: 20,
};

const topicos = {
  backgroundColor: "#FBFEF4",
  color: "#5C4B4B",
  fontFamily: "Poppins",
  fontSize: 20,
  textAlign: 'left',
  fontWeight: 'bold',
  marginTop: 20,
  marginLeft: 50,
};
