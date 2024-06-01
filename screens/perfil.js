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
			<View style={styles.rowContainer}>
				<Image source={circDino} style={styles.circDino}></Image>
				<View style={styles.columnContainer}>
					<Text style={styles.name}>DINO</Text>
					<Level LevelNumber={5} />
				</View>
			</View>
			<View style={{ padding: '5%' }}>
				<Text style={styles.dashes}>
					{' '}
					- - - - - - - - - - - - - - - - - - -{' '}
				</Text>
			</View>
			<View style={styles.emailContainer}>
				<Text style={styles.textEmail}>Email:</Text>
				<View style={styles.emailFieldContainer}>
					<View style={styles.emailField}></View>
					<Text style={styles.textEmailPlaceholder}>email do dino</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FBFEF4',
		alignItems: 'center',
	},
	rowContainer: {
		flexDirection: 'row',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
	},
	circDino: {
		height: 210,
		width: '50%',
	},
	columnContainer: {
		flexDirection: 'column',
		alignContent: 'center',
		justifyContent: 'center',
		width: '50%',
	},
	name: {
		alignSelf: 'center',
		fontSize: 30,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
		marginTop: 45,
	},
	dashes: {
		fontFamily: 'Poppins_500Medium',
		color: '#5C4B4B',
		fontSize: 20,
		top: -10,
	},
	emailContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		width: '85%',
		top: -15,
	},
	textEmail: {
		fontSize: 25,
		color: '#5C4B4B',
		fontFamily: 'Poppins_700Bold',
		alignSelf: 'flex-start',
		paddingLeft: '5%',
	},
	emailFieldContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	emailField: {
		backgroundColor: '#BCD8B3',
		height: 60,
		width: '100%',
		borderRadius: 40,
		elevation: 5,
		shadowColor: '#000',
	},
	textEmailPlaceholder: {
		fontSize: 15,
		position:'absolute',
        color: '#5C4B4B',
        fontFamily: 'Poppins_500Medium',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
	},

	//================================================================================================================
	levelContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 45,
	},
	level: {
		height: 512 / 6,
		width: 443.5 / 6,
		position: 'absolute',
	},
	text: {
		alignContent: 'center',
		fontSize: 35,
		color: '#1A7EF1',
		fontFamily: 'Poppins_700Bold',
		top: 3,
	},
});
