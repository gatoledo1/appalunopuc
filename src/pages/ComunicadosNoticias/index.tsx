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
                <CardsComunicados title="Gabriel Toledo" subject="O encantador de Orangotangos" 
                    bodyText="A técnica de encantamentos dos orangotangos foi desenvolvida pelo mestre Kunig Jong da Republica do Congo em 1963.
                    Gabriel vem aplicando as técnicas com os primatas locais e obtendo resultados impressionantes." 
                />
                <CardsComunicados title="Gabriel Toledo" subject="O encantador de Orangotangos" 
                    bodyText="A técnica de encantamentos dos orangotangos foi desenvolvida pelo mestre Kunig Jong da Republica do Congo em 1963.
                    Gabriel vem aplicando as técnicas com os primatas locais e obtendo resultados impressionantes." 
                />
                <CardsComunicados title="Gabriel Toledo" subject="O encantador de Orangotangos" 
                    bodyText="A técnica de encantamentos dos orangotangos foi desenvolvida pelo mestre Kunig Jong da Republica do Congo em 1963.
                    Gabriel vem aplicando as técnicas com os primatas locais e obtendo resultados impressionantes." 
                />

            </ScrollView>
            
        </View>
    );
}

export default ComunicadosNoticias;