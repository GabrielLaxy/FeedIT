import React from 'react';
import {
	View,
	Text,
	Image,
	ImageBackground,
	Dimensions,
	StyleSheet,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = [
	require('../assets/stars/zero_stars.png'),  
	require('../assets/stars/one_star.png'),
	require('../assets/stars/two_stars.png'),  
	require('../assets/stars/three_stars.png'), 
	require('../assets/stars/four_stars.png'),  
];

const ProgressBar = ({ progress }) => {
	return (
		<View style={styles.progressBarContainer}>
			<View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
		</View>
	);
};

const TopicWithProgress = ({ title, progress }) => {
	return (
		<View style={styles.topicContainer}>
			<Text style={styles.topicos}>{title}</Text>
			<ProgressBar progress={progress} />
		</View>
	);
};

export default function Tasks() {
	const tasks = [
		{ title: 'Carnes', progress: 1.0 },
		{ title: 'Carboidratos', progress: 1.0 },
		{ title: 'Frutas', progress: 1.0 },
		{ title: 'Legumes', progress: 1. },
	];


	const completedTasksCount = tasks.filter(task => task.progress === 1).length;


	const imageSource = images[Math.min(completedTasksCount, images.length - 1)];

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/backgroundTasks.png')}
				style={styles.image}
			>
				<View style={styles.starsContainer}>
					<Image source={imageSource} style={styles.star} />
				</View>
				{tasks.map((task, index) => (
					<TopicWithProgress
						key={index}
						title={task.title}
						progress={task.progress}
					/>
				))}
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	daily: {
		width: 877.44 / 2.6,
		height: 156 / 2.6,
		top: -20,
	},
	image: {
		flex: 1,
		width: windowWidth,
		height: windowHeight,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	starsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	star: {
		width: 300,  
		height: 54, 
		marginHorizontal: 5,
	},
	text: {
		color: 'white',
		fontSize: 27,
		marginBottom: 40,
		fontFamily: 'Poppins_700Bold',
	},
	topicos: {
		color: '#FFFFFF',
		fontFamily: 'Poppins_700Bold',
		fontSize: 25,
		marginTop: 5,
		marginLeft: 5,
		marginBottom: -18,
	},
	topicContainer: {
		width: '100%',
		marginBottom: 50,
		bottom: -30,
	},
	progressBarContainer: {
		width: '100%',
		height: 25,
		backgroundColor: 'white',
		borderRadius: 40,
		overflow: 'hidden',
		marginTop: 10,
		borderWidth: 1,
		borderColor: 'white',
		padding: 2,
	},
	progressBar: {
		height: '100%',
		backgroundColor: '#32B708',
		borderRadius: 40,
	},
});
