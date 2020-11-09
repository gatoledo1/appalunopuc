import React from 'react';
import { Col, Rows } from 'react-native-table-component';
import styles from './styles';
 
interface TableHorariosProps {
  diaSemana: string;
  semestre?: string;
  materia1?: string;
  materia2?: string;
}

const TableHorarios: React.FC<TableHorariosProps> = ({ diaSemana, semestre, materia1, materia2 }) => {

  return (
        <Col data={ [diaSemana, '2', materia1, materia2] } 
        style={styles.title} heightArr={50} textStyle={styles.text}></Col>
  )
}

export default TableHorarios;



