import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import styles from './styles';
 
interface TableDisciplinasProps {
  codigoDisciplina: string;
  nomeDisciplina: string;
  //crd: string;
  codCurso: string;
  turno: string;
  predioSala: string;
  aulasDadas: string;
}

const TableDisciplinas: React.FC<TableDisciplinasProps> = ({ codigoDisciplina, nomeDisciplina, codCurso, turno, predioSala, aulasDadas }) => {

  return (
    <View>
      <Table style={styles.table}>
        <Col data={ [codigoDisciplina, nomeDisciplina, codCurso, turno, predioSala, aulasDadas] } style={styles.title} heightArr={50} textStyle={styles.text}></Col>
      </Table>
    </View>
  )
}

export default TableDisciplinas;



