import React, {useContext, useState, useEffect} from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import { Feather } from '@expo/vector-icons'; 
import {Container, CardItem, TextItem, List, Icon, TitleItem, Footer, FooterText} from './styles';
import AuthContext from '../../Contexts/auth';
import { ThemeContext } from 'styled-components';

function CentralAtendimento({ navigation }) {
    const [animaTop, setTop] = useState(new Animated.Value(150));
    const {authToken, authTokenAreaLogada, tokenAreaLogada} = useContext(AuthContext);
    const { colors } = useContext(ThemeContext);

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
        <Container>
            <PageHeader title="Central de Atendimento ao Aluno" backColor={colors.headerAzul}></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <CardItem onPress={() => { hundleNavigateAreaLogada('https://wl.sis.puc-campinas.edu.br/sistemas/puc/academico/CAA/Modulos/Protocolo/Historico.aspx') }}>
                    <View>
                        <Icon>
                            <Feather name="package" size={24} color="#2CC272" />
                        </Icon>
                        <TitleItem>Histórico de atendimento</TitleItem>
                        <TextItem>Navegue pelas informações ou realize buscas</TextItem>
                    </View>
                </CardItem>

                <CardItem onPress={() => {
                    hundleNavigateAreaLogada('https://wl.sis.puc-campinas.edu.br/sistemas/puc/academico/CAA/Modulos/RetificacaoNotaFrequencia/SolicitarAlteracaoNota.aspx?TipoSolicitacao=N')
                }}>
                    <View>
                        <Icon>
                            <Feather name="edit" size={24} color="#2CC272" />
                        </Icon>
                        <TitleItem>Revisão de nota/frequência</TitleItem>
                        <TextItem>É permitido solicitação de revisão de nota e frequência para disciplinas no prazo de 1 ano. Para disciplinas presentes na grade atual, é permitido somente solicitação de revisão de frequência.</TextItem>
                    </View>
                </CardItem>

                <CardItem onPress={() => {
                    hundleNavigateAreaLogada('https://wl.sis.puc-campinas.edu.br/sistemas/puc/academico/CAA/Frame.aspx?app=20538666-d909-4841-9b6a-5e26484edf6d')
                }}>
                    <View>
                        <Icon>
                            <Feather name="info" size={24} color="#2CC272" />
                        </Icon>
                        <TitleItem>Solicitação de documentos</TitleItem>
                        <TextItem>Confira o histórico de solicitação, ou abra novos pedidos</TextItem>
                    </View>
                </CardItem>

                <Footer>
                <FooterText>
                    PUC-CAMPINAS
                </FooterText>
            </Footer>

            </Animated.ScrollView>
            
        </Container>
    );
}

export default CentralAtendimento;