import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import HomeItens from '../pages/HomeItens';
import PWDAreaLogada from '../pages/AreaLogada';
import ComunicadosNoticias from '../pages/ComunicadosNoticias';
import GradeCompleta from '../pages/GradeCompleta';
import GradeSemanal from '../pages/GradeSemanal';
import Cursados from '../pages/Cursados';
import NotifyTabs from './NotifyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} />
                <Screen name="HomeItens" component={HomeItens} />
                <Screen name="ComunicadosNoticias" component={ComunicadosNoticias} />
                <Screen name="GradeCompleta" component={GradeCompleta} />
                <Screen name="GradeSemanal" component={GradeSemanal} />
                <Screen name="Cursados" component={Cursados} />
                <Screen name="PWDAreaLogada" component={PWDAreaLogada} />
                <Screen name="NotifyTabs" component={NotifyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;