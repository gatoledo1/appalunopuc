import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './src/Tema/light';
import dark from './src/Tema/dark';
import { AppLoading } from 'expo';
import { Poppins_400Regular_Italic, Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import Routes from './src/routes';
import { AuthProvider } from './src/Contexts/auth'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <ThemeProvider theme={light}>
        <NavigationContainer>
          <StatusBar style="light" />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
