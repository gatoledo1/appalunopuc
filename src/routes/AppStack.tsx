import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import HomeItens from '../pages/HomeItens';
import ComunicadosNoticias from '../pages/ComunicadosNoticias';
import GradeCompleta from '../pages/GradeCompleta';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>  
                <Screen name="Login" component={Login} />
                <Screen name="HomeItens" component={HomeItens} />
                <Screen name="ComunicadosNoticias" component={ComunicadosNoticias} />
                <Screen name="GradeCompleta" component={GradeCompleta} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;