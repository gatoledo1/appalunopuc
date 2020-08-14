import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Table, Col } from 'react-native-table-component';
import styles from './styles';
 

interface TableHorariosProps {
  titleHead: string[];
  values: string[];
  values2?: string[]; //não obrigatório
  values3?: string[]; //não obrigatório
}

const TableHorarios: React.FC<TableHorariosProps> = ({ titleHead, values, values2, values3 }) => {

  return (

    <View style={styles.container}>

        <View style={styles.table}>
          <Table>
          <Col data={ titleHead } style={styles.titleHead} heightArr={50} textStyle={styles.textHead}>  </Col>
          </Table>

          <ScrollView horizontal={true}>
        
            <View style={styles.table}>
              <Table>
              <Col data={ values } style={styles.title} heightArr={50} textStyle={styles.text}></Col>
                { /*<Row data={state.rowData} widthArr={state.widthArr} style={styles.row}/>*/}
              </Table>
            </View>
            <View style={styles.table}>
              <Table>
              <Col data={ values2 } style={styles.title} heightArr={50} textStyle={styles.text}></Col>
                { /*<Row data={state.rowData} widthArr={state.widthArr} style={styles.row}/>*/}
              </Table>
            </View>
            <View style={styles.table}>
              <Table>
              <Col data={ values3 } style={styles.title} heightArr={50} textStyle={styles.text}></Col>
                { /*<Row data={state.rowData} widthArr={state.widthArr} style={styles.row}/>*/}
              </Table>
            </View>
            

          </ScrollView>
        </View>

      
    </View>
  )
}

export default TableHorarios;



