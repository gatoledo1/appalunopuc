import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';

import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
//import { Poppins_400Regular_Italic, Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import Routes from './src/routes';
import { AuthProvider } from './src/Contexts/auth'
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';

const fetchFonts = () => {
  return Font.loadAsync({
  'Poppins_400Regular': require('./fonts/Poppins-Regular.ttf'),
  'Poppins_400Regular_Italic': require('./fonts/Poppins-Italic.ttf'),
  'Poppins_600SemiBold': require('./fonts/Poppins-SemiBold.ttf')
  });
};

export default function App() {

  const [isReady, setIsReady] = useState(false);
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.setNotificationHandler({
      handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
      }),
  });

  async function updateApp(){
    const { isAvaliable } = await Updates.checkForUpdateAsync()

    if(isAvaliable){
      await Updates.fetchUpdateAsync()
      await Updates.realoadAsync()
    }
  }

  useEffect(() => {

    updateApp();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
    });

    return () => {
        Notifications.removeNotificationSubscription(notificationListener);
        Notifications.removeNotificationSubscription(responseListener);
    };

}, []);

  /*let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular_Italic
  });*/


  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  } else {

    return (
      <NavigationContainer>
        <StatusBar style="light" />
          <AuthProvider> 
            <Routes />
          </AuthProvider>
      </NavigationContainer>
    );
  }
}
