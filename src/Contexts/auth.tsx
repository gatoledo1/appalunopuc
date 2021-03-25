import React, { createContext, useState, useRef } from 'react';
import { Envia } from '../Services/login';
import { EnviaGrade } from '../Services/gradeSemanal';
import { RetornaTokenAreaLogada } from '../Services/tokenAreaLogada';
import AsyncStorage from '@react-native-community/async-storage';
import { Modalize } from 'react-native-modalize';
import * as Notifications from 'expo-notifications';
import { Platform, Alert } from 'react-native';
import Constants from 'expo-constants';
import { objGradeSemanal } from '../components/TabView';


interface AuthContextData {
    signed: boolean;
    erroLogin: string | null;
    nome: string | null;
    ra: number | null;
    authToken: string | null;
    authTokenAreaLogada: string | null;
    signIn(token: string): Promise<void>;
    signOut(): void;
    gradeSemanal(token: string): Promise<void>;
    tokenAreaLogada(token: string): Promise<void>;
    VisualizarNotificacao(title: string, subject: string, data: string, codigo: number): void;
    currentNotify: {titulo: string, mensagem: string, data: string};
    localizacaoSala(lat: string, long: string): void;
    latitudeSala: string;
    longitudeSala: string;
    modalizeRef: any;
    introOuLogin(): void;
    introLogin: string | null;
    EnviaTokenPushNotification(token: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    
    const [nome, setNome] = useState<string | null>(null);
    const [ra, setRa] = useState<number | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [erroLogin, setErrologin] = useState('');
    const [authTokenAreaLogada, setAuthTokenAreaLogada] = useState('')
    const [latitudeSala, setlatitudeSala] = useState<string>('-22.833951');
    const [longitudeSala, setlongitudeSala] = useState<string>('-47.0503008');
    const modalizeRef = useRef<Modalize>(null);
    const [introLogin, setIntroLogin] = useState<string | null>('iniciou');
    const [currentNotify, setCurrentNotify] = useState({ });


    async function signIn(token){

       setAuthToken(token);

        const response = await Envia(token);

       const responseJson = await response.json();

        if(responseJson.nome == null || responseJson.nome == undefined){
            
            setErrologin('RA ou senha incorretos');

            return erroLogin;
       
        }else{

            setErrologin('ok');
            setNome(responseJson.nome);
            setRa(responseJson.ra);
       
            await AsyncStorage.setItem('token', token);

            return erroLogin;
       }
    }

    async function signOut(){
        try {
            await AsyncStorage.removeItem('gradeSemanal');
            await AsyncStorage.removeItem('token');
          
          } catch(e) {
            // remove error
          }
        
        setErrologin('Desconectado');
        
        setNome(null);
    }

    async function gradeSemanal(token: string){

        const responseGradeSemanal = await EnviaGrade(token);

        const responseGradeSemanalJson = await responseGradeSemanal.json();

        await AsyncStorage.setItem('gradeSemanal', JSON.stringify(responseGradeSemanalJson));

        objGradeSemanal();
    }

    async function tokenAreaLogada(token: string){

        const responsePessoa = await RetornaTokenAreaLogada(token);
 
        const responsePessoaJson = await responsePessoa.json();

        //Como o EndPoint retorna um array com o objeto, é necessario usar um Map() para setar o estado
        responsePessoaJson.map((Info: { token: React.SetStateAction<string>; }) => {
            setAuthTokenAreaLogada(Info.token);
        });
 
    }

    function localizacaoSala(lat: string, long: string){
        
        setlatitudeSala(lat);
        setlongitudeSala(long);

        modalizeRef.current?.open();
    }

    function VisualizarNotificacao(title: string, subject: string, data: string, codigo: number){

        let arrayVizualizar = { titulo: title, mensagem: subject, data: data };

        setCurrentNotify(arrayVizualizar);

            fetch(`LINK CENSURADO`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }) /* .then(response => response.json())
                .then(json => console.log(json)) */


        modalizeRef.current?.open();
    }

    async function EnviaTokenPushNotification(token: string){

        const ExponentToken = await AsyncStorage.getItem('idDevice');
        const historicoEnvioTokenPush = await AsyncStorage.getItem('idDeviceEnviado');
    
        if(ExponentToken !== null){

            if(historicoEnvioTokenPush == null || historicoEnvioTokenPush == undefined || historicoEnvioTokenPush == '' ){
                
                AsyncStorage.setItem('idDeviceEnviado', 'ok');

                const sistemaoperacional = Platform.OS;
                                
                await fetch(`LINK CENSURADO`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `${token}`
                },
                }).then(response => response.json())
                .then(json => console.log(json));

            }
        }
    }

    async function introOuLogin() {
        
        const intro = await AsyncStorage.getItem('intro');

        setIntroLogin(intro);  
    }

    return (
        <AuthContext.Provider value={{ signed: !!nome, erroLogin, nome, ra, authToken, authTokenAreaLogada, signIn, 
        signOut, gradeSemanal, tokenAreaLogada, VisualizarNotificacao, currentNotify, localizacaoSala, latitudeSala, 
        longitudeSala, modalizeRef, introOuLogin, introLogin, EnviaTokenPushNotification }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
