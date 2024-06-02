import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Onboarding from './onboarding';

export default function TutorialScreen() {
	return (
		<View style={styles.container}>
			<Onboarding />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Poppins_700Bold',
		fontSize: 32,
		color: '#5C4B4B',
	},
});
