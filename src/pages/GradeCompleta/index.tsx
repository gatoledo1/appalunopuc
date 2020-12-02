import React, {useState, useEffect, useContext, useRef} from 'react';
import { Animated, Easing, ActivityIndicator, StyleSheet, Text, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableDisciplinas from '../../components/TableDisciplinas';
//import TableHorarios from '../../components/TableHorarios';
import backIcon from '../../assets/images/icons/arrow.png';
import mapMarker from '../../assets/images/icons/marker-puc.png';
import pessoaMarker from '../../assets/images/icons/marker-pessoa.png';
//import backIconBlue from '../../assets/images/icons/arrow-blue.png';
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, ContainerTable, ContainerMap, Head, Cards, TableHead, TableHead2, ModalHeader, InfoMap, Button, ButtonText, ButtonLocation, ButtonTextLocation, Footer, FooterText, ArrowRotate } from './styles';
import { ThemeContext } from 'styled-components';
import AuthContext from '../../Contexts/auth';
import { Modalize } from 'react-native-modalize';
import * as Location from 'expo-location';
import { useColorScheme } from 'react-native-appearance';

import styleMap from './styleMap';

interface ArrayGradeItens {
    [index: number]: string;
    codigoDisciplina: string;
    nomeDisciplina: string;
    codCurso: string;
    predio: string;
    turno: string;
    sala: string;
    aulasDadas: string;
    turma: string;
    professor: string;
    latitude: string;
    longitude: string;
  }


function GradeCompleta({ navigation }) {

    const [listaDisciplinas, setListaDisciplinas] = useState(new Array<ArrayGradeItens>());
    const [load, setLoad] = useState(true);
    const [latitudePessoa, setlatitudePessoa] = useState<number>(0);
    const [longitudePessoa, setlongitudePessoa] = useState<number>(0);

    const scheme = useColorScheme();
    const { colors } = useContext(ThemeContext);
    const { latitudeSala, longitudeSala, modalizeRef } = useContext(AuthContext);

    let timeout = useRef();

    function hundleNavigateAreaLogada(link:string) {
        navigation.navigate('PWDAreaLogada', {
            returnUrl: link
        });
    }
    
    useEffect(() => {

        objGradeCompleta();

    }, []);
    
    async function objGradeCompleta(){

        let arrayGradeCompleta = []
        
        const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');

            arrayGradeCompleta = await JSON.parse(stringGradeSemanal)

            setListaDisciplinas(arrayGradeCompleta);

            setLoad(false)

    }

    function TableDisciplinasWrapper(){

        return(
            <Cards>
                {
                    listaDisciplinas.map((Info, index) => (
                        <TableDisciplinas key={index} codigoDisciplina={Info.codigoDisciplina} nomeDisciplina={Info.nomeDisciplina}
                        codCurso={Info.codCurso} turno={Info.turno} predio={Info.predio} sala={Info.sala} aulasDadas={Info.aulasDadas}
                        professor={Info.professor} turma={Info.turma} latitude={Info.latitude} longitude={Info.longitude}
                    />))
                }
            </Cards>
        )
    }

    async function localizacaoAluno(){
        let { status } = await Location.requestPermissionsAsync()

        if (status !== 'granted') {
            //Quando rejeitar
        }

        const location = await Location.getCurrentPositionAsync()

        SetLocationPessoa();

            function SetLocationPessoa(){

                const { latitude, longitude } = location.coords;

                setlatitudePessoa(latitude);
                setlongitudePessoa(longitude)
                console.log("Localização pessoa")
                timeout.current = setTimeout(SetLocationPessoa, 6000);
            }
    }

    const handleClose = () => {
        clearTimeout(timeout.current);
        modalizeRef.current.close();
        
    };


    const [animaTop, setTop] = useState(new Animated.Value(50));

    Animated.timing(
        animaTop,
        {
            toValue: -100,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();


    return (
        <Container>
            <PageHeader title="Grade de Disciplinas" backColor={colors.headerVerde}></PageHeader>
   
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                <Head>
                    <TableHead> Disciplinas </TableHead>
                    <ArrowRotate source={backIcon}/>
                </Head>
                
                <ContainerTable>
                
                    <ScrollView horizontal={true}>

                        <TableDisciplinasWrapper />
            
                    </ScrollView>

                    <ActivityIndicator animating={load} size="large" color="#367DFF" />
               
                </ContainerTable>

                <TableHead2 style={{paddingTop: 0}}>Toque na disciplina para visualizar o local da sua sala de aula no mapa</TableHead2>
              
                <TableHead2 style={{borderTopWidth: 1, borderColor: scheme === 'dark' ? '#002871' : '#B6CEFF'}}>Para mais informações de sua grade, inclusive sobre Práticas de Formação, acesse a Área Logada.</TableHead2>

                <Button onPress={() => {
                    hundleNavigateAreaLogada('https://arealogada.sis.puc-campinas.edu.br/wl/websist/academico/grade_disciplinas/index.asp')
                }}>
                    <ButtonText>Acessar Área Logada</ButtonText>
                </Button>


                <Footer>
                    <FooterText>PUC-CAMPINAS</FooterText>
                </Footer>

            </Animated.ScrollView>

            
            <Modalize ref={modalizeRef} modalStyle={{backgroundColor: colors.cardsTable}}>
                
                <Cards style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <ModalHeader onPress={handleClose} >
                        <Text style={{color: '#ea4335', fontSize: 12}}>Fechar</Text>
                    </ModalHeader>
                </Cards>

                <InfoMap style={{position: 'absolute', top: 20, fontSize: 18, paddingBottom: 10, paddingTop: -6}}>Local da sala de aula</InfoMap>
                    
                <ContainerMap style={{borderWidth: 1, borderColor: '#ccc'}}>
                    
                    <MapView style={{ width: '100%', height: 400 }} loadingEnabled={true} provider={PROVIDER_GOOGLE}
                        customMapStyle={scheme === 'dark' ? styleMap : undefined}
                        initialRegion={{
                            latitude: Number(latitudeSala),
                            longitude: Number(longitudeSala),
                            latitudeDelta: 0.006,
                            longitudeDelta: 0.006,
                        }}>
                        
                        <Marker
                            image={mapMarker}
                            coordinate={{
                                latitude: Number(latitudeSala),
                                longitude: Number(longitudeSala),
                            }}
                            title="Sua sala está aqui!"
                        />

                        <Marker
                            image={pessoaMarker}
                            coordinate={{
                                latitude: latitudePessoa,
                                longitude: longitudePessoa,
                            }}
                            title="Você está aqui"
                        />
                    </MapView>
                
                </ContainerMap>

                <ButtonLocation onPress={localizacaoAluno}>
                    <ButtonTextLocation>Me ajude a chegar! 😃</ButtonTextLocation>
                </ButtonLocation>

                    <InfoMap style={{fontSize: 13, paddingBottom: 0, paddingTop: 15}}>Ampliar zoom: Toque 2x no mapa.</InfoMap>
                    <InfoMap style={{fontSize: 13, paddingTop: 8, textAlign: 'left',}}>Reduzir zoom: No segundo toque, mantenha pressionado, em seguida arraste para cima.</InfoMap>
            </Modalize>

        </Container>
    );
}

export default GradeCompleta;
