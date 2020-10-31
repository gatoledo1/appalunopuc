import React, {useState, useEffect} from 'react';
import { View, Image, Text, Animated, Easing, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableDisciplinas from '../../components/TableDisciplinas';
import TableHorarios from '../../components/TableHorarios';
import backIcon from '../../assets/images/icons/arrow.png';
import backIconBlue from '../../assets/images/icons/arrow-blue.png';
import AsyncStorage from '@react-native-community/async-storage';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import styles from './styles';


function GradeCompleta() {

    const [listaDisciplinas, setListaDisciplinas] = useState([]);
    const [listaHorarios, setListaHorarios] = useState([]);

    let segunda = [];
    let terca = [];
    let quarta = [];
    let quinta = [];
    let sexta = [];

    useEffect(() => {

        objGradeCompleta();

    }, []);
    
    
    
    async function objGradeCompleta(){
        
        const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');
    
        if(stringGradeSemanal !== null){

        setListaDisciplinas(JSON.parse(stringGradeSemanal));

        
        let arrayGradeCompleta = []
    
        arrayGradeCompleta = JSON.parse(stringGradeSemanal)
        
        segunda = arrayGradeCompleta.filter((dia) => { return dia.diaSemana === 2 });
        terca = arrayGradeCompleta.filter((dia) => { return dia.diaSemana === 3 });
        quarta = arrayGradeCompleta.filter((dia) => { return dia.diaSemana === 4 });
        quinta = arrayGradeCompleta.filter((dia) => { return dia.diaSemana === 5 });
        sexta = arrayGradeCompleta.filter((dia) => { return dia.diaSemana === 6 });
        

        segunda = segunda.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        terca = terca.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        quarta = quarta.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        quinta = quinta.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));
        sexta = sexta.sort((a, b) => parseFloat(a.horario) - parseFloat(b.horario));


        setListaHorarios(segunda);
        
        }

    }

    function TableDisciplinasWrapper(){

        return(
            <Table style={styles.table}>
                {
                    listaDisciplinas.map((Info, index) => (
                        <TableDisciplinas key={index} codigoDisciplina={Info.codigoDisciplina} nomeDisciplina={Info.nomeDisciplina}
                        codCurso={Info.codCurso} turno={Info.turno} predioSala={`${Info.predio}/${Info.sala}`} aulasDadas={Info.aulasDadas}
                    />))
                }
            </Table>
        )
    }

    function TableHorariosWrapper(){

        return(
            <Table style={styles.table}>
                {
                    listaHorarios.map((Info, index) => (
                        <TableHorarios key={index} diaSemana={Info.diaSemana}
                        materia1={Info.nomeDisciplina} materia2={Info.nomeDisciplina} materia3={Info.nomeDisciplina}
                    />))
                }
            </Table>
        )
        
    }

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
                
                <View style={styles.containerTable}>
                    <View style={styles.table}>
                        <Table>
                            <Col data={ ['Código', 'Disciplina', 'CRD', 'Curso', 'Turno', 'Prédio/ Sala', 'Aulas'] } style={styles.titleHead} heightArr={50} textStyle={styles.textHead}>  </Col>
                        </Table>

                        <ScrollView horizontal={true}>

                            <TableDisciplinasWrapper />
                
                        </ScrollView>
                    </View>
                </View>

            <Text>
                {'\n'}{'\n'}
            </Text>

            <View style={styles.head}>
                <Text style={styles.tableHead2}> Horários </Text>
                <Image source={backIconBlue} style={styles.arrowRotate} />
            </View>

                <View style={styles.containerTable}>
                    <View style={styles.table}>
                        <Table>
                            <Col data={ ['Dia', 'Semestre', '19:20', '20:05', '21:00', '21:45', '22:30'] } style={styles.titleHead} heightArr={50} textStyle={styles.textHead}>  </Col>
                        </Table>

                        <ScrollView horizontal={true}>

                            <TableHorariosWrapper />
                
                        </ScrollView>
                    </View>
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

export default GradeCompleta;
