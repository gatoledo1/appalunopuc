import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';

import { AppLoading } from 'expo';
import { Poppins_400Regular_Italic, Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import Routes from './src/routes';
import { AuthProvider } from './src/Contexts/auth'
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';

export default function App() {

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

    // updateApp();

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

const [notification, setNotification] = useState(false);
const notificationListener = useRef();
const responseListener = useRef();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
