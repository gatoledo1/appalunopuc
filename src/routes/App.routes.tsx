import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeItens from '../pages/HomeItens';
import PWDAreaLogada from '../pages/AreaLogada';
import ComunicadosNoticias from '../pages/ComunicadosNoticias';
import GradeCompleta from '../pages/GradeCompleta';
import GradeSemanal from '../pages/GradeSemanal';
import Cursados from '../pages/Cursados';
import Notify from '../pages/Notificacoes/Individual';
//@ts-ignore
import { Basketball } from '../../react-native-basketball';
import AreaFinanceira from '../pages/AreaFinanceira';
import CentralAtendimento from '../pages/CentralAtendimento';
import LocaisPUC from '../pages/LocaisPUC';
import Eventos from '../pages/Eventos';

const AppStack = createStackNavigator();

//Na tela PWDAreaLogada, a variavel returnUrl é obrigatória, então setar um "initialParams" é necessário

const AppRoutes: React.FC = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <AppStack.Screen name="HomeItens" component={HomeItens} />
        <AppStack.Screen name="ComunicadosNoticias" component={ComunicadosNoticias} />
        <AppStack.Screen name="GradeCompleta" component={GradeCompleta} />
        <AppStack.Screen name="GradeSemanal" component={GradeSemanal} />
        <AppStack.Screen name="Basketball" component={Basketball} />
        <AppStack.Screen name="Cursados" component={Cursados} />
        <AppStack.Screen name="PWDAreaLogada" component={PWDAreaLogada} initialParams={{ returnUrl: 'https://arealogada.sis.puc-campinas.edu.br' }}/>
        <AppStack.Screen name="Notify" component={Notify} />
        {/*<AppStack.Screen name="AreaFinanceira" component={AreaFinanceira} /> */}
        <AppStack.Screen name="CentralAtendimento" component={CentralAtendimento} />
        <AppStack.Screen name="LocaisPUC" component={LocaisPUC} />
        <AppStack.Screen name="Eventos" component={Eventos} />
    </AppStack.Navigator>
);

export default AppRoutes; 