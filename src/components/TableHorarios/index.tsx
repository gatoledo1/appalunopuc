import React from 'react';
import { Col } from 'react-native-table-component';
import styles from './styles';
 
interface TableHorariosProps {
  diaSemana: number;
  semestre?: string;
  materia1?: string;
  materia2?: string;
  materia3?: string;
  materia4?: string;
  materia5?: string;
  materia6?: string;
}

const TableHorarios: React.FC<TableHorariosProps> = ({ diaSemana, semestre, materia1, materia2, materia3, materia4, materia5, materia6 }) => {

  return (
        <Col data={ [diaSemana, '2', materia1, materia2, materia3, materia4, materia5, materia6] } style={styles.title} heightArr={50} textStyle={styles.text}></Col>
  )
}

export default TableHorarios;



