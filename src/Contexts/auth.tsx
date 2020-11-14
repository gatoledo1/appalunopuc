import React, { createContext, useState, useRef } from 'react';
import { Envia } from '../Services/login';
import { EnviaGrade } from '../Services/gradeSemanal';
import { RetornaTokenAreaLogada } from '../Services/tokenAreaLogada';
import AsyncStorage from '@react-native-community/async-storage';
import { Modalize } from 'react-native-modalize';
import * as Location from 'expo-location';

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
    localizacaoSala(lat: string, long: string): void;
    latitudeSala: string;
    longitudeSala: string;
    latitudePessoa: number;
    longitudePessoa: number;
    modalizeRef: any;
    introOuLogin(): void;
    introLogin: string | null;
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
    const [latitudePessoa, setlatitudePessoa] = useState<number>(-22.833951);
    const [longitudePessoa, setlongitudePessoa] = useState<number>(-47.0503008);
    const modalizeRef = useRef<Modalize>(null);
    const [introLogin, setIntroLogin] = useState<string | null>(null);


    async function signIn(token){

       setAuthToken(token);

       const response = await Envia(token);

       const responseJson = await response.json();

       if(responseJson.nome == null || responseJson.nome == undefined){
        setErrologin('RA ou senha incorretos');
       }else{
            setNome(responseJson.nome);
            setRa(responseJson.ra);
       
            await AsyncStorage.setItem('token', token);
       }
    }

    async function signOut(){
        await AsyncStorage.clear().then(() => console.log('Cleared'))
        await AsyncStorage.setItem('gradeSemanal', '');
        await AsyncStorage.setItem('token', '');
        
        setErrologin('Desconectado');
        
        setNome(null);
    }

    async function gradeSemanal(token: string){

        const responseGradeSemanal = await EnviaGrade(token);

       const responseGradeSemanalJson = await responseGradeSemanal.json();

       await AsyncStorage.setItem('gradeSemanal', JSON.stringify(responseGradeSemanalJson));
    }

    async function tokenAreaLogada(token: string){

        const responsePessoa = await RetornaTokenAreaLogada(token);
 
        const responseresponsePessoaJson = await responsePessoa.json();
 
        setAuthTokenAreaLogada(responseresponsePessoaJson.token);
 
     }

    function localizacaoSala(lat: string, long: string){
        setlatitudeSala(lat);
        setlongitudeSala(long);

        console.log('função localizacaoSala')
        localizacaoAluno();

        async function localizacaoAluno(){
            let { status } = await Location.requestPermissionsAsync()
            console.log('função localizacaoAluno')
            if (status !== 'granted') {
                console.log('sem permissão')
                return
            }
            const location = await Location.getCurrentPositionAsync()

            const { latitude, longitude } = location.coords;

            setLocationPessoa();

                function setLocationPessoa(){
                    console.log('função setLocationPessoa')
                    setlatitudePessoa(latitude);
                    setlongitudePessoa(longitude)

                    setTimeout(setLocationPessoa, 15000);
                }
            
        }

        modalizeRef.current?.open();
    }

    async function introOuLogin() {
        const intro = await AsyncStorage.getItem('teste3');

        setIntroLogin(intro);
        
    }

    return (
        <AuthContext.Provider value={{ signed: !!nome, erroLogin, nome, ra, authToken, authTokenAreaLogada, signIn, 
        signOut, gradeSemanal, tokenAreaLogada, localizacaoSala, latitudeSala, longitudeSala, latitudePessoa, longitudePessoa, 
        modalizeRef, introOuLogin, introLogin}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;