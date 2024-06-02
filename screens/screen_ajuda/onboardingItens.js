import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
} from 'react-native';

export default function onboardingItens({ item }) {
	const { width } = useWindowDimensions();

	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={item.image}
				style={[styles.image, { width, resizeMode: 'contain' }]}
			/>
			<View style={{ flex: 0.3 }}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		flex: 0.7,
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Poppins_700Bold',
		fontSize: 32,
		marginBottom: 10,
		color: '#8AC600',
		textAlign: 'center',
	},
	description: {
		fontFamily: 'Poppins_500Medium',
		color: '#5C4B4B',
		textAlign: 'center',
		fontSize:18,
		paddingHorizontal: 64,
	},
});
