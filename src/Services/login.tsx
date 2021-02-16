
export async function Envia(token:string){  

    const response = await fetch('https://gateway-publico.pucapi.puc-campinas.edu.br/mobile/v4/alunos/autenticado', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
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
