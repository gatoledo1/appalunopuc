import React, {useState, useContext, useEffect} from 'react';
import { View, Image, Text, Linking, Animated, Easing} from 'react-native';
import { ThemeContext } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AuthContext from '../../Contexts/auth';

import PageHeader from '../../components/PageHeader';
import Carousel from '../../components/Carousel';

import canvasIcon from '../../assets/images/icons/canvas.png';
import areaLogada from '../../assets/images/icons/area-logada.png';
import gradeSemanalImg from '../../assets/images/icons/listine-dots.png';
import gradeCompleta from '../../assets/images/icons/list.png';
import bookAlt from '../../assets/images/icons/book-alt.png';
import card from '../../assets/images/icons/card.png';
import barGraph from '../../assets/images/icons/chart-bar-graph.png';
import check from '../../assets/images/icons/check-circled.png';
import document from '../../assets/images/icons/document-folder.png';
import cap from '../../assets/images/icons/hat-alt.png';
import paper from '../../assets/images/icons/paper.png';
import calendar from '../../assets/images/icons/ui-calendar.png';
import caa from '../../assets/images/icons/caa-help.png';

import { Container, TitleChildren, Row, Badge, Links, Card, Icon, TextCard, Footer, FooterText, Logout, LoguotText } from './styles';


function HomeItens() {
    const { navigate } = useNavigation();

    const {nome, authToken, signOut, gradeSemanal} = useContext(AuthContext);
    const { colors } = useContext(ThemeContext);
    const firstName = nome.split(' ')[0];


    function hundleSignOut(){
        signOut();
    }

    function hundleNavigateNews() {
        navigate('ComunicadosNoticias');
    }
    function hundleNavigateGradeCompleta() {
        navigate('GradeCompleta');
    }
    function hundleNavigateGradeSemanal() {
        navigate('GradeSemanal');
    }
    function hundleNavigateCursados() {
        navigate('Cursados');
    }
    function hundleNavigatePWDAreaLogada(link:string) {
        //Na tela PWDAreaLogada, a variavel returnUrl é obrigatória
        navigate('PWDAreaLogada', {
            returnUrl: link
        });
    }
    function hundleNavigateNotrify() {
        navigate('NotifyTabs');
    }
    function hundleNavigateAreaFinanceira() {
        navigate('AreaFinanceira');
    }
    function hundleNavigateCentralAtendimento() {
        navigate('CentralAtendimento');
    }


    useEffect(() => {
        // A grade de disciplinas é gravada no AsyncStorage, então demora um pouco, por esse motivo a função é chamada
        // logo na tela inicial, evitando delay no carregamento das informações nas telas

        // "authToken" já é o valor do formulario em Base64
        gradeSemanal(authToken)

    }, []);


    const [animaTop, setTop] = useState(new Animated.Value(80));

    Animated.timing(
        animaTop,
        {
            toValue: -70,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();


    return (
        <Container>
            <PageHeader title={`Olá ${firstName}!`} backColor={colors.headerAzul}
            headerRight={(
                <View style={{position: 'absolute', right: 15, top: 10}}>
                    <BorderlessButton onPress={hundleNavigateNotrify} style={{marginRight: 12, marginTop: 8, paddingTop: 12}}>
                        <Feather name="bell" size={30} color="#FFF" />
                        <Badge>3</Badge>
                    </BorderlessButton>
                </View>
            )}>

            <TitleChildren>Que bom te ver aqui</TitleChildren>     

            </PageHeader>

            <Animated.ScrollView style={{ marginTop: animaTop }}
                scrollEventThrottle={16}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                <Row>
                    <Links onPress={ () => { hundleNavigatePWDAreaLogada('https://arealogada.sis.puc-campinas.edu.br') }}>
                        <Card>
                            <Icon source={areaLogada}/>
                            <TextCard>
                                Área Logada
                            </TextCard>
                        </Card>
                    </Links>
                    
                    <Links 
                        onPress={() => {
                            Linking.openURL(
                            'https://puc-campinas.instructure.com/login/microsoft'
                            );
                        }}>
                        <Card>
                            <Icon source={canvasIcon}/>
                            <TextCard>
                                Canvas
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Row>
                    <Links onPress={hundleNavigateGradeSemanal}>
                        <Card>
                            <Icon source={gradeSemanalImg}/>
                            <TextCard>
                                Grade Semanal
                            </TextCard>
                        </Card>
                    </Links>
                    
                    <Links onPress={hundleNavigateGradeCompleta}>
                        <Card>
                            <Icon source={gradeCompleta} />
                            <TextCard>
                                Grade de Disciplinas
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Row>
                    <Links onPress={hundleNavigateNews}>
                        <Card>
                            <Icon source={paper} />
                            <TextCard>
                                Comunicados e Notícias
                            </TextCard>
                        </Card>
                    </Links>

                    <Links onPress={hundleNavigateCentralAtendimento}>
                        <Card>
                            <Icon source={caa} />
                            <TextCard>
                                Central de Atendimento ao Aluno
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Row>
                    <Links
                        onPress={() => {
                            Linking.openURL(
                            'https://www.puc-campinas.edu.br/calendario/'
                            );
                        }}>
                        <Card>
                            <Icon source={calendar} />
                            <TextCard>
                                Calendário Acadêmico
                            </TextCard>
                        </Card>
                    </Links>
                    
                    <Links onPress={hundleNavigateCursados}>
                        <Card>
                            <Icon source={check} />
                            <TextCard>
                                Disciplinas Cursadas
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Row>
                    <Links>
                        <Card>
                            <Icon source={bookAlt} />
                            <TextCard>
                                Biblioteca
                            </TextCard>
                        </Card>
                    </Links>

                    <Links onPress={hundleNavigateAreaFinanceira}>
                        <Card>
                            <Icon source={card} />
                            <TextCard>
                                Área Financeira
                            </TextCard>
                        </Card>
                    </Links>
                </Row>


                <Footer>
                    <FooterText>
                        PUC-CAMPINAS
                    </FooterText>
                </Footer>

                <Logout onPress={hundleSignOut}>
                    <LoguotText>
                        Desconectar app
                    </LoguotText>
                </Logout>

                <Carousel />

            </Animated.ScrollView>
        </Container>
    );
}

export default HomeItens;