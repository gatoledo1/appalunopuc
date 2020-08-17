import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Poppins_400Regular_Italic, Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

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
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
