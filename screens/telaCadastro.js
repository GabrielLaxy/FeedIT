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

            <Text style={styles.texto}>Nome:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setNome(text)}></TextInput>

            <Text style={styles.texto2}>Responsável:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setResponsavel(text)}></TextInput>

            <Text style={styles.texto}>E-mail:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setEmail(text)}></TextInput>

            <Text style={styles.texto} >Senha:</Text>
            <TextInput secureTextEntry={true} style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setSenha(text)}></TextInput>

            <TouchableOpacity style={styles.btnCadastrar} onPress={() => navigation.navigate('escolhaNome')}>
                <Text style={{color:'white', textAlign:'center', fontSize: 20, fontWeight:'bold'}} >CADASTRAR</Text>
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
        marginTop:40,
        marginRight: 300,
    },
    titulo:{
        fontSize:60,
        color: '#8AC600',
    },
    imagem:{
        flex:1,
        backgroundColor: '#f5f5f5'
    },
    texto:{
        marginRight:'60%',
    },
    texto2:{
        marginRight:'50%',
    },
    textInput:{
        backgroundColor: '#BCD8B3',
        width:'80%',
        borderRadius: 20,
        marginBottom:16,
        height: 50,
    },
    btnCadastrar:{
        marginBottom:30,
        borderRadius:25,
        backgroundColor:'#79AE00',
        width:'60%',
        height: 50,
        justifyContent:'center',
    },
});