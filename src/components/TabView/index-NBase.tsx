import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import ItensGradeSemanal from '../../components/TabView/Dias/ItensGradeSemanal';

import styles from './styles';


const infoArr = [
    {
      frequencia: 60, materia: "Quimica B", local:"Sala: P28 / Prédio: CENT. TECN", data: "06/05/2020 até 30/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
    },
    {
      frequencia: 90, materia: "Análise Instrumental", local:"Sala: P232 / Prédio: CENT. TECN", data: "08/05/2020 até 28/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
    },
    {
      frequencia: 45, materia: "Bioquímica II", local:"Sala: P230 / Prédio: CENT. TECN", data: "08/05/2020 até 28/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
    },
    {
      frequencia: 75, materia: "Físico-Química", local:"Sala: P231 / Prédio: CENT. TECN", data: "09/05/2020 até 29/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
    },
  ];


  let ListArr = [];

  const PrimeiraRota = () => (
      ListArr = infoArr.map(Info => (
      <ItensGradeSemanal frequencia={Info.frequencia} materia={Info.materia} local={Info.local}
      data={Info.data} atualizacao={Info.atualizacao}></ItensGradeSemanal>
      ))
  );  
  

export default class TabViewScroll extends Component {
  render() {
    return (
      <Container style={{marginTop: -70}}>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="2ª Feira">
            <ScrollView>
                <ItensGradeSemanal frequencia={85} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
                <ItensGradeSemanal frequencia={58} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
                <ItensGradeSemanal frequencia={95} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
                <ItensGradeSemanal frequencia={70} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
            </ScrollView>
          </Tab>
          <Tab heading="3ª Feira">
          <ScrollView>
                <ItensGradeSemanal frequencia={85} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
                <ItensGradeSemanal frequencia={58} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
                <ItensGradeSemanal frequencia={95} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
                <ItensGradeSemanal frequencia={70} materia="Análise Instrumental" local="Sala: P28 / Prédio: CENT. TECN"
                data="06/05/2020 até 30/06/2020" atualizacao="Frequência atualizada até 05/06/2020"></ItensGradeSemanal>
            </ScrollView>
          </Tab>
          <Tab heading="4ª Feira">
            
          </Tab>
          <Tab heading="5ª Feira">
            
          </Tab>
          <Tab heading="6ª Feira">
            
          </Tab>
        </Tabs>
      </Container>
    );
  }
}