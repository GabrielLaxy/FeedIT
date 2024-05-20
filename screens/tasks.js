import React from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
                <Text style={styles.text}>Tarefas</Text>
                <TopicWithProgress title="Carnes" progress={0.7} />
                <TopicWithProgress title="Carboidratos" progress={0.5} />
                <TopicWithProgress title="Frutas" progress={0.8} />
                <TopicWithProgress title="Doces" progress={0.3} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
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
        fontSize: 24,
        marginBottom: 20,
        fontFamily: "Poppins_700Bold",
    },
    topicos: {
        color: "#5C4B4B",
        fontFamily: "Poppins_700Bold",
        fontSize: 20,
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 0,
    },
    topicContainer: {
        width: '100%',
        marginBottom: 20,
    },
    progressBarContainer: {
        width: '100%',
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#3b5998',
    },
});
