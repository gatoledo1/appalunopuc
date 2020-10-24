import React, { createContext, useState } from 'react';
import { Envia } from '../Services/login';
import { EnviaGrade } from '../Services/gradeSemanal';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
    signed: boolean;
    erroLogin: string | null;
    nome: string | null;
    authToken: string | null;
    signIn(token: string): Promise<void>;
    signOut(): void;
    gradeSemanal(token: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [nome, setNome] = useState<string | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [erroLogin, setErrologin] = useState('');

    async function signIn(token){

       setAuthToken(token);

       const response = await Envia(token);

       const responseJson = await response.json();

       if(responseJson.nome == null || responseJson.nome == undefined){
        setErrologin('RA ou senha incorretos');
       }else{
            setNome(responseJson.nome);
       
            await AsyncStorage.setItem('token', token);
       }
    }

    function signOut(){
        AsyncStorage.setItem('token', '');
        AsyncStorage.setItem('gradeSemanal', '');

        setErrologin('Desconectado');
        
        setNome(null);
    }

    async function gradeSemanal(token){

        const responseGradeSemanal = await EnviaGrade(token);

       const responseGradeSemanalJson = await responseGradeSemanal.json();

       await AsyncStorage.setItem('gradeSemanal', JSON.stringify(responseGradeSemanalJson));
    }

    

    return (
        <AuthContext.Provider value={{ signed: !!nome, erroLogin, nome, authToken, signIn, signOut, gradeSemanal}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;