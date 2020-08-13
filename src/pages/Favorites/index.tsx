import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import PageHeader from '../../components/PageHeader';
import CardsComunicados from '../../components/CardsComunicados';

function Favorites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Favoritos" />

            <ScrollView style={styles.teacherList}
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

export default Favorites;