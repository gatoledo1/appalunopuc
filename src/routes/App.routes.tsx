import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeItens from '../pages/HomeItens';
import PWDAreaLogada from '../pages/AreaLogada';
import ComunicadosNoticias from '../pages/ComunicadosNoticias';
import GradeCompleta from '../pages/GradeCompleta';
import GradeSemanal from '../pages/GradeSemanal';
import Cursados from '../pages/Cursados';
import NotifyTabs from './NotifyTabs';
import AreaFinanceira from '../pages/AreaFinanceira';
import CentralAtendimento from '../pages/CentralAtendimento';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="HomeItens" component={HomeItens} />
        <AppStack.Screen name="ComunicadosNoticias" component={ComunicadosNoticias} />
        <AppStack.Screen name="GradeCompleta" component={GradeCompleta} />
        <AppStack.Screen name="GradeSemanal" component={GradeSemanal} />
        <AppStack.Screen name="Cursados" component={Cursados} />
        <AppStack.Screen name="PWDAreaLogada" component={PWDAreaLogada} initialParams={{ returnUrl: 'https://arealogada.sis.puc-campinas.edu.br' }}/>
        <AppStack.Screen name="NotifyTabs" component={NotifyTabs} />
        <AppStack.Screen name="AreaFinanceira" component={AreaFinanceira} />
        <AppStack.Screen name="CentralAtendimento" component={CentralAtendimento} />
    </AppStack.Navigator>
);

export default AppRoutes; 