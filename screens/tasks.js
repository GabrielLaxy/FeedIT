import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

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
                source={require('..\assets\backgroundTasks.png')}
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
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    topicos: {
        backgroundColor: "#FBFEF4",
        color: "#5C4B4B",
        fontFamily: "Poppins",
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
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
