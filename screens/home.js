import React, { useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Importe o ícone que você deseja usar

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const backgroundImage = require('../assets/home_background.png');
const dino_lv1 = require('../assets/dino_lv1.png');
const shadow = require('../assets/sombra.png');

export default function Home() {
    const panelYPosition = useRef(new Animated.Value(-windowHeight)).current;
    const [panelOpen, setPanelOpen] = useState(false);

    const togglePanel = () => {
        const toValue = panelOpen ? -windowHeight : 0;
        Animated.timing(panelYPosition, {
            toValue: toValue,
            duration: 500,
            useNativeDriver: false
        }).start();
        setPanelOpen(!panelOpen);
    };

    const panelStyle = {
        transform: [{ translateY: panelYPosition }],
        backgroundColor: '#FBFEF4',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: windowHeight / 3,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    };


    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
                <Image source={shadow} style={styles.shadow}/>
                <Image source={dino_lv1} style={styles.dino} />
                <TouchableOpacity onPress={togglePanel} style={styles.iconContainer}>
                    <Entypo name={panelOpen ? "arrow-with-circle-up" : "arrow-with-circle-down"} size={24} color="black" />
                </TouchableOpacity>
                <Animated.View style={panelStyle}>
                    <Text>Status</Text>
                </Animated.View>
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
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dino:{
        width: 220,
        height:220,
        position: 'absolute',
        bottom:120,
    },
    shadow:{
        width:441,
        height:184,
        position:'absolute',
        bottom:30
    },
    iconContainer: {
        position: 'absolute',
        top: 20, // Posição do ícone a partir do topo da tela
        right: 20, // Posição do ícone a partir da direita da tela
        zIndex: 1, // Garante que o ícone esteja acima do conteúdo da tela
    },
    // Adicione estilos adicionais conforme necessário
});
