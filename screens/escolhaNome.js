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
                <Image source={require('../assets/SetaCadastro.png')}></Image>
            </TouchableOpacity>

            <Image source={require('../assets/circDino.png')} style={styles.imagem}></Image>

            <Text style={styles.titulo}>Escolha o nome do seu IT!</Text>

            <TextInput style={styles.textInput} onChangeText={text=>setNomeBicho(text)}></TextInput>

            <TouchableOpacity style={styles.btnIniciarJogo}onPress={() => navigation.navigate('TabGroup')}>
                <Text style={styles.textBtnIniciar} >INICIAR JOGO</Text>
            </TouchableOpacity>
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFFF5',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    btnVoltar:{
        marginTop:'12%',
        marginLeft:'-78%',
    },
    titulo: {
        fontSize: 20,
        color: '#5C4B4B',
        fontFamily:'Poppins_700Bold',
    },
    imagem:{

        height:400,
        width:400,
    },
    textInput: {
        backgroundColor: '#BCD8B3',
        height: 55,
        width:'80%',
        borderRadius: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
    btnIniciarJogo:{
        marginBottom: '30%',
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
    textBtnIniciar:{
        color:'white', 
        alignItems:'center',
        textAlign:'center', 
        fontSize: 20, 
        fontFamily:'Poppins_700Bold',
    },
});