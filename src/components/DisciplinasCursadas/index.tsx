import React, {constructor, useState} from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


interface DisciplinasCursadasProps {
    codCurso: string;
    nome: string;
    media: string;
    decSitcli: string;
    cargaHoraria: string;
    ano: string;
}

const DisciplinasCursadas: React.FC<DisciplinasCursadasProps> = ({ codCurso, nome, media, decSitcli, cargaHoraria, ano }) => {

    
    return (
        <View style={styles.container}>
            
            <Text style={styles.ano}>{ ano }</Text>
            <Text style={styles.title}>{ nome }</Text>
            <Text style={styles.condicao}>{ [media, " - ", decSitcli] }</Text>
            <Text style={styles.horas}>{ [codCurso, " - ", cargaHoraria ] }</Text>  
        </View>
    );
}

export default DisciplinasCursadas;