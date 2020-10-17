import React, { useContext } from 'react';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-community/async-storage';

export async function Envia(){

    const ra = await AsyncStorage.getItem('ra');
    const pwd = await AsyncStorage.getItem('senha');

    const response = await fetch('http://mobile-pucapi-v3.docker1.puc-campinas.edu.br/alunos/autenticado', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Basic ${base64.encode(`${ra}:${pwd}`)}`
        }
    });
    return response;
    //const responseJson = await response.json();
    //const firstName = responseJson.nome.split(' ')[0];
    //console.log(responseJson)

}
