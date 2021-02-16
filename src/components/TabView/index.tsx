import React from  'react';
import { View, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar, ScrollPager } from 'react-native-tab-view';
import ItensGradeSemanal from '../../components/TabView/Dias/ItensGradeSemanal';
import { ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../Contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';

/*===============================================================================================================================
| Este componente utiliza 'react-native-tab-view', que não tem compatibilidade com React Native Hooks e limitação com Typescript |
| Todas as interações realizadas foram feitas para contornar e viabilizar o componente.                                          |
================================================================================================================================*/

interface ArrayGrade {
  [index: number]: string;
  frequencia: number;
  nomeDisciplina: string;
  horario: string;
  sala: string;
  predio: string;
  dataRodizio: string;
  dataUltimoLancFreq: string;
}

// iniciando o array e setando uma tipagem nele 
let itensGradeSegunda = new Array<ArrayGrade>();
let itensGradeTerca = new Array<ArrayGrade>();
let itensGradeQuarta = new Array<ArrayGrade>();
let itensGradeQuinta = new Array<ArrayGrade>();
let itensGradeSexta = new Array<ArrayGrade>();
let itensGradeSabado = new Array<ArrayGrade>();
let itensGradeDomingo = new Array<ArrayGrade>();


  export async function objGradeSemanal(){
    
    const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');

    if(stringGradeSemanal !== null){

    /*=====================================================================================================================
    | O AsyncStorage grava apenas Strings, objetos não. Lá no contexto de autenticação o objeto foi convertido para String |
    | Então após pegar os dados da Grade Semanal do AsyncStorage, ele deve ser reescrito como objeto JSON.                 |
    ======================================================================================================================*/

      const arrayGradeSemanal = JSON.parse(stringGradeSemanal);
      
      itensGradeSegunda = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 2; });
      itensGradeTerca   = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 3; });
      itensGradeQuarta  = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 4; });
      itensGradeQuinta  = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 5; });
      itensGradeSexta   = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 6; });
      itensGradeSabado  = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 7; });
      itensGradeDomingo = arrayGradeSemanal.filter((dia) => { return dia.diaSemana == 1; }); 
    }

    // Como a função é executada antes do usuário logar, ela precisa ser chamada outras vezes até receber valores
    if(stringGradeSemanal === null){
      setTimeout(objGradeSemanal, 500) 
    }

  }


function PrimeiraRota() {
  if (itensGradeSegunda != ''){
    return (
      <ScrollView>
        {
          itensGradeSegunda.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  }
  
}

function SegundaRota() {
  if (itensGradeTerca != ''){
    return (
      <ScrollView>
        {
          itensGradeTerca.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  } 
}

function TerceiraRota() {
  if (itensGradeQuarta != ''){
    return (
      <ScrollView>
        {
          itensGradeQuarta.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  }
}

function QuartaRota() {
  if (itensGradeQuinta != ''){
    return (
      <ScrollView>
        {
          itensGradeQuinta.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  } 
}

function QuintaRota() {
  if (itensGradeSexta != ''){
    return (
      <ScrollView>
        {
          itensGradeSexta.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  }
}

function SextaRota() {
  if (itensGradeSabado != ''){
    return (
      <ScrollView>
        {
          itensGradeSabado.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  }  
}

function SetimaRota() {
  if (itensGradeDomingo != ''){
    return (
      <ScrollView>
        {
          itensGradeDomingo.map((Info, index) => (
            <ItensGradeSemanal key={index} frequencia={Info.frequencia} materia={Info.nomeDisciplina} horario={Info.horario} local={`Sala: ${Info.sala} / Prédio: ${Info.predio}`}
            data={Info.dataRodizio} atualizacao={`Frequência atualizada: ${Info.dataUltimoLancFreq}`}></ItensGradeSemanal>
          ))
        }
      </ScrollView>
    );
  }else{
    return(
      <View style={{paddingTop: 100, alignItems: 'center'}}>
          <Text style={{color: "#999"}}> Não há informações para exibir </Text>
      </View>
    );
  }  
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
      { key: 'sabado', title: 'Sábado' },
      { key: 'domingo', title: 'Domingo' },
    ]);

    const renderScene = SceneMap({
      segunda: PrimeiraRota,
      terca: SegundaRota,
      quarta: TerceiraRota,
      quinta: QuartaRota,
      sexta: QuintaRota,
      sabado: SextaRota,
      domingo: SetimaRota,
    });

    return (
        <TabView style={{marginTop: -100}}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
    );

}
