import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../Contexts/auth';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import light from '../Tema/light';
import dark from '../Tema/dark';

const { Navigator, Screen } = createStackNavigator();


const Routes: React.FC = () => {
    const scheme = useColorScheme();
    const { signed } = useContext(AuthContext);
 
    return signed ? <ThemeProvider theme={scheme === 'dark' ? dark : light}><AppRoutes /></ThemeProvider> : <AuthRoutes />;
}

export default Routes;