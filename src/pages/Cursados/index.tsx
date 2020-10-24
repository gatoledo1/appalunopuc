import React, {Component, useState, useContext, useEffect} from 'react';
import { View, Text, ScrollView, Animated, Easing } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import DisciplinasCursadas from '../../components/DisciplinasCursadas';
import AuthContext from '../../Contexts/auth';
import { EnviaDisciplinasCursadas } from '../../Services/disciplinasCursadas';

function Cursados() {

    const [animaTop, setTop] = useState(new Animated.Value(150));
    const [contador, setContador] = useState(0);

    interface DisciplinasCursadasProps {
        [index: number]: string;
        codCurso: string;
        nome: string;
        media: string;
        decSitcli: string;
        cargaHoraria: string;
    }
    
    let cursados = new Array<DisciplinasCursadasProps>();

    const {authToken} = useContext(AuthContext);
    
    funcDisciplinasCursadas(authToken);

       async function funcDisciplinasCursadas(token){

            const responseDisciplinasCursadas = await EnviaDisciplinasCursadas(token);

            const disciplinaCursada = await responseDisciplinasCursadas.json();

            cursados = disciplinaCursada.filter((ano) => { return ano.aass === '20181'; });

            if(cursados.length === 11) {
                console.log(contador)
                setContador(1)
            }
            

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
                    <Text style={styles.ano}>2019</Text>
                    {
                        useEffect(() => {
                                //cursados.map(Info => (
                                //    <DisciplinasCursadas codCurso={Info.codCurso} nome={Info.nome} media={Info.media}
                                //    decSitcli={Info.decSitcli} cargaHoraria={Info.cargaHoraria}></DisciplinasCursadas>
                                //))
                                
                        }, [contador])
                    }
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


