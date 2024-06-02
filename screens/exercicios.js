import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ImageBackground,
	Platform,
} from 'react-native';
import { Pedometer } from 'expo-sensors';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const backgroundImageExercicio = require('../assets/bgExerc.png');
const shadow = require('../assets/sombra.png');
const elipse = require('../assets/elipse.png');
const dinoAnimation = require('../assets/dinoAnimation.json');

export default function Exercicos() {
	const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
	const [pastStepCount, setPastStepCount] = useState(0);
	const [currentStepCount, setCurrentStepCount] = useState(0);
	const [shouldFetchPastSteps, setShouldFetchPastSteps] = useState(false);

useEffect(() => {
	const checkOS = async () => {
		const os = Platform.OS;
		if (os === 'ios') {
			setShouldFetchPastSteps(true);
		} else {
			const isAvailable = await Pedometer.isAvailableAsync();
			setIsPedometerAvailable(String(isAvailable));
			if (isAvailable) {
				subscribeToStepCount();
			}
		}
	};

	checkOS();

	return () => {
		Pedometer.watchStepCount(null);
	};
}, []);

const subscribeToStepCount = async () => {
	try {
		const end = new Date();
		const start = new Date();
		start.setDate(end.getDate() - 1);

		const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
		if (pastStepCountResult) {
			setPastStepCount(pastStepCountResult.steps);
		}

		const subscription = Pedometer.watchStepCount(result => {
			setCurrentStepCount(result.steps);
		});

		return () => subscription.remove();
	} catch (error) {
		console.warn('Erro esperado, ambiente de execucao android:', error);
	}
};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={backgroundImageExercicio}
				resizeMode="cover"
				style={styles.imageBackground}
			>
				<View style={styles.generalText}>
					<Text style={styles.text}>Dino e você</Text>
					<Text style={styles.text}>andaram hoje:</Text>
				</View>
				<View style={styles.centeredView}>
					<Image source={elipse} style={styles.elipse} />
					<Text style={styles.km}>
						{shouldFetchPastSteps
							? pastStepCount / 1000
							: currentStepCount / 1000}
					</Text>
					<Text style={styles.km2}>Km</Text>
				</View>
				<Image source={shadow} style={styles.shadow} />
				<LottieView source={dinoAnimation} autoPlay loop style={styles.dino} />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBackground: {
		flex: 1,
		bottom: windowHeight / 20,
		width: windowWidth,
		height: windowHeight,
		alignItems: 'center',
	},
	generalText: {
		marginTop: '15%',
		marginLeft: '-40%',
	},
	text: {
		fontSize: 34,
		color: 'white',
		fontFamily: 'Poppins_700Bold',
		alignSelf: 'flex-start',
		marginLeft: '15%',
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		marginTop: '50%',
	},
	elipse: {
		width: 205,
		height: 205,
	},
	km: {
		fontSize: 100,
		color: 'white',
		fontFamily: 'Poppins_700Bold',
		position: 'absolute',
		top: '5%',
	},
	km2: {
		fontSize: 40,
		color: 'white',
		fontFamily: 'Poppins_700Bold',
		position: 'absolute',
		top: '60%',
	},
	dino: {
		width: 320,
		height: 320,
		position: 'absolute',
		bottom: 30.5,
	},
	shadow: {
		width: 441,
		height: 184,
		position: 'absolute',
		bottom: -5,
	},
});
