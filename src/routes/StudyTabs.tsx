import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComunicadosNoticias from '../pages/ComunicadosNoticias';
import Favorites from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <View></View>
        /* <Navigator tabBarOptions={{
            style: {
                height: 64,
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
            <Screen name="ComunicadosNoticias" component={ComunicadosNoticias} 
            options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                    );
                }
            }}
            />
            <Screen name="Favorites" component={Favorites}
            options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                    );
                }
            }} />
        </Navigator> */
    );
}

export default StudyTabs;