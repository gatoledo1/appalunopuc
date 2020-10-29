import React, {useContext, useState, useEffect} from 'react';
import { View, Text, Animated, Easing, Linking } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import { Feather } from '@expo/vector-icons'; 
import styles from './styles';
import AuthContext from '../../Contexts/auth';

function CentralAtendimento({ navigation }) {
    const [animaTop, setTop] = useState(new Animated.Value(150));
    const {authToken, authTokenAreaLogada, tokenAreaLogada} = useContext(AuthContext);

    useEffect(() => {

        tokenAreaLogada(authToken);

    }, []);

    Animated.timing(
        animaTop,
        {
            toValue: -60,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    function hundleNavigateAreaLogada(link:string) {
        navigation.navigate('PWDAreaLogada', {
            returnUrl: link
        });
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Central de Atendimento ao Aluno" backColor="#367DFF"></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <RectButton style={styles.cardItem} onPress={() => { hundleNavigateAreaLogada('https://arealogada.sis.puc-campinas.edu.br') }}>
                    <View>
                    <View style={styles.icon}>
                        <Feather name="package" size={24} color="#2CC272" />
                    </View>
                    <Text style={styles.titleItem}>Histórico de atendimento</Text>
                    <Text style={styles.textItem}>Navegue pelas informações ou realize buscas</Text>
                    </View>
                </RectButton>

                <RectButton style={styles.cardItem} onPress={() => {
                    hundleNavigateAreaLogada('https://wl.sis.puc-campinas.edu.br/sistemas/puc/academico/CAA/Modulos/RetificacaoNotaFrequencia/SolicitarAlteracaoNota.aspx?TipoSolicitacao=N')
                }}>
                    <View>
                    <View style={styles.icon}>
                        <Feather name="edit" size={24} color="#2CC272" />
                    </View>
                    <Text style={styles.titleItem}>Revisão de nota/frequência</Text>
                    <Text style={styles.textItem}>É permitido solicitação de revisão de nota e frequência para disciplinas no prazo de 1 ano. Para disciplinas presentes na grade atual, é permitido somente solicitação de revisão de frequência.</Text>
                    </View>
                </RectButton>

                <RectButton style={styles.cardItem} onPress={() => {
                    Linking.openURL(
                    `https://arealogada.sis.puc-campinas.edu.br/login-silencioso?token=${authTokenAreaLogada}&returnUrl=https://arealogada.sis.puc-campinas.edu.br`
                    );
                }}>
                    <View>
                    <View style={styles.icon}>
                        <Feather name="info" size={24} color="#2CC272" />
                    </View>
                    <Text style={styles.titleItem}>Histórico de atendimento</Text>
                    <Text style={styles.textItem}>Histórico de atendimento</Text>
                    </View>
                </RectButton>

                <View style={styles.footer}>
                <Text style={styles.footerText}>
                    PUC-CAMPINAS
                </Text>
            </View>
            </Animated.ScrollView>
        </View>
    );
}

export default CentralAtendimento;