
export async function Envia(token:string){  

    const response = await fetch('http://mobile-pucapi-v3.docker1.puc-campinas.edu.br/alunos/autenticado', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cookie': '',
            'Set-Cookie': '',
            'Cache-Control':'no-cache',
            'Cache': 'no-cache',
            "Authorization": `${token}`
        }
    });
    ///console.log(response.headers);
    return response;
    //const responseJson = await response.json();
    //const firstName = responseJson.nome.split(' ')[0];
    //console.log(responseJson)

}
