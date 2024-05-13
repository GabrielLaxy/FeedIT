import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function TelaLogin({ navigation }) {
  return (
    <View style={styles.container}>  
      <Text style={styles.titulo}>FeedIt</Text>

      <Image source={require('../assets/circDino.png')} style={styles.imagem} />

      <Text style={styles.texto}>Email:</Text>
      <TextInput style={[styles.textInput]} />

      <Text style={styles.texto}>Senha:</Text>
      <TextInput secureTextEntry={true} style={[styles.textInput]} />

      <TouchableOpacity style={styles.btnEntrar}>
        <Text style={styles.btnEntrarText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('cadastro')}>
        <Text style={styles.btnCadastroText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFFF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    top:20,
    fontSize: 70,
    color: '#8AC600',
    fontWeight: 'bold'
  },
  imagem: {
    height: 300,
    width: 300
  },
  texto: {
    fontSize:14,
    marginRight: '60%',
    color: '#5C4B4B',
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#BCD8B3',
    height: 65,
    width:'80%',
    borderRadius: 40,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  btnEntrar: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 40,
    backgroundColor: '#79AE00',
    width: '70%',
    height: 65,
    justifyContent: 'center',
    elevation:5,
    shadowColor:'#282828',
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  btnEntrarText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCadastro: {
    marginBottom: 10,
  },
  btnCadastroText: {
    marginTop:0,
    color: '#5C4B4B', 
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
