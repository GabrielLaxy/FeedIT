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

            <Text style={[styles.text,{textAlign:'left'}]}>Nome:</Text>
            <TextInput style={styles.textInput} onChangeText={text=>setNome(text)}></TextInput>

            <Text style={styles.textResponsavel}>Responsável:</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'left'
    },
    titulo: {
        top:-10,
        fontSize: 60,
        color: '#8AC600',
        fontFamily:'Poppins_700Bold',
    },
    imagem: {
        top:-50,
        height: 200,
        width: 200
    },
    textInput: {
      backgroundColor: '#BCD8B3',
      height: 55,
      width:'80%',
      borderRadius: 40,
      top:-60,
      marginBottom:15,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  
    btnCadastrar: {
      marginTop: 20,
      marginBottom: 50,
      borderRadius: 40,
      bottom:60,
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
    btnVoltar:{
        marginTop:'30%',
        marginRight: '80%',
    },
    text:{
        top:-60,
        marginRight:'60%',
        textAlign:'left',
        color:'#5C4B4B',
        fontSize:14,
        fontFamily:'Poppins_700Bold',
    },
    textResponsavel:{
        top:-60,
        marginLeft:'-55%',
        textAlign:'left',
        color:'#5C4B4B',
        fontSize:15,
        fontFamily:'Poppins_700Bold',
    }
  });
  
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#f5f5f5',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     btnVoltar:{
//         marginTop:40,
//         marginRight: 300,
//     },
//     titulo:{
//         fontSize:60,
//         color: '#8AC600',
//     },
//     imagem:{
//         flex:1,
//         backgroundColor: '#f5f5f5'
//     },
//     texto:{
//         marginRight:'60%',
//     },
//     texto2:{
//         marginRight:'50%',
//     },
//     textInput:{
//         backgroundColor: '#BCD8B3',
//         width:'80%',
//         borderRadius: 20,
//         marginBottom:16,
//         height: 50,
//     },
//     btnCadastrar:{
//         marginBottom:30,
//         borderRadius:25,
//         backgroundColor:'#79AE00',
//         width:'60%',
//         height: 50,
//         justifyContent:'center',
//     },
// });