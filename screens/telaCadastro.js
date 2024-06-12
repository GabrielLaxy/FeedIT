import React from 'react';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	KeyboardAvoidingView,
	Linking,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AntDesign } from '@expo/vector-icons';
import * as yup from 'yup';
import { registerUser } from '../requests/httpsRequests';

export default function TelaCadastro({ navigation }) {
	const schema = yup.object({
		nome: yup.string().required('Informe seu nome'),
		email: yup.string().email('Email inválido').required('Informe seu e-mail'),
		senha: yup
			.string()
			.min(7, 'Deve conter 6 letras e um número no mínimo')
			.required('Informe sua senha'),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function verificaCadastro(data) {
		try {
			const response = await registerUser(data);
			if (response.success) {
				navigation.navigate('escolhaNome', {idPaciente : response.idPaciente});
			} else {
				console.error('Erro ao registrar usuário:', response.message);
			}
		} catch (error) {
			console.error('Erro ao registrar usuário:', error);
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.btnVoltar}
					onPress={() => navigation.push('login')}
				>
					<AntDesign name="arrowleft" size={30} color="#88C200" />
				</TouchableOpacity>
				<Text style={styles.titulo}>FeedIt</Text>
				<Image
					source={require('../assets/circDino.png')}
					style={styles.imagem}
				/>
				<View style={styles.containerCadastro}>
					<Text style={[styles.text]}>Nome:</Text>
					<Controller
						control={control}
						name="nome"
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.textInput, { paddingLeft: 15 }]}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
					<View style={styles.erro}>
						{errors.nome && (
							<Text style={styles.erroMensagem}>{errors.nome?.message}</Text>
						)}
					</View>
				</View>

				<View style={styles.containerCadastro}>
					<Text style={styles.text}>E-mail:</Text>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.textInput, { paddingLeft: 15 }]}
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
					<View style={styles.erro}>
						{errors.email && (
							<Text style={styles.erroMensagem}>{errors.email?.message}</Text>
						)}
					</View>
				</View>

				<View style={styles.containerCadastro}>
					<Text style={styles.text}>Senha:</Text>
					<Controller
						control={control}
						name="senha"
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={[styles.textInput, { paddingLeft: 15 }]}
								onChangeText={onChange}
								value={value}
								secureTextEntry={true}
							/>
						)}
					/>
					<View style={styles.erro}>
						{errors.senha && (
							<Text style={styles.erroMensagem}>{errors.senha?.message}</Text>
						)}
					</View>
				</View>
				<TouchableOpacity
					style={styles.btnCadastrar}
					onPress={handleSubmit(verificaCadastro)}
				>
					<Text style={styles.btnCadastrarText}>CADASTRAR</Text>
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
	scrollContainer: {
		flexGrow: 1,
	},
	containerCadastro: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	erro: {
		height: 20,
	},
	btnVoltar: {
		marginTop: '12%',
		marginLeft: '-78%',
	},
	titulo: {
		marginTop: '-5%',
		fontSize: 60,
		color: '#8AC600',
		fontFamily: 'Poppins_700Bold',
	},
	imagem: {
		marginTop: '-12%',
		height: 180,
		width: 200,
	},
	textInput: {
		bottom: '3%',
		height: 55,
		width: '80%',
		backgroundColor: '#BCD8B3',
		borderRadius: 40,
		elevation: 5,
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowRadius: 5,
	},
	btnCadastrar: {
		marginBottom: 30,
		borderRadius: 25,
		backgroundColor: '#79AE00',
		width: '60%',
		height: 50,
		justifyContent: 'center',
	},
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
		textAlign: 'center',
		color: 'red',
		height: 20,
	},
});
