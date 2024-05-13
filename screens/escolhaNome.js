import React from 'react';
import  { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export default function EscolhaNome({navigation}){

    const [nomeBicho, setNomeBicho] = useState('');
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.push('cadastro')}>
                <Image source={require('../imagens/SetaCadastro.png')}></Image>
            </TouchableOpacity>

            <Image source={require('../imagens/CircDinoLogin.png')} style={styles.imagem}></Image>

            <Text style={styles.titulo}>Escolha o nome do seu IT!</Text>

            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setNomeBicho(text)}></TextInput>

            <TouchableOpacity style={styles.btnIniciarJogo}>
                <Text style={{color:'white', textAlign:'center', fontSize: 20, fontWeight:'bold'}} >INICIAR JOGO</Text>
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
    btnVoltar:{
        marginRight: 300,
        marginBottom: 85,
    },
    titulo:{
        fontSize:20,
        marginBottom: 20,
    },
    imagem:{
        height:300,
    },
    textInput:{
        backgroundColor: '#BCD8B3',
        width:'80%',
        borderRadius: 20,
        marginBottom:16,
        height: 50,
    },
    btnIniciarJogo:{
        marginTop:100,
        borderRadius:25,
        backgroundColor:'#79AE00',
        width:'60%',
        height: 50,
        justifyContent:'center',
    },
});