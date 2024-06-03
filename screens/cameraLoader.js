import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

const loading = require('../assets/loading2.json');

export default function CameraLoader({ visible }) {
	const phrases = [
		'Picando foto para petisco...',
		'Tempero mágico sendo adicionado...',
		'Assando em forno virtual...',
		'Enfeitando prato divertido...',
		'Servindo com carinho...',
		'Decorando com cores vibrantes...',
		'Cortando em pedaços fofinhos...',
		'Finalizando toque especial...',
		'Montando prato saboroso...',
		'Preparando surpresa deliciosa...',
	];

	const [currentPhrase, setCurrentPhrase] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentPhrase(prevPhrase => (prevPhrase + 1) % phrases.length);
		}, 2250);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<Modal animationType="fade" transparent={true} visible={visible}>
			<View style={styles.container}>
				<View style={styles.popup}>
					<LottieView
						source={loading}
						autoPlay
						loop
						style={styles.loadingFoodAnimation}
					/>
					<Text style={styles.text}>{phrases[currentPhrase]}</Text>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
	popup: {
		width: '80%',
        height: 250,
		padding: 20,
		backgroundColor: '#FBFEF4',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingFoodAnimation: {
		width: 150,
		height: 150,
	},
	text: {
		fontSize: 20,
		fontFamily: 'Poppins_700Bold',
		textAlign: 'center',
		color: '#5C4B4B',
		marginTop: 20,
	},
});
