import React, {useState, useContext, useEffect, useRef} from 'react';
import { View, Image, Text, Linking, Animated, Easing} from 'react-native';
import { ThemeContext } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AuthContext from '../../Contexts/auth';

import PageHeader from '../../components/PageHeader';
import Carousel from '../../components/Carousel';

import canvasIcon from '../../assets/images/icons/canvas.png';
import teamsIcon from '../../assets/images/icons/teams.png';
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
import eventos from '../../assets/images/icons/eventos.png';
import espacosPUC from '../../assets/images/icons/espacos-puc.png';
import { ListaNotificacoes } from '../../Services/Notificacoes';

import { Container, TitleChildren, Row, Badge, Links, Card, Icon, TextCard, Footer, FooterText, Logout, LoguotText } from './styles';


function HomeItens() {
    const { navigate } = useNavigation();

    const {nome, authToken, signOut, gradeSemanal, EnviaTokenPushNotification} = useContext(AuthContext);
    const { colors } = useContext(ThemeContext);
    const firstName = nome.split(' ')[0];
    const [badgeNotificacoes, setBadgeNotificacoes] = useState<number | null>(null);

    useEffect(() => {
        // A grade de disciplinas é gravada no AsyncStorage, então demora um pouco, por esse motivo a função é chamada
        // logo na tela inicial, evitando delay no carregamento das informações nas telas

        // "authToken" já é o valor do formulario em Base64
        gradeSemanal(authToken);

        consultaNotificacao(authToken);

        EnviaTokenPushNotification(authToken);


    }, []);


    async function consultaNotificacao(token){

        const responseNotificacoes = await ListaNotificacoes(token);
  
        const notificacaoIndividual = await responseNotificacoes.json();

        let visualizados = notificacaoIndividual.filter((notify) => { return notify.visualizado === false; });

        let CountNotRead = 0

        visualizados.map(() => (
            CountNotRead = CountNotRead + 1
        ))
        
        setBadgeNotificacoes(CountNotRead)   
  
    }

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
    function hundleNavigateLocais() {
        navigate('LocaisPUC');
    }
    function hundleNavigateEventos() {
        navigate('Eventos');
    }


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
            <PageHeader title={`Olá, ${firstName}!`} backColor={colors.headerAzul}
            headerRight={(
                <View style={{position: 'absolute', right: 15, top: 25}}>
                    <BorderlessButton onPress={hundleNavigateNotrify} style={{ height: 36, width: 36}}>
                        <Feather name="bell" size={30} color="#FFF" />
                        <Badge  style={{ display: badgeNotificacoes === 0 ? 'none' : 'flex' }}>
                            { badgeNotificacoes }                           
                        </Badge>
                    </BorderlessButton>
                </View>
            )}>

            <TitleChildren>Que bom te ver aqui</TitleChildren>     

            </PageHeader>

            <Animated.ScrollView style={{ marginTop: animaTop }}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator ={false}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                <Row>
                                        
                    <Links 
                        onPress={() => {
                            Linking.canOpenURL("msteams://teams.microsoft.com").then(supported => {
                                if (supported) {
                                    Linking.openURL("msteams://teams.microsoft.com");
                                } else {
                                    Linking.openURL("https://teams.microsoft.com");
                                }
                            });
                        }}>
                        <Card>
                            <Icon source={teamsIcon}/>
                            <TextCard>
                                Microsoft Teams
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
                                Aulas da Semana
                            </TextCard>
                        </Card>
                    </Links>
                    
                    <Links onPress={hundleNavigateGradeCompleta}>
                        <Card>
                            <Icon source={gradeCompleta} />
                            <TextCard>
                                Disciplinas
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Row>
                    <Links onPress={ () => { hundleNavigatePWDAreaLogada('https://arealogada.sis.puc-campinas.edu.br') }}>
                        <Card>
                            <Icon source={areaLogada}/>
                            <TextCard>
                                Área Logada
                            </TextCard>
                        </Card>
                    </Links>

                    <Links onPress={hundleNavigateNews}>
                        <Card>
                            <Icon source={paper} />
                            <TextCard>
                                Notícias PUC-Campinas
                            </TextCard>
                        </Card>
                    </Links>

                </Row>

                <Row>
                    <Links onPress={hundleNavigateLocais}>
                        <Card>
                            <Icon source={espacosPUC} />
                            <TextCard>
                                Espaços PUC
                            </TextCard>
                        </Card>
                    </Links>

                    <Links onPress={hundleNavigateEventos}>
                        <Card>
                            <Icon source={eventos} />
                            <TextCard>
                                Eventos PUC
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
                    <Links onPress={hundleNavigateCentralAtendimento}>
                        <Card>
                            <Icon source={caa} />
                            <TextCard>
                                Central de Atendimento ao Aluno
                            </TextCard>
                        </Card>
                    </Links>

                    <Links onPress={ () => { hundleNavigatePWDAreaLogada('https://arealogada.sis.puc-campinas.edu.br/wl/websist/academico/demonstrativo_financeiro/index.asp?mobile_view=true') }}>
                        <Card>
                            <Icon source={card} />
                            <TextCard>
                                Área Financeira
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Row>
                    <Links onPress={() => {
                        Linking.openURL(
                            'http://catalogolvmen.puc-campinas.edu.br/pergamum/mobile/resultado.php'
                            );
                        }}>
                        <Card>
                            <Icon source={bookAlt} />
                            <TextCard>
                                Biblioteca: Pesquisa Geral
                            </TextCard>
                        </Card>
                    </Links>
                </Row>

                <Logout onPress={hundleSignOut}>
                    <LoguotText>
                        Desconectar app
                    </LoguotText>
                </Logout>

                <Carousel />

                <Footer>
                    <FooterText>
                        PUC-CAMPINAS
                    </FooterText>
                </Footer>

            </Animated.ScrollView>
        </Container>
    );
}

export default HomeItens;