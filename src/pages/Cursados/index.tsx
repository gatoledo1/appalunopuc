import React, {useState} from 'react';
import { View, Text, ScrollView, Animated, Easing } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import DisciplinasCursadas from '../../components/DisciplinasCursadas';

function Cursados() {

    const [animaTop, setTop] = useState(new Animated.Value(150));

    Animated.timing(
        animaTop,
        {
            toValue: -80,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <View style={styles.container}>
            <PageHeader title="Disciplinas Cursadas" backColor="#767676"></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
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
                    <DisciplinasCursadas titleCourse="00634 - Físico-Química" notaCondicao="4.0 Reprovado" horas="68 horas" />
                    <DisciplinasCursadas titleCourse="00634 - Laboratório B" notaCondicao="7.0 Aprovado" horas="105 horas" />
                </View>

                <View style={styles.card}>
                    <Text style={styles.ano}>2018</Text>
                    <DisciplinasCursadas titleCourse="00634 - Química Orgânica A" notaCondicao="4.5 Reprovado" horas="68 horas" />
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

            </Animated.ScrollView>
            
        </View>
    );
}

export default Cursados;


