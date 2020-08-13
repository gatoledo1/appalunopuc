import React from 'react';
import { View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableDisciplinas from '../../components/TableDisciplinas';
import TableHorarios from '../../components/TableHorarios';
import backIcon from '../../assets/images/icons/arrow.png';
import backIconBlue from '../../assets/images/icons/arrow-blue.png';
import styles from './styles';



function GradeCompleta() {
    return (
        <View style={styles.container}>
            <PageHeader title="Grade Completa"></PageHeader>

           

            <ScrollView style={styles.content}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.head}>
                    <Text style={styles.tableHead}> Disciplinas </Text>
                    <Image source={backIcon} style={styles.arrowRotate} />
                </View>
                
            <TableDisciplinas />

            <Text>
                {'\n'}{'\n'}
            </Text>

            <View style={styles.head}>
                    <Text style={styles.tableHead2}> Horários </Text>
                    <Image source={backIconBlue} style={styles.arrowRotate} />
                </View>
                
            <TableHorarios />

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    PUC-CAMPINAS
                </Text>
            </View>

            </ScrollView>
        </View>
    );
}

export default GradeCompleta;
