import React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Image, Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

  
function GradeSemanal() {
    

    return (
        
        <View style={styles.container}>
            <PageHeader title="Grade Semanal"></PageHeader>

        

            <ScrollView style={styles.content}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                }}
            >


            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    PUC-CAMPINAS
                </Text>
            </View>

            </ScrollView>
        </View>
    );
}

export default GradeSemanal;
