import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, KeyboardAvoidingView, Linking, TouchableOpacity } from 'react-native';
<<<<<<< Updated upstream
import SvgUri from '../node_modules/react-native-svg';
=======
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
>>>>>>> Stashed changes

export default function TelaCadastro({ navigation }) {
    const schema = yup.object({
        nome: yup.string().required("Informe seu nome"),
        responsavel: yup.string().required("Informe seu responsável"),
        email: yup.string().email("Email inválido").required("Informe seu e-mail"),
        senha: yup.string().min(7, "Deve conter 6 letras e um número no mínimo").required("Informe sua senha")
    });

<<<<<<< Updated upstream
export default function TelaCadastro(){
    const [nome, setNome] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastro = ()=>{
        // Só pra testar!!
        alert(senha);
        alert(email);
        alert(responsavel);
        alert(nome);
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar}>
                <Image source={require('../assets/SetaCadastro.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.titulo}>FeedIt</Text>
            <Image source={require('../assets/CircDinoCadastro.png')} style={styles.imagem}></Image>

            <Text style={styles.texto}>Nome:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setNome(text)}></TextInput>

            <Text style={styles.texto2}>Responsável:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setResponsavel(text)}></TextInput>

            <Text style={styles.texto}>E-mail:</Text>
            <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setEmail(text)}></TextInput>

            <Text style={styles.texto} >Senha:</Text>
            <TextInput secureTextEntry={true} style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={text=>setSenha(text)}></TextInput>

            <TouchableOpacity style={styles.btnCadastrar}>
                <Text style={{color:'white', textAlign:'center', fontSize: 20, fontWeight:'bold'}} onPress={() => cadastro()}>CADASTRAR</Text>
=======
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function verificaCadastro(data) {
        navigation.navigate('escolhaNome');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.push('login')}>
                <Image source={require('../assets/SetaCadastro.png')} />
            </TouchableOpacity>
            <Text style={styles.titulo}>FeedIt</Text>
            <Image source={require('../assets/circDino.png')} style={styles.imagem} />

            <View style={styles.containerLogin}>
                <Text style={[styles.text]}>Nome:</Text>
                <Controller
                    control={control}
                    name='nome'
                    render={({ field: { onChange, value } }) => (
                        <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value} />
                    )}
                />
                <View style={styles.erro}>
                {errors.nome && <Text style={styles.erroMensagem}>{errors.nome?.message}</Text>}
                </View>
            </View>

            <View style={styles.containerLogin}>
                <Text style={styles.text}>Responsável:</Text>
                <Controller
                    control={control}
                    name='responsavel'
                    render={({ field: { onChange, value } }) => (
                        <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value} />
                    )}
                />
                <View style={styles.erro}>
                {errors.responsavel && <Text style={styles.erroMensagem}>{errors.responsavel?.message}</Text>}
                </View>
            </View> 

            <View style={styles.containerLogin}>
            <Text style={styles.text}>E-mail:</Text>
            <Controller
                control={control}
                name='email'
                render={({ field: { onChange, value } }) => (
                    <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value} />
                )}
            />
            <View style={styles.erro}>
            {errors.email && <Text style={styles.erroMensagem}>{errors.email?.message}</Text>}
            </View>
            </View>

            <View style={styles.containerLogin}>
                <Text style={styles.text}>Senha:</Text>
                <Controller
                    control={control}
                    name='senha'
                    render={({ field: { onChange, value } }) => (
                        <TextInput style={[styles.textInput, { paddingLeft: 15 }]} onChangeText={onChange} value={value} secureTextEntry={true} />
                    )}
                />
                <View style={styles.erro}>
                {errors.senha && <Text style={styles.erroMensagem}>{errors.senha?.message}</Text>}
                </View>
            </View>
            <TouchableOpacity style={styles.btnCadastrar} onPress={handleSubmit(verificaCadastro)}>
                <Text style={styles.btnCadastrarText}>CADASTRAR</Text>
>>>>>>> Stashed changes
            </TouchableOpacity>
        </View>
    );
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
    },
<<<<<<< Updated upstream
    btnVoltar:{
        marginTop:40,
        marginRight: 300,
=======
    containerLogin:{
        marginTop:0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    erro:{
        height: 20,
      },
    btnVoltar: {
        marginTop: '12%',
        marginLeft: '-78%',
>>>>>>> Stashed changes
    },
    titulo:{
        fontSize:60,
        color: '#8AC600',
<<<<<<< Updated upstream
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
=======
        fontFamily: 'Poppins_700Bold',
    },
    imagem: {
        marginTop: '-12%',
        height: 180,
        width: 200
    },
    textInput: {
        bottom: '3%',
        height: 55,
        width: '80%',
>>>>>>> Stashed changes
        backgroundColor: '#BCD8B3',
        width:'80%',
        borderRadius: 20,
        marginBottom:16,
        height: 50,
    },
<<<<<<< Updated upstream
    btnCadastrar:{
        marginBottom:30,
        borderRadius:25,
        backgroundColor:'#79AE00',
        width:'60%',
        height: 50,
        justifyContent:'center',
    },
});
=======
    text: {
        bottom: '1.5%',
        marginLeft: '15%',
        alignSelf: 'flex-start',
        color: '#5C4B4B',
        fontSize: 14,
        fontFamily: 'Poppins_700Bold',
    },
    btnCadastrar: {
        marginBottom: '10%',
        borderRadius: 40,
        backgroundColor: '#79AE00',
        width: '70%',
        height: 65,
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#282828',
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    btnCadastrarText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
    },
    erroMensagem: {
        textAlign:'center',
        color: 'red',
        height: 20,
    },
});
>>>>>>> Stashed changes
