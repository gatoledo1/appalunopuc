import React, {useState, useContext} from 'react';
import { View, Image, Text, Linking, Animated, Easing, TextInput } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AuthContext from '../../Contexts/auth';

import PageHeader from '../../components/PageHeader';
import Carousel from '../../components/Carousel';

import canvasIcon from '../../assets/images/icons/canvas.png';
import areaLogada from '../../assets/images/icons/area-logada.png';
import gradeSemanal from '../../assets/images/icons/listine-dots.png';
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

import styles from './styles';


function HomeItens() {
    const { navigate } = useNavigation();

    const {nome, signOut} = useContext(AuthContext);
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
    function hundleNavigatePWDAreaLogada() {
        navigate('PWDAreaLogada');
    }
    function hundleNavigateNotrify() {
        navigate('NotifyTabs');
    }
    function hundleNavigateAreaFinanceira() {
        navigate('AreaFinanceira');
    }
    

    const [animaTop, setTop] = useState(new Animated.Value(150));

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
        <View style={styles.container}>
            <PageHeader title={`Olá ${firstName}`} backColor="#002975" 
            headerRight={(
                    <BorderlessButton onPress={hundleNavigateNotrify} style={{marginRight: 12, marginTop: 20, paddingTop: 12}}>
                        <Feather name="bell" size={30} color="#FFF" />
                        <Text style={styles.badge}>3</Text>
                    </BorderlessButton>
                 )}>

            <Text style={styles.titleChildren}>Que bom te ver aqui</Text>      
            </PageHeader>

            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >

                <View style={styles.row}>
                    <RectButton onPress={hundleNavigatePWDAreaLogada} style={styles.links}>
                        <View style={styles.card}>
                            <Image source={areaLogada} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Área Logada
                            </Text>
                        </View>
                    </RectButton>
                    
                    <RectButton 
                    onPress={() => {
                        Linking.openURL(
                          'https://puc-campinas.instructure.com/login/microsoft'
                        );
                    }}
                    style={styles.links}>
                        <View style={styles.card}>
                            <Image source={canvasIcon} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Canvas
                            </Text>
                        </View>
                    </RectButton>
                </View>

                <View style={styles.row}>
                    <RectButton onPress={hundleNavigateGradeSemanal} style={styles.links}>
                        <View style={styles.card}>
                            <Image source={gradeSemanal} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Grade Semanal
                            </Text>
                        </View>
                    </RectButton>
                    
                    <RectButton onPress={hundleNavigateGradeCompleta} style={styles.links}>
                        <View style={styles.card}>
                            <Image source={gradeCompleta} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Grade Completa
                            </Text>
                        </View>
                    </RectButton>
                </View>

                <View style={styles.row}>
                    <RectButton onPress={hundleNavigateNews} style={styles.links}>
                        <View style={styles.card}>
                            <Image source={paper} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Comunicados e Notícias
                            </Text>
                        </View>
                    </RectButton>

                    <RectButton style={styles.links} >
                        <View style={styles.card}>
                                <Image source={caa} style={styles.icon} />
                                <Text style={styles.textCard}>
                                    Central de Atendimento ao Aluno
                                </Text>
                            </View>
                    </RectButton>
                </View>

                <View style={styles.row}>
                    <RectButton style={styles.links}>
                        <View style={styles.card}>
                            <Image source={barGraph} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Práticas de Formação
                            </Text>
                        </View>
                    </RectButton>
                    
                    <RectButton style={styles.links} onPress={hundleNavigateCursados}>
                        <View style={styles.card}>
                            <Image source={check} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Disciplinas Cursadas
                            </Text>
                        </View>
                    </RectButton>
                </View>

                <View style={styles.row}>
                    <RectButton style={styles.links}
                    onPress={() => {
                        Linking.openURL(
                          'https://www.puc-campinas.edu.br/calendario/'
                        );
                    }}>
                        <View style={styles.card}>
                            <Image source={calendar} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Calendário Acadêmico
                            </Text>
                        </View>
                    </RectButton>

                    <RectButton onPress={hundleNavigateAreaFinanceira} style={styles.links}>
                        <View style={styles.card}>
                            <Image source={card} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Área Financeira
                            </Text>
                        </View>
                    </RectButton>
                </View>

                <View style={styles.row}>
                    <RectButton style={styles.links}>
                        <View style={styles.card}>
                            <Image source={document} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Documentos do Aluno
                            </Text>
                        </View>
                    </RectButton>

                    <RectButton style={styles.links}>
                        <View style={styles.card}>
                            <Image source={bookAlt} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Biblioteca
                            </Text>
                        </View>
                    </RectButton>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        PUC-CAMPINAS
                    </Text>
                </View>

                <RectButton style={styles.logout} onPress={hundleSignOut}>
                    <Text style={styles.loguotText}>
                        Desconectar app
                    </Text>
                </RectButton>

                <Carousel />

            </Animated.ScrollView>
        </View>
    );
}

export default HomeItens;