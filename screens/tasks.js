import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const daily = require('../assets/daily.png');
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
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/backgroundTasks.png')}
                style={styles.image}>
                <Image source={daily} style={styles.daily}/>
                <TopicWithProgress title="Carnes" progress={0.7}/>
                <TopicWithProgress title="Carboidratos" progress={0.5}/>
                <TopicWithProgress title="Frutas" progress={0.8}/>
                <TopicWithProgress title="Doces" progress={0.3}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
        justifyContent: 'space-between',
    },
    daily: {
        width: 877.44/2.6,
        height: 156/2.6,
        top: -20,
    },
    image: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    text: {
        color: 'white',
        fontSize: 27,
        marginBottom: 40,
        fontFamily: "Poppins_700Bold",
    },
    topicos: {
        color: "#FFFFFF",
        fontFamily: "Poppins_700Bold",
        fontSize: 25,
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 0,
        marginBottom: -20,
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
        backgroundColor: '#26A910',
        borderRadius: 40,  

    },
});

const stylesLevel = StyleSheet.create({
    levelContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    level: {
      height:512/4,
      width: 443.5/4,
      position:'absolute',
    },
    text: {
      alignContent: 'center',
      fontSize: 50,
      color: '#1A7EF1',
      fontFamily: 'Poppins_700Bold',
      top: 5,
    },
  });
