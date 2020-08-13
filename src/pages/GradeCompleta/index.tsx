import React from 'react';
import { View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableView from '../../components/Tables';
import backIcon from '../../assets/images/icons/arrow.png';
import styles from './styles';



function GradeCompleta() {
    return (
        <View style={styles.container}>
            <PageHeader title="Grade Completa"></PageHeader>

           

            <ScrollView style={styles.content}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.head}>
                    <Text style={styles.tableHead}> Disciplinas </Text>
                    <Image source={backIcon} style={styles.arrowRotate} />
                </View>
                
            <TableView />

            </ScrollView>
        </View>
    );
}

export default GradeCompleta;
