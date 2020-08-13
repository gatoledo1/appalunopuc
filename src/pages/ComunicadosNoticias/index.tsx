import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import CardsComunicados from '../../components/CardsComunicados';


function ComunicadosNoticias() {

    function handleFiltersSubmit(){
        
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Notícias e Comunicados"></PageHeader>
            
            <ScrollView style={styles.comunicados}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <CardsComunicados />
                <CardsComunicados />
                <CardsComunicados />

            </ScrollView>
            
        </View>
    );
}

export default ComunicadosNoticias;