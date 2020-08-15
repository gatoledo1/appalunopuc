import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';

interface GradeSegundaProps {
    frequencia: number;
    materia: string;
    local: string;
    data: string;
    atualizacao: string;

}

const ItensGradeSemanal: React.FC<GradeSegundaProps> = ({ frequencia, materia, local, data, atualizacao }) => {
    
    let freqColor = '#367DFF';

    return(
        <View style={styles.container}>
                
                <View style={styles.card}>
                    <View style={styles.grid}>
                        <ProgressCircle percent={frequencia} radius={40} borderWidth={8} color={freqColor} 
                            shadowColor="#e5efff" bgColor="#fff">
                            <Text style={{ fontSize: 18 }}>{ frequencia }%</Text>
                        </ProgressCircle>

                        <View style={styles.content}>
                            <Text style={styles.title}> { materia } </Text>
                            <Text style={styles.text}>
                            { local } {'\n'}
                            { data } {'\n'}{'\n'}
                            <Text style={{ fontSize: 10 }}> { atualizacao } </Text>
                            </Text>
                        </View>
                    </View>
                
                </View>

        </View>
    );
}

export default ItensGradeSemanal;

