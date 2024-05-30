import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
	useFonts,
	Poppins_700Bold,
	Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native-safe-area-context';
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
		<SafeAreaView style={styles.safeContainer}>
			<TouchableOpacity
				style={styles.btnVoltar}
				onPress={() => navigation.push('config')}
			>
				<Image source={SetaCadastro}></Image>
			</TouchableOpacity>
			<Text style={styles.title}>Perfil</Text>
			<View style={{ padding: '3%' }}>
				<DashedLine
					dashLength={5}
					dashThickness={2}
					dashGap={10}
					dashColor="#5C4B4B"
				/>
			</View>
			<Image source={circDino} style={styles.imagem}></Image>
			<Text style={styles.textName}>DINO</Text>
			<Level LevelNumber={1} />
			<Text style={styles.textEmail}>Email:</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flew: 1,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: '#FCFFF5',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btnVoltar: {
		marginTop: '12%',
		marginLeft: '-78%',
	},
	title: {
		marginTop: '-7%',
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
		marginLeft: '40%',
		marginTop: '-40%',
		fontSize: 25,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},
	levelDino: {
		marginTop: '',
	},
	textEmail: {
		marginTop: '40%',
		marginLeft: '-45%',
		fontSize: 25,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
	},

	levelContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 15,
		marginTop: -22,
	},
	level: {
		height: 512 / 5,
		width: 443.5 / 5,
		position: 'absolute',
	},
	text: {
		alignContent: 'center',
		fontSize: 30,
		color: '#1A7EF1',
		fontFamily: 'Poppins_700Bold',
		top: 1.5,
	},
});
