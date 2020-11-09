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

    useEffect(() => {

        objGradeCompleta();

    }, []);

    
    async function objGradeCompleta(){

        let arrayGradeCompleta = []
        
        const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');

            arrayGradeCompleta = await JSON.parse(stringGradeSemanal)

            setListaDisciplinas(arrayGradeCompleta);

        
            const ordenado = arrayGradeCompleta.sort((c, d) => parseFloat(c.diaSemana) - parseFloat(d.diaSemana));

            setListaHorarios(ordenado);

    }

    function TableDisciplinasWrapper(){

        return(
            <Table style={styles.table}>
                {
                    listaDisciplinas.map((Info, index) => (
                        <TableDisciplinas key={index} codigoDisciplina={Info.codigoDisciplina} nomeDisciplina={Info.nomeDisciplina}
                        codCurso={Info.codCurso} turno={Info.turno} predio={Info.predio} sala={Info.sala} aulasDadas={Info.aulasDadas}
                        professor={Info.professor} turma={Info.turma}
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
                        materia1={Info.nomeDisciplina} materia2={Info.nomeDisciplina}
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
            <PageHeader title="Grade de Disciplinas" backColor="#2CC272"></PageHeader>

           
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
                  

                        <ScrollView horizontal={true}>

                            <TableDisciplinasWrapper />
                
                        </ScrollView>
               
                </View>

            <Text>
                {'\n'}{'\n'}
            </Text>

          {/*  <View style={styles.head}>
                <Text style={styles.tableHead2}> Horários </Text>
                <Image source={backIconBlue} style={styles.arrowRotate} />
            </View>

                <View style={styles.containerTable}>
                    <View style={styles.table}>
                        <Table>
                            <Col data={ ['Dia', 'Semestre', '19:20 às 20:50', '21:05 às 22:35'] } style={styles.titleHead} heightArr={50} textStyle={styles.textHead}>  </Col>
                        </Table>

                        <ScrollView horizontal={true}>

                            <TableHorariosWrapper />
                
                        </ScrollView>
                    </View>
                </View> */}

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
