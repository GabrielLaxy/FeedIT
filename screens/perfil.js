import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const circDino = require('../assets/circDino.png');
const SetaCadastro = require('../assets/SetaCadastro.png');

export default function Perfil({}){
    return( 
        <View style={styles.container}> 
            <View style={styles.ladoALado}>
                <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.push('config')}>
                    <Image source={SetaCadastro}></Image>
                </TouchableOpacity>
                <Text style={styles.title}>Perfil</Text>
            </View>

            <View style={styles.ladoALado}>
                <Image source={circDino} style={styles.imagem}></Image>
                <Text style={styles.textNome}>DINO</Text>
            </View>
            <Text style={styles.textEmail}>Email:</Text>
            <Text style={styles.campoEmailUser}>email do dino</Text>
            <Text style={styles.textEmail}>Email do Responsável:</Text>
            <Text style={styles.campoEmailUser2}>email do responsável do dino</Text>
        </View>
    )
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
        marginTop:'16%',
        marginLeft:'-37%',
        marginRight: '26%'
    },
    ladoALado:{
        flexDirection: 'row',
    },
    imagem:{
        marginTop: '-15%',
        marginLeft:'-16%',
        marginRight: '13%',
        height:200,
        width:200,
    },
    title: {
        fontSize: 34,
        color: '#5C4B4B',
        marginTop:'14%',
        marginLeft: '4%',
        fontFamily:'Poppins_700Bold',
        alignSelf:'flex-start',
        justifyContent:'center',
        alignItems: 'center'
    },
    textNome: {
        bottom: '1.5%',
        alignSelf: 'flex-start',
        alignSelf:'flex-center',
        color: '#5C4B4B',
        fontSize: 25,
        fontFamily: 'Poppins_700Bold',
        alignItems: 'center',
    },
    textEmail: {
        bottom: '1.5%',
        marginLeft: '15%',
        marginBottom: '-24%',
        alignSelf: 'flex-start',
        color: '#5C4B4B',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
    },
    campoEmailUser:{
        color: '#5C4B4B',
        backgroundColor: '#BCD8B3',
        height: 55,
        width:'80%',
        borderRadius: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    campoEmailUser2:{
        color: '#5C4B4B',
        backgroundColor: '#BCD8B3',
        marginBottom:'30%',
        height: 55,
        width:'80%',
        borderRadius: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
})
