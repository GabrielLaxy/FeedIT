import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ImageBackground} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const backgroundImageExercicio = require('../assets/exercicio_background.png');
const dino_lv1 = require('../assets/dino_lv1.png');
const shadow = require('../assets/sombra.png');
const elipse = require('../assets/elipse.png');

export default function Exercicos(){
    return(
        <View style={styles.container}>
            <ImageBackground source={backgroundImageExercicio} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.generalText}>  
                    <Text style={styles.text}>
                        Dino e você
                    </Text>
                    <Text style={styles.text}>
                        andaram hoje:
                    </Text>
                </View>
                <View style={styles.andou}>  
                    <Image source={elipse} style={styles.elipse} />
                    <View style={styles.textContainer}>
                        <Text style={styles.km}>
                            0
                        </Text>
                    </View>
                </View>

                <Image source={shadow} style={styles.shadow}/>
                <Image source={dino_lv1} style={styles.dino} />
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
        bottom:windowHeight/20,
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
    },
    generalText:{
        marginTop:'15%',
        marginLeft:'-40%',
    },
    text: {
        fontSize: 34,
        color: 'white',
        fontFamily:'Poppins_700Bold',
        alignSelf:'flex-start',
        marginLeft:'15%',
    },
    andou:{
        alignSelf: 'center',
    },
    elipse:{
        width: 220,
        height:220,
        marginTop:'5%',
    },
    textContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    km: {
        fontSize: 80,
        color: 'white',
        fontFamily: 'Poppins_700Bold',
    },
    dino:{
        width: 220,
        height:220,
        position: 'absolute',
        bottom:85,
    },
    shadow:{
        width:441,
        height:184,
        position:'absolute',
        bottom:0,
    },
});