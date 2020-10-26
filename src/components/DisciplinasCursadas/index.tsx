import React, {constructor, useState} from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


interface DisciplinasCursadasProps {
    codCurso: string;
    nome: string;
    media: string;
    decSitcli: string;
    cargaHoraria: string;
}

const DisciplinasCursadas: React.FC<DisciplinasCursadasProps> = ({ codCurso, nome, media, decSitcli, cargaHoraria }) => {

    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{ [codCurso," - ", nome] }</Text>
            <Text style={styles.condicao}>{ [media, " - ", decSitcli] }</Text>
            <Text style={styles.horas}>{ cargaHoraria }</Text>  
        </View>
    );
}

export default DisciplinasCursadas;