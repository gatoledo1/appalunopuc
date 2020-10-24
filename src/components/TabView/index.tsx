import React from  'react';
import { View, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar, ScrollPager } from 'react-native-tab-view';
import ItensGradeSemanal from '../../components/TabView/Dias/ItensGradeSemanal';
import { ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../Contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

interface ArrayGrade {
  [index: number]: string;
  frequencia: number;
  nomeDisciplina: string;
  sala: string;
  predio: string;
  dataRodizio: string;
  dataUltimoLancFreq: string;
}

let itensGradeSegunda = new Array<ArrayGrade>();
let itensGradeTerca = new Array<ArrayGrade>();
let itensGradeQuarta = new Array<ArrayGrade>();
let itensGradeQuinta = new Array<ArrayGrade>();
let itensGradeSexta = new Array<ArrayGrade>();

objGradeSemanal();


  async function objGradeSemanal(){
    
    const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');

    if(stringGradeSemanal !== null){

      const arrayGradeSemanal = JSON.parse(stringGradeSemanal);
      
      itensGradeSegunda = arrayGradeSemanal.filter((dia) => { return dia.diaSemana === 2; });
      itensGradeTerca = arrayGradeSemanal.filter((dia) => { return dia.diaSemana === 3; });
      itensGradeQuarta = arrayGradeSemanal.filter((dia) => { return dia.diaSemana === 4; });
      itensGradeQuinta = arrayGradeSemanal.filter((dia) => { return dia.diaSemana === 5; });
      itensGradeSexta = arrayGradeSemanal.filter((dia) => { return dia.diaSemana === 6; });    
    }

    if(stringGradeSemanal === null){
      setTimeout(objGradeSemanal, 3000) 
    }
  }


function PrimeiraRota() {
    return (
      <ScrollView>
        {itensGradeSegunda.map((Info, index) => (
          <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
        ))}
      </ScrollView>
    );  
}

function SegundaRota() {
  return (
    <ScrollView>
      {itensGradeTerca.map((Info, index) => (
        <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
          data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
      ))}
    </ScrollView>
  );  
}

function TerceiraRota() {
  return (
    <ScrollView>
      {itensGradeQuarta.map((Info, index) => (
        <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
          data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
      ))}
    </ScrollView>
  );  
}

function QuartaRota() {
  return (
    <ScrollView>
      {itensGradeQuinta.map((Info, index) => (
        <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
          data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
      ))}
    </ScrollView>
  );  
}

function QuintaRota() {
  return (
    <ScrollView>
      {itensGradeSexta.map((Info, index) => (
        <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
          data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
      ))}
    </ScrollView>
  );  
}

const initialLayout = { width: Dimensions.get('window').width };

function renderTabBar(props) {
  return (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: 'white', height: 4 }}
      textStyle={{ color: 'red' }}
      style={{ backgroundColor: 'transparent', elevation: 0 }}
      tabStyle={{ width: 105, elevation: 0 }} />
  );
}

export default function TabViewScroll() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'segunda', title: '2ª Feira' },
      { key: 'terca', title: '3ª Feira' },
      { key: 'quarta', title: '4ª Feira' },
      { key: 'quinta', title: '5ª Feira' },
      { key: 'sexta', title: '6ª Feira' },
    ]);

    const renderScene = SceneMap({
      segunda: PrimeiraRota,
      terca: SegundaRota,
      quarta: TerceiraRota,
      quinta: QuartaRota,
      sexta: QuintaRota,
    });

    return (
        <TabView style={styles.content}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
    );

}
