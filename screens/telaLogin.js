import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginUser } from '../requests/httpsRequests.js';

export default function TelaLogin({ navigation }) {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
	});

	const schema = yup.object({
		email: yup.string().email('Email inválido').required('Informe seu e-mail'),
		senha: yup
			.string()
			.min(7, 'A senha deve conter no mínimo 7 caracteres')
			.required('Informe sua senha'),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function verificaLogin(data) {
		try {
			const response = await loginUser(data);
			if (response.success) {
				navigation.navigate('TabGroup', { idPaciente: response.idPaciente });
			} else {
				console.error('Erro ao logar usuário:', response.message);
			}
		} catch (error) {
			console.error('Erro ao logar usuário:', error);
		}
		
	}

	if (!fontsLoaded) {
		return null; 
	}

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Text style={styles.titulo}>FeedIt</Text>
				<Image
					source={require('../assets/circDino.png')}
					style={styles.imagem}
				/>

				<View style={styles.containerLogin}>
					<Text style={styles.texto}>Email:</Text>
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

				<View style={styles.containerLogin}>
					<Text style={styles.texto}>Senha:</Text>
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

				<View style={styles.containerLogin}>
					<TouchableOpacity
						style={styles.btnEntrar}
						onPress={handleSubmit(verificaLogin)}
					>
						<Text style={styles.btnEntrarText}>ENTRAR</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.btnCadastro}
						onPress={() => navigation.navigate('cadastro')}
					>
						<Text style={styles.btnCadastroText}>CADASTRAR</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCFFF5',
	},
	scrollContainer: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	containerLogin: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	erro: {
		height: 20,
	},
	titulo: {
		marginTop: '10%',
		fontSize: 70,
		color: '#8AC600',
		fontFamily: 'Poppins_700Bold',
	},
	imagem: {
		marginTop: '-15%',
		height: 270,
		width: 300,
	},
	texto: {
		bottom: '-1%',
		marginLeft: '15%',
		alignSelf: 'flex-start',
		fontSize: 14,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},
	textInput: {
		marginBottom: '2.5%',
		backgroundColor: '#BCD8B3',
		height: 65,
		width: '80%',
		borderRadius: 40,
		elevation: 5,
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowRadius: 5,
	},
	btnEntrar: {
		marginBottom: '2%',
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
	btnEntrarText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'Poppins_700Bold',
	},
	btnCadastro: {
		marginBottom: '10%',
	},
	btnCadastroText: {
		color: '#5C4B4B',
		textAlign: 'center',
		fontSize: 15,
		fontFamily: 'Poppins_700Bold',
	},
	erroMensagem: {
		textAlign: 'center',
		color: 'red',
		height: 20,
	},
});
