import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NotifyCurso from '../pages/Notificacoes/Curso';
import NotifyIndividual from '../pages/Notificacoes/Individual';


const { Navigator, Screen } = createBottomTabNavigator();

function NotifyTabs() {
    return (
         <Navigator tabBarOptions={{
            style: {
                height: 55,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontFamily: 'Poppins_400Regular',
                fontSize: 13,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d',
        }}>
            <Screen name="NotifyIndividual" component={NotifyIndividual} 
            options={{
                tabBarLabel: 'Suas notificações',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-easel" size={size} color={focused ? '#367DFF' : color} />
                    );
                }
            }}
            />
            <Screen name="NotifyCurso" component={NotifyCurso}
            options={{
                tabBarLabel: 'De seu Curso',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-heart" size={size} color={focused ? '#367DFF' : color} />
                    );
                }
            }} />
        </Navigator> 
    );
}

export default NotifyTabs;