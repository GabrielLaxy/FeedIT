import * as React from 'react';
import TelaLogin from './telaLogin.js';
import TelaCadastro from './telaCadastro.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EscolhaNome from './escolhaNome.js';

export default function RoutesCadastro(navigation) {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{ headerShown: false }} component={TelaLogin} />
        <Stack.Screen name="cadastro" options={{ headerShown: false }} component={TelaCadastro} />
        <Stack.Screen name="escolhaNome" options={{ headerShown: false }} component={EscolhaNome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}