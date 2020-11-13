import React, { useContext } from 'react';
import AuthContext from '../../Contexts/auth';
import { Card, Codigos, CodText, TitleCard, TextCard, TextProf } from './styles';
 
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
  latitude: string;
  longitude: string;
}

const TableDisciplinas: React.FC<TableDisciplinasProps> = ({ codigoDisciplina, nomeDisciplina, codCurso, turma, turno, predio, sala, professor, aulasDadas, latitude, longitude }) => {
  
  const { localizacaoSala } = useContext(AuthContext);

  return (
        <Card onPress={
          ()=>{ localizacaoSala(latitude, longitude); }
        }>
          <Codigos>
            <CodText>Cod: { codigoDisciplina }   Curso: { codCurso } </CodText>
          </Codigos>
          <TitleCard> { nomeDisciplina } </TitleCard>
          <TextProf>Professor: { professor } </TextProf>
          <TextCard>Turma: { turma } </TextCard>
          <TextCard>Turno: { turno } </TextCard>
          <TextCard>Prédio: { predio } </TextCard>
          <TextCard>Sala: { sala } </TextCard>
          <TextCard>Aulas dadas: { aulasDadas } </TextCard>
        </Card>
  )
}

export default TableDisciplinas;



