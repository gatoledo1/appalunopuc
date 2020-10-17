import React, { createContext, useState } from 'react';
import { Envia } from '../Services/login';

interface AuthContextData {
    signed: boolean;
    nome: string | null;
    ra: string;
    pwd: string;
    signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [nome, setNome] = useState<string | null>(null);

    async function signIn(){
       const response = await Envia();

       const responseJson = await response.json();


       setNome(responseJson.nome);
       //console.log(nome);
    }

    return (
        <AuthContext.Provider value={{ signed: !!nome, nome, ra: '', pwd: '', signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;