import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telaLogin.js';
import TelaCadastro from './telaCadastro.js';
import EscolhaNome from './escolhaNome.js';
import { Config, Exercicios, Home, Tasks, Camera, Perfil } from '../screens';
import {
	useFonts,
	Poppins_700Bold,
	Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import { useIsFocused } from '@react-navigation/native';
import { playBackgroundMusic, stopBackgroundMusic } from '../backend/music.js';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import Ajuda_foto from './screen_ajuda/ajuda_foto.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
	tabBarShowLabel: false,
	headerShown: true,
	headerTitleAlign: 'center',
	headerTitle: () => (
		<View>
			<Text
				style={{
					color: '#8AC600',
					fontSize: 28,
					fontFamily: 'Poppins_700Bold',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '3%',
				}}
			>
				FeedIt
			</Text>
		</View>
	),
	tabBarStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0,
		elevation: 0,
		height: 65,
		background: '#5C4B4B',
	},
};

function TabGroup() {
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			playBackgroundMusic();
		} else {
			stopBackgroundMusic();
		}
	}, [isFocused]);

	return (
		<Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
			<Tab.Screen
				name="Tasks"
				component={Tasks}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<View
								style={[
									styles.icones,
									{ backgroundColor: focused ? '#8AC600' : null },
								]}
							>
								<Feather
									name="check-square"
									size={24}
									color={focused ? '#ffff' : '#5C4B4B'}
								/>
							</View>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Câmera"
				component={Camera}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<View
								style={[
									styles.icones,
									{ backgroundColor: focused ? '#8AC600' : null },
								]}
							>
								<Feather
									name="camera"
									size={24}
									color={focused ? '#ffff' : '#5C4B4B'}
								/>
							</View>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<View
								style={[
									styles.icones,
									{ backgroundColor: focused ? '#8AC600' : null },
								]}
							>
								<AntDesign
									name="home"
									size={30}
									color={focused ? '#ffff' : '#5C4B4B'}
								/>
							</View>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Exercício"
				component={Exercicios}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<View
								style={[
									styles.icones,
									{ backgroundColor: focused ? '#8AC600' : null },
								]}
							>
								<FontAwesome5
									name="running"
									size={24}
									color={focused ? '#ffff' : '#5C4B4B'}
								/>
							</View>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Configurações"
				component={Config}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<View
								style={[
									styles.icones,
									{ backgroundColor: focused ? '#8AC600' : null },
								]}
							>
								<Feather
									name="settings"
									size={24}
									color={focused ? '#ffff' : '#5C4B4B'}
								/>
							</View>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

function StackGroup() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="login"
				options={{ headerShown: false }}
				component={TelaLogin}
			/>
			<Stack.Screen
				name="cadastro"
				options={{ headerShown: false }}
				component={TelaCadastro}
			/>
			<Stack.Screen
				name="escolhaNome"
				options={{ headerShown: false }}
				component={EscolhaNome}
			/>
			<Stack.Screen
				name="TabGroup"
				options={{ headerShown: false }}
				component={TabGroup}
			/>
			<Stack.Screen
				name="Ajuda_foto"
				component={Ajuda_foto}
				options={{
					headerStyles: {
						backgroundColor: 'white',
					},
					headerTintColor: '#5C4B4B',
					headerTitleAlign: 'center',
					headerTitle: () => (
						<View>
							<Text
								style={{
									color: '#5C4B4B',
									fontSize: 25,
									fontFamily: 'Poppins_700Bold',
									alignItems: 'center',
									justifyContent: 'center',
									marginTop: '10%',
								}}
							>
								Ajuda
							</Text>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="Perfil"
				component={Perfil}
				options={{
					headerStyle: {
						backgroundColor: 'white',
					},
					headerTintColor: '#5C4B4B',
					headerTitleAlign: 'center',
					headerTitle: () => (
						<View>
							<Text
								style={{
									color: '#5C4B4B',
									fontSize: 25,
									fontFamily: 'Poppins_700Bold',
									alignItems: 'center',
									justifyContent: 'center',
									marginTop: '10%',
								}}
							>
								Perfil
							</Text>
						</View>
					),
					headerTitleStyle: {
						fontFamily: 'Poppins_700Bold',
						fontSize: 20,
					},
				}}
			/>
		</Stack.Navigator>
	);
}

export default function Navigation() {
	const [fontLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_500Medium,
	});

	if (!fontLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<StackGroup />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	icones: {
		width: 45,
		height: 45,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
