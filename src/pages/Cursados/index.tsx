import React, {useState, useContext, useEffect} from 'react';
import { View, Text, ScrollView, Animated, Easing, ActivityIndicator } from 'react-native';
import PageHeader from '../../components/PageHeader';
import DisciplinasCursadas from '../../components/DisciplinasCursadas';
import AuthContext from '../../Contexts/auth';
import { ThemeContext } from 'styled-components';
import { EnviaDisciplinasCursadas } from '../../Services/disciplinasCursadas';
import {Container, Card, Footer, FooterText } from './styles';
import { StatusBar } from 'expo-status-bar';

function Cursados() {

    const [animaTop, setTop] = useState(new Animated.Value(150));
    const [listaDisciplinas, setListaDisciplinas] = useState([]);
    const {authToken} = useContext(AuthContext);
    const [load, setLoad] = useState(true);
    const { colors } = useContext(ThemeContext);
    

    useEffect(() => {

        funcDisciplinasCursadas(authToken);

    }, []);


    async function funcDisciplinasCursadas(token){

        const responseDisciplinasCursadas = await EnviaDisciplinasCursadas(token);

        const disciplinaCursada = await responseDisciplinasCursadas.json();

        const listaCursados = disciplinaCursada.filter((ano) => { return ano.aass; })

        setListaDisciplinas(listaCursados.sort((a, b) => parseFloat(b.aass) - parseFloat(a.aass)));

        setLoad(false)

    }

    function Disciplinas(){
        return (
            <View>
                {
                    listaDisciplinas.map((Info, index) => (
                        <DisciplinasCursadas key={index} codCurso={Info.codigo} nome={Info.nome} media={Info.media}
                        decSitcli={Info.decSitcli} ano={`${Info.aass.slice(0, 4)}-0${Info.aass.slice(4, 5)}`} cargaHoraria={`${Info.cargaHoraria} horas`}></DisciplinasCursadas>
                    ))
                }
            </View>
        );
    }


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
        <Container>
            <StatusBar style="light" />
            <PageHeader title="Disciplinas Cursadas" backColor={colors.headerCinza}></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                    
                <Card>
                    <ActivityIndicator animating={load} size="large" color="#367DFF" style={{position: 'absolute',right: 0,left: 0,}} />    
                        
                        <Disciplinas />

                </Card>
                
                <Footer>
                    <FooterText>
                        PUC-CAMPINAS
                    </FooterText>
                </Footer>

            </Animated.ScrollView>
            
        </Container>
    );
}

export default Cursados;


