import React, { useState, useRef } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, Animated, TouchableOpacity, Easing } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const backgroundImage = require('../assets/home_background.png');
const dino_lv1 = require('../assets/dino_lv1.png');
const shadow = require('../assets/sombra.png');

export default function Home() {
    const panelYPosition = useRef(new Animated.Value(-windowHeight / 3.5)).current;
    const buttonYPosition = useRef(new Animated.Value(0)).current; 
    const [panelOpen, setPanelOpen] = useState(false);
    // console.log(btnInitialPosition);


    const togglePanel = () => {
        const toValue = panelOpen ?  -windowHeight / 3.5: 0;
        const buttonToValue = panelOpen ? 0 : windowHeight / 3.5 + 10; 
    
        Animated.timing(panelYPosition, {
            toValue: toValue,
            duration: 500,
            useNativeDriver: true 
        }).start();
    
        Animated.timing(buttonYPosition, {
            toValue: buttonToValue,
            duration: 500,
            useNativeDriver: true 
        }).start();
    
        setPanelOpen(!panelOpen);
    };
    

    const panelStyle = {
        transform: [{ translateY: panelYPosition }],
        backgroundColor: '#FBFEF4',
        position: 'absolute',
        width: '100%',
        top:0,
        height: windowHeight / 3.5,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    };

    const buttonStyle = {
        transform: [{ translateY: buttonYPosition }],
        position: 'absolute',
        top: 5,
        alignItems: 'center',
        
        
        // zIndex: 1, 
    };
    
    

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
                <Image source={shadow} style={styles.shadow}/>
                <Image source={dino_lv1} style={styles.dino} />
                <Animated.View style={panelStyle}>
                    <Text>Status</Text>
                </Animated.View>
                <TouchableOpacity onPress={togglePanel} style={buttonStyle}>
                    <AntDesign name={panelOpen ? "up" : "down"} size={30} color={'#5C4B4B'} />
                </TouchableOpacity>
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
        top: 20,
        right: 20, 
        zIndex: 1, 
    },
    seta:{
        
        
    }
});
