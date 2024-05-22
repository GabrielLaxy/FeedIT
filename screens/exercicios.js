import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ImageBackground, Platform} from 'react-native';
import { Pedometer } from 'expo-sensors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const backgroundImageExercicio = require('../assets/exercicio_background.png');
const dino_lv1 = require('../assets/dino_lv1.png');
const shadow = require('../assets/sombra.png');
const elipse = require('../assets/elipse.png');

export default function Exercicos(){
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);
  
    const subscribe = async () => {
      const isAvailable = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(isAvailable));
  
      if (isAvailable) {
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);
  
        const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
        if (pastStepCountResult) {
          setPastStepCount(pastStepCountResult.steps);
        }
  
        return Pedometer.watchStepCount(result => {
          setCurrentStepCount(result.steps);
        });
      }
    };
  
    useEffect(() => {
        const initSubscription = async () => {
            const sub = await subscribe();
            return sub;
        };
        const init = async () => {
            const sub = await initSubscription();
            return () => {
                if (sub) {
                    sub.remove();
                }
            };
        };
        const unsubscribe = init();

        return () => unsubscribe();
    }, []);

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
                <View style={styles.centeredView}>
                    <Image source={elipse} style={styles.elipse} />
                    <Text style={styles.km}>
                        {Platform.OS === 'ios' ? pastStepCount : currentStepCount}
                    </Text>
                    <Text style={styles.km2}>
                        Km
                    </Text>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: '50%',
    },
    elipse:{
        width: 205,
        height:205,
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
    dino:{
        width: 220,
        height:220,
        position: 'absolute',
        bottom:80.5,
    },
    shadow:{
        width:441,
        height:184,
        position:'absolute',
        bottom:-5,
    },
});