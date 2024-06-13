import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Linking,
	Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DashedLine from 'react-native-dashed-line';
import Slider from '@react-native-community/slider';
import { Entypo } from '@expo/vector-icons';
import { setBackgroundMusicVolume } from '../backend/music';

const logoSC = require('../assets/logoSC.png');

export default function Config() {
	const navigation = useNavigation();
	const [volume, setVolume] = useState(0.5);

	const handleVolumeChange = async value => {
		setVolume(value);
		await setBackgroundMusicVolume(value);
	};

	const emailSuporte = () => {
		Alert.alert(
			'Contate o suporte',
			'Você será redirecionado para seu aplicativo de e-mail e contactar o suporte do FeedIt. Deseja continuar?',
			[
				{
					text: 'Não',
					onPress: () => console.log('Cancelado'),
					style: 'cancel',
				},
				{
					text: 'Sim',
					onPress: () => Linking.openURL('mailto:gabriel_laxy@proton.me'),
				},
			],
			{ cancelable: false }
		);
	};

	const sair = () => {
		Alert.alert(
			'Sair',
			'Você deseja realmente sair?',
			[
				{
					text: 'Não',
					onPress: () => console.log('Cancelado'),
					style: 'cancel',
				},
				{ text: 'Sim', onPress: () => navigation.navigate('login') },
			],
			{ cancelable: false }
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Configurações</Text>
			<View style={{ padding: '5%' }}>
				<DashedLine
					dashLength={5}
					dashThickness={2}
					dashGap={10}
					dashColor="#5C4B4B"
				/>
			</View>
			<Text style={styles.musica}>Música</Text>
			<Slider
				style={{ width: '90%', height: 40, alignSelf: 'center' }}
				minimumValue={0}
				maximumValue={1}
				value={volume}
				minimumTrackTintColor="#26A910"
				maximumTrackTintColor="#D8D8D8"
				thumbTintColor="#3FC600"
				onValueChange={handleVolumeChange}
			/>
			{/* <TouchableOpacity
				style={styles.topicosContainers}
				onPress={() => navigation.navigate('Perfil')}
			>
				<Text style={styles.topicos}>Perfil</Text>
			</TouchableOpacity> */}
			<TouchableOpacity style={styles.topicosContainers} onPress={emailSuporte}>
				<Text style={styles.topicos}>Suporte</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.sairContainer} onPress={sair}>
				<Text style={styles.topicos}>Sair</Text>
				<Entypo
					name="log-out"
					size={20}
					color="#5C4B4B"
					style={styles.sairIcon}
				/>
			</TouchableOpacity>
			<Image source={logoSC} style={styles.logoSC} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FBFEF4',
	},
	titulo: {
		backgroundColor: '#FBFEF4',
		alignSelf: 'center',
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
		fontSize: 32,
		marginTop: 20,
	},
	topicosContainers: {
		alignSelf: 'flex-start',
		flexDirection: 'row',
		paddingLeft: 30,
		marginTop: 20,
	},
	topicos: {
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
		fontSize: 25,
		textDecorationLine: 'underline',
	},
	musica: {
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
		fontSize: 25,
		marginTop: 20,
		Perfill: true,
		textDecorationLine: 'underline',
		paddingLeft: 30,
	},
	sairContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 30,
		marginTop: 20,
	},
	sairIcon: {
		marginLeft: 10,
	},
	logoSC: {
		marginTop: 100,
		alignSelf: 'center',
		height: 402 / 6,
		width: 1278 / 6,
	},
});
