import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './screens/routes'
import BackgroundMusic from './music';

export default function App() {
  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#8AC600',
    fontSize: 20,
    fontWeight: 'bold'
  }
});