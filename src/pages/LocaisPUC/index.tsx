import React, {ReactNode, useState, useEffect, useContext, useRef} from 'react';
import { Animated, Easing, ActivityIndicator, StyleSheet, Text, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import ImagemCards from '../../components/LocaisPucImg';
import backIcon from '../../assets/images/icons/arrow.png';
import mapMarker from '../../assets/images/icons/marker-puc.png';
import pessoaMarker from '../../assets/images/icons/marker-pessoa.png';
import back from '../../assets/images/icons/back.png';
//import AsyncStorage from '@react-native-community/async-storage';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, ContainerTable, ContainerMap, Head, Cards, TableHead, TableHead2, ModalHeader, 
    InfoMap, TitleChildren, ButtonLocation, ButtonTextLocation, Footer, FooterText, ArrowRotate } from './styles';
import { ThemeContext } from 'styled-components';
import AuthContext from '../../Contexts/auth';
import { Modalize } from 'react-native-modalize';
import * as Location from 'expo-location';
import { useColorScheme } from 'react-native-appearance';

import styleMap from './styleMap';


  let imagensCampi  = new Array();
  let imagensCampi2 = new Array();

  imagensCampi = [
    { id: 1, nome: 'Auditório Cardeal Agnelo Rossi Cardoso', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/auditorio-agnelo.jpg') },
    { id: 2, nome: 'Auditório Dom Gilberto', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/auditorio-dom-gilberto.jpg') },
    { id: 3, nome: 'Biblioteca do CCHSA', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/biblioteca-cchsa.jpg') },
    { id: 4, nome: 'Biblioteca Dom Airton', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/bilioteca-dom-airton.jpg') },
    { id: 5, nome: 'Capela do CCHSA', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/capela-cchsa.jpg') },
    { id: 6, nome: 'Capela Santo Tomás de Aquino', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/capela-santo-tomas-aquino.jpg') },
    { id: 7, nome: 'Laboratório de fotografica', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/lab-fotografia.jpg') },
    { id: 8, nome: 'Capela do CCHSA', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/lab-imagem-som.jpg') },
    { id: 9, nome: 'Laboratório de informática bloco E', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/lab-info-bloco-e.jpg') },
    { id: 10, nome: 'Laboratório de química CEATEC', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/lab-quimica-ceatec.jpg') },
    { id: 11, nome: 'Mescla', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/mescla.jpg') },
    { id: 12, nome: 'Piscina da Faculdade de Ed. Física', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/piscina-faef.jpg') },
    { id: 13, nome: 'Praça de Alimentação CEATEC', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/praca-alimentacao-1.jpg') },
    { id: 14, nome: 'Salão Ambiental', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/salao-ambiental.jpg') },
    { id: 15, nome: 'Teatro - Sala 803', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/espacos-puc/campus1/teatro-sala-803.jpg') },
  ];

  imagensCampi2 = [
    { id: 1, nome: 'Auditório Dom Gilberto', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/CampusII_01.jpg') },
    { id: 2, nome: 'Auditório Dom Gilberto', latitude: '-22.833951', longitude: '-47.0503008', imagem: require('../../assets/images/CampusII_04.jpg') }
  ];


function LocaisPUC() {

    const [latitudePessoa, setlatitudePessoa] = useState<number>(0);
    const [longitudePessoa, setlongitudePessoa] = useState<number>(0);

    const scheme = useColorScheme();
    const { colors } = useContext(ThemeContext);
    const { latitudeSala, longitudeSala, modalizeRef } = useContext(AuthContext);

    let timeout = useRef();


    function ImagemScroll(){

        return(
            <Cards>
                {
                    imagensCampi.map((Info, index) => (
                        <ImagemCards key={index} id={Info.id} imagem={Info.imagem} nome={Info.nome} latitude={Info.latitude} longitude={Info.longitude}
                    />))
                }
            </Cards>
        )
    }

    function ImagemScroll2(){

        return(
            <Cards>
                {
                    imagensCampi2.map((Info, index) => (
                        <ImagemCards key={index} id={Info.id} imagem={Info.imagem} nome={Info.nome} latitude={Info.latitude} longitude={Info.longitude}
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
            toValue: -60,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();


    return (
        <Container>
            <PageHeader title="Espaços PUC-Campinas" backColor={colors.headerRoxo}>
                <TitleChildren>Toque na imagem para visualizar o local no mapa</TitleChildren>
            </PageHeader>
   
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingBottom: 16,
                }}
            >
                <Head>
                    <TableHead> Campus I </TableHead>
                    <ArrowRotate source={backIcon}/>
                </Head>
                
                <ContainerTable>
                
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <ImagemScroll />
            
                    </ScrollView>
               
                </ContainerTable>

                <Head>
                    <TableHead2> Campus II </TableHead2>
                    <ArrowRotate source={back}/>
                </Head>
                
                <ContainerTable>
                
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <ImagemScroll2 />
            
                    </ScrollView>
               
                </ContainerTable>

                
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

                <InfoMap style={{position: 'absolute', top: 20, fontSize: 18, paddingBottom: 10, paddingTop: -6}}>Localize o local</InfoMap>
                    
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
                            pinColor="#e42416"
                            coordinate={{
                                latitude: Number(latitudeSala),
                                longitude: Number(longitudeSala),
                            }}
                            title="Sua sala está aqui!"
                        />

                        <Marker
                            pinColor="#0863ea"
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

export default LocaisPUC;
