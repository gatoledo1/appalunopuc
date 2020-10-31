import React, {Component, useState, useContext, useEffect} from 'react';
import { View, Text, ScrollView, Animated, Easing, ActivityIndicator } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import DisciplinasCursadas from '../../components/DisciplinasCursadas';
import AuthContext from '../../Contexts/auth';
import { EnviaDisciplinasCursadas } from '../../Services/disciplinasCursadas';

function Cursados() {

    const [animaTop, setTop] = useState(new Animated.Value(150));
    const [listaDisciplinas, setListaDisciplinas] = useState([]);
    const {authToken} = useContext(AuthContext);
    const [load, setLoad] = useState(true);
    

    useEffect(() => {

        funcDisciplinasCursadas(authToken);

    }, []);


    async function funcDisciplinasCursadas(token){

        const responseDisciplinasCursadas = await EnviaDisciplinasCursadas(token);

        const disciplinaCursada = await responseDisciplinasCursadas.json();

        setListaDisciplinas(disciplinaCursada.filter((ano) => { return ano.aass; }));

        setLoad(false)

    }

    function Disciplinas(){
        return (
            <View>
                {
                    listaDisciplinas.map((Info, index) => (
                        <DisciplinasCursadas key={index} codCurso={Info.codigo} nome={Info.nome} media={Info.media}
                        decSitcli={Info.decSitcli} cargaHoraria={`${Info.cargaHoraria} horas`}></DisciplinasCursadas>
                    ))
                }
            </View>
        );
    }


    Animated.timing(
        animaTop,
        {
            toValue: -80,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <View style={styles.container}>
            <PageHeader title="Disciplinas Cursadas" backColor="#767676"></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                    
                <View style={styles.card}>
                    <Text style={styles.ano}>Ano</Text>
                    <ActivityIndicator animating={load} size="large" color="#367DFF" style={styles.activityIndicator} />    
                        
                        <Disciplinas />

                </View>
                
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        PUC-CAMPINAS
                    </Text>
                </View>

            </Animated.ScrollView>
            
        </View>
    );
}

export default Cursados;


