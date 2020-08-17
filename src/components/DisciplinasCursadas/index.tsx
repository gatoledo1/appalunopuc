import React, {constructor, useState} from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


interface DisciplinasCursadasProps {
    titleCourse: string;
    notaCondicao: string;
    horas: string;
}

const DisciplinasCursadas: React.FC<DisciplinasCursadasProps> = ({ titleCourse, notaCondicao, horas }) => {

    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{ titleCourse }</Text>
            <Text style={styles.condicaoA}>{ notaCondicao }</Text>
            <Text style={styles.horas}>{ horas }</Text>   
        </View>
    );
}

export default DisciplinasCursadas;