import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import DisciplinasCursadas from '../../components/DisciplinasCursadas';

function Cursados() {
    return (
        <View style={styles.container}>
            <PageHeader title="Disciplinas Cursadas"></PageHeader>
            
            <ScrollView style={styles.content}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.card}>
                    <Text style={styles.ano}>2019</Text>
                    <DisciplinasCursadas titleCourse="00634 - Química Orgânica B" notaCondicao="7.2 Aprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="06541 - Análise Instrumental II" notaCondicao="6.5 Aprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="00415 - Matemática Básica B" notaCondicao="8.5 Aprovado" horas="105 horas" />
                    <DisciplinasCursadas titleCourse="00634 - Físico-Química" notaCondicao="6.0 Aprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="00634 - Laboratório B" notaCondicao="7.0 Aprovado" horas="105 horas" />
                </View>

                <View style={styles.card}>
                    <Text style={styles.ano}>2018</Text>
                    <DisciplinasCursadas titleCourse="00634 - Química Orgânica A" notaCondicao="6.0 Aprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="06541 - Análise Instrumental I" notaCondicao="7.5 Aprovado" horas="105 horas" />
                    <DisciplinasCursadas titleCourse="00415 - Matemática Básica A" notaCondicao="8.5 Aprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="00634 - Física Básica" notaCondicao="6.75 Aprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="00634 - Laboratório A" notaCondicao="7.0 Aprovado" horas="105 horas" />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        PUC-CAMPINAS
                    </Text>
                </View>

            </ScrollView>
            
        </View>
    );
}

export default Cursados;


