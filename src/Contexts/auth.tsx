import React, { createContext, useState } from 'react';
import { Envia } from '../Services/login';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
    signed: boolean;
    erroLogin: string | null;
    nome: string | null;
    ra: string | null;
    token: string | null;
    signIn(token): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [nome, setNome] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [erroLogin, setErrologin] = useState('');

    async function signIn(token){
       const response = await Envia(token);

       const responseJson = await response.json();

       if(responseJson.nome == null || responseJson.nome == undefined){
        setErrologin('RA ou senha incorretos');
       }else{
        setNome(responseJson.nome);
        setToken(token);
       
        await AsyncStorage.setItem('token', token);
       }

       
    }

    function signOut(){
        AsyncStorage.setItem('token', '');

        setErrologin('Desconectado');
        
        setNome(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!nome, erroLogin, nome, ra: '', token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;