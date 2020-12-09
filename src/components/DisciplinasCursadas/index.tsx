import React from 'react';
import { useColorScheme } from 'react-native-appearance';

import {Container, Ano, Condicao, Title, Footer, Horas} from './styles';


interface DisciplinasCursadasProps {
    codCurso: string;
    nome: string;
    media: string;
    decSitcli: string;
    cargaHoraria: string;
    ano: string;
}

const DisciplinasCursadas: React.FC<DisciplinasCursadasProps> = ({ codCurso, nome, media, decSitcli, cargaHoraria, ano }) => {

    const scheme = useColorScheme();
    
    return (
        <Container>
            
            <Ano>{ ano }</Ano>
            <Title>{ nome }</Title>
            <Condicao>{ [media, " - ", decSitcli] }</Condicao>
            <Horas style={{borderBottomWidth: 1, borderColor: scheme === 'dark' ? '#496391' : '#e7f0ff'}}>{ [codCurso, " - ", cargaHoraria ] }</Horas>  
        </Container>
    );
}

export default DisciplinasCursadas;