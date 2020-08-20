import React, {useState} from 'react';
import { View, Image, Text, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableDisciplinas from '../../components/TableDisciplinas';
import TableHorarios from '../../components/TableHorarios';
import backIcon from '../../assets/images/icons/arrow.png';
import backIconBlue from '../../assets/images/icons/arrow-blue.png';
import styles from './styles';


function GradeCompleta() {

    const [animaTop, setTop] = useState(new Animated.Value(150));

    Animated.timing(
        animaTop,
        {
            toValue: -90,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <View style={styles.container}>
            <PageHeader title="Grade Completa" backColor="#2CC272"></PageHeader>

           
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.head}>
                    <Text style={styles.tableHead}> Disciplinas </Text>
                    <Image source={backIcon} style={styles.arrowRotate} />
                </View>
                
            <TableDisciplinas titleHead={['Código', 'Disciplina', 'CRD', 'Curso', 'Turno', 'Prédio/ Sala', 'Aulas']} 
                values={['06484', 'Análise Instrumental', '4', '21151', '01', 'CENT. TEC. A109', '60']}
                values2={['06068', 'Físico-Química', '4', '21151', '01', 'CENT. TEC. A109', '40']}
                values3={['06484', 'Matemática Básica A', '4', '21151', '01', 'CENT. TEC. A109', '110']}
            />


            <Text>
                {'\n'}{'\n'}
            </Text>

            <View style={styles.head}>
                    <Text style={styles.tableHead2}> Horários </Text>
                    <Image source={backIconBlue} style={styles.arrowRotate} />
                </View>
                
            <TableHorarios titleHead={['Dia', 'Semestre', '19:20', '20:05', '21:00', '21:45', '22:30']} 
                values={['2ª Feira', 'Segundo', 'Química Orgânica', 'Laboratório B', 'Matemática Básica', 'Química Orgânica', 'Análise Instrumental']}
                values2={['3ª Feira', 'Segundo', 'Física B', 'Eletiva', 'Matemática Básica', 'Físico-Química', 'Química B']}
                values3={['4ª Feira', 'Segundo', 'Química Orgânica', 'Análise Instrumental', 'Matemática Básica', 'Física B', 'Química B']}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    PUC-CAMPINAS
                </Text>
            </View>

            </Animated.ScrollView>
        </View>
    );
}

export default GradeCompleta;
