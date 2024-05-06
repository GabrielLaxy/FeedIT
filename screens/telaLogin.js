import React from 'react';
import  { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Linking, TouchableOpacity } from 'react-native';



export default function TelaLogin(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
          <View style={styles.container}>  
            <Text style={styles.titulo}>FeedIt</Text>

            <Image source={require('../assets/CircDinoLogin.png')} style={styles.imagem}></Image>

            <Text style={styles.texto}>Email:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setEmail(text)}></TextInput>

            <Text style={styles.texto}>Senha:</Text>
            <TextInput secureTextEntry={true} style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setSenha(text)}></TextInput>

            <TouchableOpacity style={styles.btnEntrar}>
                <Text style={{color:'white', textAlign:'center', fontSize: 20, fontWeight:'bold'}}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCadastro}>
                <Text style={{ textAlign:'center', fontSize: 15, fontWeight:'bold'}}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:60,
    color: '#8AC600',
  },
  imagem:{
    height:300,
  },
  texto:{
    marginRight:'60%',
},
  textInput:{
    backgroundColor: '#BCD8B3',
    width:'80%',
    borderRadius: 20,
    marginBottom:16,
    height: 50,
},
  btnEntrar:{
    marginTop:40,
    marginBottom:10,
    borderRadius:25,
    backgroundColor:'#79AE00',
    width:'60%',
    height: 50,
    justifyContent:'center',
},
  btnCadastro:{
    marginBottom:30,
  },
});
