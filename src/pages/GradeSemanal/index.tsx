import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Image, Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TabViewScroll from '../../components/TabView';


import styles from './styles';

  
function GradeSemanal() {
    

    return (
        
        <View style={styles.container}>
            <PageHeader title="Grade Semanal"></PageHeader>

            <TabViewScroll />

            
        </View>
    );
}

export default GradeSemanal;
