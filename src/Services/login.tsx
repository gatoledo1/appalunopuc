import base64 from 'react-native-base64';

export async function Envia(token){  

    const response = await fetch('http://mobile-pucapi-v3.docker1.puc-campinas.edu.br/alunos/autenticado', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `${token}`
        }
    });
    return response;
    //const responseJson = await response.json();
    //const firstName = responseJson.nome.split(' ')[0];
    //console.log(responseJson)

}
