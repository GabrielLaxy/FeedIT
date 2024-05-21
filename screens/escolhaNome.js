import React from 'react';
import  { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


export default function EscolhaNome({navigation}){

    const schema = yup.object({
        nomeBicho: yup.string().required("É obrigatório dar um nome para seu novo amigo!"),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function verificaAmigo(data) {
        navigation.navigate('TabGroup');
        // Adicionar no Banco de Dados
    }

    return(
        <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.push('cadastro')}>
                <Image source={require('../assets/SetaCadastro.png')}></Image>
            </TouchableOpacity>
        
            <Image source={require('../assets/circDino.png')} style={styles.imagem}></Image>

            <Text style={styles.titulo}>Escolha o nome do seu IT!</Text>

            <Controller
                    control={control}
                    name='nomeBicho'
                    render={({ field: { onChange, value } }) => (
                        <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value}/>
                    )}
                />
            <View style={styles.erro}>
                {errors.nomeBicho && <Text style={styles.erroMensagem}>{errors.nomeBicho?.message}</Text>}
            </View>
            <TouchableOpacity style={styles.btnIniciarJogo}onPress={handleSubmit(verificaAmigo)}>
                <Text style={styles.textBtnIniciar} >INICIAR JOGO</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
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
    containerEscolhaNome:{
        width: '100%',
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
    erro:{
        height: 20,
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
    erroMensagem: {
        textAlign:'center',
        color: 'red',
        height: 20,
    },
});