import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

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
import styles from './styles';

function HomeItens() {
    const { navigate } = useNavigation();

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

    return (
        <View style={styles.container}>
            <PageHeader title="Olá Gabriel!">
                <Text>Que bom vê-lo por aqui</Text>
            </PageHeader>

            <ScrollView style={styles.cardsBlock}
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    paddingBottom: 16,
                }}
            >

                <View style={styles.row}>
                    <RectButton
                    onPress={() => {
                        Linking.openURL(
                          'https://arealogada.sis.puc-campinas.edu.br/'
                        );
                    }}
                    style={styles.links}>
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

                    <RectButton style={styles.links} 
                    onPress={() => {
                        Linking.openURL(
                          'http://ead.puc-campinas.edu.br/'
                        );
                    }}>
                        <View style={styles.card}>
                                <Image source={cap} style={styles.icon} />
                                <Text style={styles.textCard}>
                                    Ambiente Virtual do Aluno
                                </Text>
                            </View>
                    </RectButton>
                </View>

                <View style={styles.row}>
                    <RectButton style={styles.links}>
                        <View style={styles.card}>
                            <Image source={barGraph} style={styles.icon} />
                            <Text style={styles.textCard}>
                                Notas e Faltas
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

                    <RectButton style={styles.links}>
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

            </ScrollView>
        </View>
    );
}

export default HomeItens;