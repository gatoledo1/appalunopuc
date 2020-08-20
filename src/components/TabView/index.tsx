import * as  React  from  'react'
import { View, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar, ScrollPager } from 'react-native-tab-view';
import ItensGradeSemanal from '../../components/TabView/Dias/ItensGradeSemanal';
import { ScrollView } from 'react-native-gesture-handler';

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
  {
    frequencia: 100, materia: "Laboratório II", local:"Sala: P225 / Prédio: CENT. TECN", data: "08/05/2020 até 29/06/2020", atualizacao: "Frequência atualizada até 04/06/2020"
  },
  {
    frequencia: 95, materia: "Química Orgânica B", local:"Sala: P231 / Prédio: CENT. TECN", data: "06/05/2020 até 29/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
  },
];

const infoArr2 = [
  {
    frequencia: 100, materia: "Laboratório II", local:"Sala: P225 / Prédio: CENT. TECN", data: "08/05/2020 até 29/06/2020", atualizacao: "Frequência atualizada até 04/06/2020"
  },
  {
    frequencia: 95, materia: "Química Orgânica B", local:"Sala: P231 / Prédio: CENT. TECN", data: "06/05/2020 até 29/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
  },
  {
    frequencia: 60, materia: "Quimica B", local:"Sala: P28 / Prédio: CENT. TECN", data: "06/05/2020 até 30/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
  },
  {
    frequencia: 90, materia: "Análise Instrumental", local:"Sala: P232 / Prédio: CENT. TECN", data: "08/05/2020 até 28/06/2020", atualizacao: "Frequência atualizada até 05/06/2020"
  },
  
];


const PrimeiraRota = () => (

  <ScrollView>
  {
    infoArr.map(Info => (
      <ItensGradeSemanal frequencia={Info.frequencia} materia={Info.materia} local={Info.local}
      data={Info.data} atualizacao={Info.atualizacao}></ItensGradeSemanal>
    ))
  }
  </ScrollView>
    
);

const SegundaRota = () => (
<ScrollView>
  {
    infoArr2.map(Info => (
      <ItensGradeSemanal frequencia={Info.frequencia} materia={Info.materia} local={Info.local}
      data={Info.data} atualizacao={Info.atualizacao}></ItensGradeSemanal>
    ))
  }
  </ScrollView>
);

const TerceiraRota = () => (
<ScrollView>
  {
    infoArr.map(Info => (
      <ItensGradeSemanal frequencia={Info.frequencia} materia={Info.materia} local={Info.local}
      data={Info.data} atualizacao={Info.atualizacao}></ItensGradeSemanal>
    ))
  }
  </ScrollView>
);

const QuartaRota = () => (
<ScrollView>
  {
    infoArr2.map(Info => (
      <ItensGradeSemanal frequencia={Info.frequencia} materia={Info.materia} local={Info.local}
      data={Info.data} atualizacao={Info.atualizacao}></ItensGradeSemanal>
    ))
  }
  </ScrollView>
);

const QuintaRota = () => (
<ScrollView>
  {
    infoArr.map(Info => (
      <ItensGradeSemanal frequencia={Info.frequencia} materia={Info.materia} local={Info.local}
      data={Info.data} atualizacao={Info.atualizacao}></ItensGradeSemanal>
    ))
  }
  </ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={{ backgroundColor: 'white', height: 4}}
    textStyle={{color: 'red'}}
    style={{ backgroundColor: 'transparent', elevation: 0}}
    tabStyle={{width: 105, elevation: 0}}
  />
);

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
