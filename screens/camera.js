import React, { useState, useRef, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Modal,
	Image,
} from 'react-native';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Status from '../status.js';

import axios from 'axios';

const focus = require('../assets/focus.png');

export default function TirarFoto() {
	const navigation = useNavigation();

	const camRef = useRef(null);
	const [facing, setFacing] = useState('back');
	const [permission, requestPermission] = useCameraPermissions();
	const [capturedPhoto, setCapturedPhoto] = useState(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		(async () => {
			if (!permission) {
				await requestPermission();
			}
		})();
	}, [permission]);

	if (!permission) {
		return <View />;
	}

	if (!permission.granted) {
		return (
			<View style={styles.container}>
				<Text
					style={{
						textAlign: 'center',
						padding: 10,
						fontFamily: 'Poppins_700Bold',
					}}
				>
					Por favor, precisamos de permissão de acesso a sua câmera
				</Text>
				<TouchableOpacity onPress={requestPermission}>
					<Text style={styles.buttonText}>Conceder Permissão</Text>
				</TouchableOpacity>
			</View>
		);
	}

	async function takePicture() {
		if (camRef.current) {
			const photo = await camRef.current.takePictureAsync({ base64: true });
			setCapturedPhoto(photo.uri);
			setOpen(true);
			sendString(photo);
		}
	}

	async function sendString(photo, status) {
		try {
			const response = await axios.post(
				'https://deb9-2804-14c-bf3a-8061-c515-6a74-7328-dcf1.ngrok-free.app/process-image',
				{
					image_base64: photo.base64,
				}
			);
			console.log('Received from FastAPI:', response.data);

			if (response.data && response.data.status) {
				const updatedData = {
					...response.data.status,
					classificacao: response.data.classification,
				};
				status.update(updatedData);
			}
		} catch (error) {
			console.error('Error sending string:', error);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<CameraView style={{ flex: 1 }} facing={facing} ref={camRef}>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={() => navigation.navigate('Ajuda_foto')}>
						<Entypo
							name="help-with-circle"
							size={30}
							color="white"
							style={styles.help}
						/>
					</TouchableOpacity>
					<Image source={focus} style={styles.focus} />
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={takePicture}>
						<FontAwesome name="camera" size={23} color="#fff" />
					</TouchableOpacity>
				</View>
			</CameraView>

			{capturedPhoto && (
				<Modal animationType="slide" transparent={false} visible={open}>
					<View style={styles.modalContainer}>
						<Image
							style={styles.capturedImage}
							source={{ uri: capturedPhoto }}
						/>
						<TouchableOpacity
							style={styles.closeButton}
							onPress={() => setOpen(false)}
						>
							<FontAwesome name="window-close" size={50} color="#ff0000" />
						</TouchableOpacity>
					</View>
				</Modal>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	help: {
		marginTop: '10%',
		marginLeft: '85%',
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		margin: 20,
		alignSelf: 'center',
	},
	focus: {
		width: 280,
		height: 280,
		alignSelf: 'center',
		marginTop: '25%',
	},
	button: {
		alignSelf: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#121212',
		marginBottom: '20%',
		borderRadius: 40,
		height: 65,
		width: 65,
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 18,
		color: '#fff',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FBFEF4',
	},
	closeButton: {
		margin: 10,
	},
	capturedImage: {
		width: '90%',
		height: 400,
		borderRadius: 40,
		borderColor: '#32B708',
		borderWidth: 10,
	},
	text: {
		fontSize: 34,
		color: 'white',
		fontFamily: 'Poppins_700Bold',
		marginLeft: '8%',
		marginTop: '8%',
	},
});
