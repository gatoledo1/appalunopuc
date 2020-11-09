import React, { createContext, useState } from 'react';
import { Envia } from '../Services/login';
import { EnviaGrade } from '../Services/gradeSemanal';
import { RetornaTokenAreaLogada } from '../Services/tokenAreaLogada';
import AsyncStorage from '@react-native-community/async-storage';
import light from '../Tema/light';
import dark from '../Tema/dark';

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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [nome, setNome] = useState<string | null>(null);
    const [ra, setRa] = useState<number | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [erroLogin, setErrologin] = useState('');
    const [authTokenAreaLogada, setAuthTokenAreaLogada] = useState('')
    // const [theme, setTheme] = useState(light)
    
   // const toggleTheme = () => {
    //    setTheme(theme.title === 'light' ? dark : light)

        //AsyncStorage.setItem('theme', JSON.stringify(theme));
    //}


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

    function signOut(){
        AsyncStorage.setItem('token', '');
        AsyncStorage.setItem('gradeSemanal', '');

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

    return (
        <AuthContext.Provider value={{ signed: !!nome, erroLogin, nome, ra, authToken, authTokenAreaLogada, signIn, 
        signOut, gradeSemanal, tokenAreaLogada}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;