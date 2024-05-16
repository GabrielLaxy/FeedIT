import React from 'react';
import  { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Linking, TouchableOpacity } from 'react-native';


export default function TelaCadastro({ navigation }){
    const [nome, setNome] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // const cadastro = ()=>{
    //     alert(senha);
    //     alert(email);
    //     alert(responsavel);
    //     alert(nome);
    // }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.push('login')}>
                <Image source={require('../assets/SetaCadastro.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.titulo}>FeedIt</Text>
            <Image source={require('../assets/circDino.png')} style={styles.imagem}></Image>

            <Text style={[styles.text]}>Nome:</Text>
            <TextInput style={styles.textInput} onChangeText={text=>setNome(text)}></TextInput>

            <Text style={styles.text}>Responsável:</Text>
            <TextInput style={styles.textInput} onChangeText={text=>setResponsavel(text)}></TextInput>

            <Text style={styles.text}>E-mail:</Text>
            <TextInput style={styles.textInput} onChangeText={text=>setEmail(text)}></TextInput>

            <Text style={styles.text} >Senha:</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={text=>setSenha(text)}></TextInput>

            <TouchableOpacity style={styles.btnCadastrar} onPress={() => navigation.navigate('escolhaNome')}>
                <Text style={styles.btnCadastrarText} >CADASTRAR</Text>
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
        marginTop: '-5%',
        fontSize: 60,
        color: '#8AC600',
        fontFamily:'Poppins_700Bold',
    },
    imagem: {
        marginTop: '-12%',
        height: 200,
        width: 200
    },
    textInput: {
        bottom: '3%',
        height: 55,
        width:'80%',
        backgroundColor: '#BCD8B3',
        borderRadius: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    text:{
        bottom:'1.5%',
        marginLeft:'15%',
        alignSelf:'flex-start',
        color:'#5C4B4B',
        fontSize:14,
        fontFamily:'Poppins_700Bold',
    },
    btnCadastrar: {
        marginBottom:'10%',
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
    btnCadastrarText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'Poppins_700Bold',
    },
  });