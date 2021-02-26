import React, { useContext } from 'react';
import AuthContext from '../../Contexts/auth';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Codigos, CodText, TitleCard, TextCard, TextBold, TextProf, Ementa } from './styles';
 
interface TableDisciplinasProps {
  codigoDisciplina: string;
  nomeDisciplina: string;
  //crd: string;
  codCurso: string;
  ementa: string;
  turma: string;
  turno: string;
  campus: string;
  predio: string;
  sala: string;
  professor: string;
  aulasDadas: string;
  latitude: string;
  longitude: string;
}

const TableDisciplinas: React.FC<TableDisciplinasProps> = ({ codigoDisciplina, nomeDisciplina, codCurso, ementa, turma, turno, campus, predio, sala, professor, aulasDadas, latitude, longitude }) => {
  
  const { localizacaoSala } = useContext(AuthContext);

  return (
        <Card onPress={
          ()=>{ localizacaoSala(latitude, longitude); }
        }>
          <Codigos>
            <CodText>Código: { codigoDisciplina }   Curso: { codCurso } </CodText>
          </Codigos>
          <TitleCard>{ nomeDisciplina } </TitleCard>
          <Ementa style={{borderColor: 'rgba(200,200,200,0.4)', borderTopWidth: 1, borderBottomWidth: 1}}>
            <ScrollView showsVerticalScrollIndicator={true}>
              <TextCard style={{fontSize: 13}}>{ ementa }</TextCard>
            </ScrollView>
          </Ementa>
          <TextProf><TextBold>Professor: </TextBold>{ professor } </TextProf>
          <TextCard><TextBold>Turma: </TextBold>{ turma } </TextCard>
          <TextCard><TextBold>Turno: </TextBold>{ turno } </TextCard>
          <TextCard><TextBold>{ campus } </TextBold></TextCard>
          <TextCard><TextBold>Prédio: </TextBold>{ predio } </TextCard>
          <TextCard><TextBold>Sala: </TextBold>{ sala } </TextCard>
          <TextCard><TextBold>Aulas dadas: </TextBold>{ aulasDadas } </TextCard>
        </Card>
  )
}

export default TableDisciplinas;



