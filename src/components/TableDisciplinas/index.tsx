import React from 'react';
import { Col } from 'react-native-table-component';
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
        <Col data={ [codigoDisciplina, nomeDisciplina, '4', codCurso, turno, predioSala, aulasDadas] } style={styles.title} heightArr={50} textStyle={styles.text}></Col>
  )
}

export default TableDisciplinas;



