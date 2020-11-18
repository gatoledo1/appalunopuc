import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Slider from '../pages/Login/intro';
import AuthContext from '../Contexts/auth';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {

    const { introLogin } = useContext(AuthContext);

    /* ========================================================================================================================
    | O contexto 'introLogin' é um estado dentro da função assincrona introOuLogin(), a função verifica se o usuário           |
    | já passou pela Introdução do app, concluindo a introdução, é setado uma informação no AsyncStorage. No retorno abaixo,   |
    | é feita essa verificação com Booleano, se tiver algo no AsyncStorage, ele envia para o login, senão roda a Intro         |
    ==========================================================================================================================*/

    return !!introLogin ? <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                            <AuthStack.Screen name="Login" component={Login} />
                         </AuthStack.Navigator>
                         : 
                        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                            <AuthStack.Screen name="Slider" component={Slider} />
                        </AuthStack.Navigator>;

}

export default AuthRoutes;