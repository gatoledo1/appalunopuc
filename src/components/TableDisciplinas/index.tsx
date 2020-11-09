import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
 
interface TableDisciplinasProps {
  codigoDisciplina: string;
  nomeDisciplina: string;
  //crd: string;
  codCurso: string;
  turma: string;
  turno: string;
  predio: string;
  sala: string;
  professor: string;
  aulasDadas: string;
}

const TableDisciplinas: React.FC<TableDisciplinasProps> = ({ codigoDisciplina, nomeDisciplina, codCurso, turma, turno, predio, sala, professor, aulasDadas }) => {

  return (
        <View style={styles.card}>
          <View style={styles.codigos}>
            <Text style={styles.codText}>Cod: { codigoDisciplina }   Curso: { codCurso } </Text>
          </View>
          <Text style={styles.titleCard}> { nomeDisciplina } </Text>
          <Text style={styles.textProf}>Professor: { professor } </Text>
          <Text style={styles.textCard}>Turma: { turma } </Text>
          <Text style={styles.textCard}>Turno: { turno } </Text>
          <Text style={styles.textCard}>Prédio: { predio } </Text>
          <Text style={styles.textCard}>Sala: { sala } </Text>
          <Text style={styles.textCard}>Aulas dadas: { aulasDadas } </Text>
        </View>
  )
}

export default TableDisciplinas;



