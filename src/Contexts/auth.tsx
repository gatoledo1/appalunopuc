import React, { createContext, useState, useRef } from 'react';
import { Envia } from '../Services/login';
import { EnviaGrade } from '../Services/gradeSemanal';
import { RetornaTokenAreaLogada } from '../Services/tokenAreaLogada';
import AsyncStorage from '@react-native-community/async-storage';
import { Modalize } from 'react-native-modalize';
import { InfoMap } from '../pages/GradeCompleta/styles';


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
    const modalizeRef = useRef<Modalize>(null);
    const [introLogin, setIntroLogin] = useState<string | null>('iniciou');


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

    async function introOuLogin() {
        
        const intro = await AsyncStorage.getItem('intro');

        setIntroLogin(intro);  
    }

    return (
        <AuthContext.Provider value={{ signed: !!nome, erroLogin, nome, ra, authToken, authTokenAreaLogada, signIn, 
        signOut, gradeSemanal, tokenAreaLogada, localizacaoSala, latitudeSala, longitudeSala, modalizeRef, introOuLogin, introLogin}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;