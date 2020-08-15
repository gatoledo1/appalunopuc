import React from 'react';
import { View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ItensGradeSemanal from '../../components/TabView/Dias/ItensGradeSemanal';

import styles from './styles';

const FirstRoute = () => (
  <ItensGradeSemanal frequencia="75%" materia="Quimica B"></ItensGradeSemanal>
);

const SecondRoute = () => (
  <ItensGradeSemanal frequencia="100%" materia="Análise Instrumental"></ItensGradeSemanal>
);

const initialLayout = { width: Dimensions.get('window').width };


const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={{ backgroundColor: 'white' }}
    style={{ backgroundColor: '#367DFF', marginTop: 0 }}
    tabStyle={{width: 100}}
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
    segunda: FirstRoute,
    terca: SecondRoute,
    quarta: FirstRoute,
    quinta: SecondRoute,
    sexta: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}
