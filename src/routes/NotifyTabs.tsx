import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NotifyCurso from '../pages/Notificacoes/Curso';
import NotifyIndividual from '../pages/Notificacoes/Individual';
import { useColorScheme } from 'react-native-appearance';


const { Navigator, Screen } = createBottomTabNavigator();

function NotifyTabs() {
    const scheme = useColorScheme();

    return (
         <Navigator tabBarOptions={{
            style: {
                position: 'absolute',
                bottom: 10,
                marginHorizontal: 30,
                borderRadius: 25,
                backgroundColor: scheme === 'dark' ? '#445166' : '#e0e4f0',
            },
            tabStyle: {
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,

            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontFamily: 'Poppins_400Regular',
                fontSize: 11,
                marginLeft: 6,
            },
            activeBackgroundColor: scheme === 'dark' ? '#232D3E' : '#ebf1ff',
            inactiveTintColor: scheme === 'dark' ? '#bbb' : '#999',
            activeTintColor: scheme === 'dark' ? '#fff' : '#32264d',
        }}>
            <Screen name="NotifyIndividual" component={NotifyIndividual} 
            options={{
                tabBarLabel: 'Suas notificações',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-notifications" size={size} color={focused ? '#367DFF' : color} />
                    );
                }
            }}
            />
            {/* <Screen name="NotifyCurso" component={NotifyCurso}
            options={{
                tabBarLabel: 'De seu Curso',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-school" size={size} color={focused ? '#367DFF' : color} />
                    );
                }
            }} /> */}
        </Navigator> 
    );
}

export default NotifyTabs;