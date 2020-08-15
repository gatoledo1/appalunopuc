import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

interface GradeSegundaProps {
    frequencia: string;
    materia: string;

}

const ItensGradeSemanal: React.FC<GradeSegundaProps> = ({ frequencia, materia }) => {
    return(
        <View>
            <ScrollView style={styles.content}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                }}
            >

            <Text>
                { frequencia }
            </Text>
            <Text>
                { materia }
            </Text>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    PUC-CAMPINAS
                </Text>
            </View>

            </ScrollView>

        </View>
    );
}

export default ItensGradeSemanal;

