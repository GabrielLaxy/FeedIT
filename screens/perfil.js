import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
	useFonts,
	Poppins_700Bold,
	Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import DashedLine from 'react-native-dashed-line';

const circDino = require('../assets/circDino.png');
const SetaCadastro = require('../assets/SetaCadastro.png');
const nivel = require('../assets/level.png');

const Level = ({ LevelNumber }) => {
	return (
		<View style={styles.levelContainer}>
			<Text style={styles.text}>{LevelNumber}</Text>
			<Image source={nivel} style={styles.level}></Image>
		</View>
	);
};

export default function Perfil({}) {
	const [fontLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_500Medium,
	});

	if (!fontLoaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.btnVoltar}
				onPress={() => navigation.push('config')}
			>
				<Image source={SetaCadastro}></Image>
			</TouchableOpacity>
			<Text style={styles.title}>Perfil</Text>
			<View style={{padding: '5%'} }>
				<DashedLine
					dashLength={5}
					dashThickness={2}
					dashGap={10}
					dashColor="#5C4B4B"
				/>
			</View>
			<Image source={circDino} style={styles.imagem}></Image>
			<Text style={styles.textName}>DINO</Text> 
			<Level LevelNumber={1}/>
			<View style={styles.email}>
				<Text style={styles.textEmail}>Email:</Text>
				<Text style={styles.textEmailUser}>email do dino</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCFFF5',
		alignItems: 'center',
		marginTop: '11%',
		marginBottom: '30%'
	},
	btnVoltar: {
		marginTop: '2%',
		marginLeft: '-78%',
	},
	title: {
		marginTop: '-8%',
		fontSize: 34,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},
	imagem: {
		height: 200,
		width: 200,
		marginLeft: '-40%',
	},
	textName: {
		marginLeft: '37%',
		marginTop: '-38%',
		fontSize: 25,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},
	email: {
		marginBottom: '70%',
	},
	textEmail:{
		marginLeft: '-10%',
		fontSize: 25,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},
	textEmailUser: {
		marginTop: '2%',
		fontSize: 25,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},
	campo: {
		background: '#BCD8B3',
		borderRadius: 50,
		width: '100px',
		height: '100px',
	},


	levelContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 150,
		marginTop: -110,
	},
	level: {
		height: 512 / 6,
		width: 443.5 / 6,
		position: 'absolute',
	},
	text: {
		alignContent: 'center',
		fontSize: 25,
		color: '#1A7EF1',
		fontFamily: 'Poppins_700Bold',
		top: 1.5,
	},
});
