import React, { useContext, useEffect, useState, useRef } from 'react';
import { Image } from 'react-native';
import PaperOnboarding, {PaperOnboardingItemType} from "@gorhom/paper-onboarding";
import logoLogin from '../../assets/images/PUC-80anos_logo-branco.png';
import recursos from '../../assets/images/recursos.png';
import pwdImg from '../../assets/images/password.png';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import AuthContext from '../../Contexts/auth';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Platform } from 'react-native';

const data: PaperOnboardingItemType[] = [
    {
        title: 'Bem-vindo',
        description: 'Em comemoração aos 80 anos de PUC-Campinas, criamos um novo app para os alunos que apresenta novos recursos e uma interface renovada, muito mais intuitiva. 😄',
        backgroundColor: '#ffb207',
        image: () => <Image source={logoLogin} style={{height: 130, resizeMode: 'contain'}} />,
        icon: () => <Feather name="info" size={30} color="#ffc107" />,
    },
    {
        title: 'Novos recursos',
        description: 'Receba notificações e veja informações das aulas, mensagens, mapa de sala e muito mais. Disponibilizamos também o modo escuro para mais acessibilidade.',
        backgroundColor: '#1b69f8',
        image: () => <Image source={recursos} style={{height: 250, resizeMode: 'contain'}} />,
        icon: () => <Feather name="check-circle" size={30} color="#1b69f8" />,
    },
    {
        title: 'Atenção',
        description: 'Seu login e sua senha são informações que não devem ser compartilhadas. A PUC-Campinas não se responsabilza pelo uso indevido dos seus dados, acessados por meios de responsabilidade dos estudantes.',
        backgroundColor: '#ff6151',
        image: () => <Image source={pwdImg} style={{height: 250, resizeMode: 'contain'}} />,
        icon: () => <Feather name="eye-off" size={30} color="#e74c3c" />,
    },
    
    ];

const Slider: React.FC = () => {
    
    const { introOuLogin } = useContext(AuthContext);    
    const [gravaPushToken, setGravaPushToken] = useState('');

    
    useEffect(() => {

        registerForPushNotificationsAsync();

    }, [gravaPushToken]);

    async function registerForPushNotificationsAsync() {
        
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Falha ao pegar permissão de notificação push');
            return;
          }
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          // const token = (await Notifications.getDevicePushTokenAsync()).data;
          //const tokenLimpo = token.replaceAll('/"', "");

          setGravaPushToken(token);

        } else {
          alert('Must use physical device for Push Notifications');
        }

          await fetch('https://exp.host/--/api/v2/push/send', {       
              method: 'POST', 
              headers: {
                    Accept: 'application/json',  
                    'Content-Type': 'application/json', 
                    'accept-encoding': 'gzip, deflate',   
                    'host': 'exp.host'      
                }, 
              body: JSON.stringify({                 
                    to: gravaPushToken,                        
                    title: 'Notificações PUC-Campinas',                  
                    body: 'Você receberá atualizações acadêmicas e mensagens da PUC-Campinas, através do aplicativo. 😉',             
                    priority: "high",            
                    sound:"default",              
                    channelId:"default",   
                        }),        
            })/*.then((response) => response.json())   
                    .then((responseJson) => { console.log(responseJson) })
                            .catch((error) => { console.log(error) }); */
            
      
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
      }

    const handleOnClosePress = () => {
    /*==============================================================================================================================
    | Ao clicar no botão fechar, deve ser setado no AsyncStorage a informação de que a Introdução já foi feita pelo novo usuário    |
    | Então a função introOuLogin() é chamada para que ela set um novo valor no estado "introLogin", assim mudando a rota de login  |
    ===============================================================================================================================*/

        AsyncStorage.setItem('intro', 'ok');

        AsyncStorage.setItem('idDevice', JSON.stringify(gravaPushToken));

        introOuLogin();

    }

    return (
        <PaperOnboarding
        data={data}
        closeButtonText="Fechar"
        onCloseButtonPress={handleOnClosePress}
        />
    )
}

export default Slider;