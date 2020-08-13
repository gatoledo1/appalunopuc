import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import styles from './styles';
 

function TableHorarios(){

  return (

    <View style={styles.container}>

        <View style={styles.table}>
          <Table>
          <Col data={['Horário', 'Semestre', '2ª Feira', '3ª Feira', '4ª Feira', '5ª Feira', '6ª Feira']} style={styles.titleHead} heightArr={50} textStyle={styles.textHead}></Col>
          </Table>

          <ScrollView horizontal={true}>
        
            <View style={styles.table}>
              <Table>
              <Col data={['06484', 'Análise Instrumental', '4', '21151', '01', 'CENT. TEC. A109', '60']} style={styles.title} heightArr={50} textStyle={styles.text}></Col>
                { /*<Row data={state.rowData} widthArr={state.widthArr} style={styles.row}/>*/}
              </Table>
            </View>
            <View style={styles.table}>
              <Table>
              <Col data={['06484', 'Físico-Química', '4', '21151', '01', 'CENT. TEC. A109', '60']} style={styles.title} heightArr={50} textStyle={styles.text}></Col>
                { /*<Row data={state.rowData} widthArr={state.widthArr} style={styles.row}/>*/}
              </Table>
            </View>
            <View style={styles.table}>
              <Table>
              <Col data={['06484', 'Físico-Química', '4', '21151', '01', 'CENT. TEC. A109', '60']} style={styles.title} heightArr={50} textStyle={styles.text}></Col>
                { /*<Row data={state.rowData} widthArr={state.widthArr} style={styles.row}/>*/}
              </Table>
            </View>
            

          </ScrollView>
        </View>

      
    </View>
  )
}

export default TableHorarios;



