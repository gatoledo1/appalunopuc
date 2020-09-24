import React, {useState} from 'react';
import { View, Image, Text, Animated, Easing} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableFinanceira from '../../components/TableFinanceira';
import TableHorarios from '../../components/TableHorarios';
import backIcon from '../../assets/images/icons/arrow.png';
import backIconBlue from '../../assets/images/icons/arrow-blue.png';
import styles from './styles';


function AreaFinanceira() {

    const [animaTop, setTop] = useState(new Animated.Value(150));

    Animated.timing(
        animaTop,
        {
            toValue: -90,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <View style={styles.container}>
            <PageHeader title="Área Financeira" backColor="#6823e1"></PageHeader>

           
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.head}>
                    <Text style={styles.tableHead}> Disciplinas </Text>
                    <Image source={backIcon} style={styles.arrowRotate} />
                </View>
                
            <TableFinanceira titleHead={['Serviço', 'Parcela', 'Dt. Venc', 'Vl. Parc', 'Vl. Desc', 'Vl. Multa', 'Vl. Encargo', 'Dt. Baixa', 'Vl Débito']} 
                values={['Parcela Anuidade', '01', '08/01/2020', '2.117,00', '42,34', '0,00', '0,00', '20/12/2019', '2.074,66']}
                values2={['Parcela Anuidade', '02', '07/02/2020', '2.117,00', '0,00', '0,00', '0,00', '07/02/2020', '2.117,00']}
                values3={['Parcela Anuidade', '03', '06/03/2020', '2.117,00', '0,00', '0,00', '0,00', '04/03/2020', '2.117,00']}
            />


            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    PUC-CAMPINAS
                </Text>
            </View>

            </Animated.ScrollView>
        </View>
    );
}

export default AreaFinanceira;
