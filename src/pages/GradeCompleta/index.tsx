import React, {useState, useEffect, useContext, useRef} from 'react';
import { Animated, Easing, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TableDisciplinas from '../../components/TableDisciplinas';
//import TableHorarios from '../../components/TableHorarios';
import backIcon from '../../assets/images/icons/arrow.png';
import mapMarker from '../../assets/images/icons/marker-puc.png';
import pessoaMarker from '../../assets/images/icons/marker-pessoa.png';
//import backIconBlue from '../../assets/images/icons/arrow-blue.png';
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, ContainerTable, Head, Cards, TableHead, TableHead2, Button, ButtonText, Footer, FooterText, ArrowRotate } from './styles';
import { ThemeContext } from 'styled-components';
import AuthContext from '../../Contexts/auth';
import { Modalize } from 'react-native-modalize';
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
    

    const { colors } = useContext(ThemeContext);
    const { latitudeSala, longitudeSala, latitudePessoa, longitudePessoa, modalizeRef } = useContext(AuthContext);

    useEffect(() => {

        objGradeCompleta();

    }, []);

    function hundleNavigateAreaLogada(link:string) {
        navigation.navigate('PWDAreaLogada', {
            returnUrl: link
        });
    }

    
    async function objGradeCompleta(){

        let arrayGradeCompleta = []
        
        const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');

            arrayGradeCompleta = await JSON.parse(stringGradeSemanal)

            setListaDisciplinas(arrayGradeCompleta);

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

    const [animaTop, setTop] = useState(new Animated.Value(150));

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
               
                </ContainerTable>

                <TableHead2>Toque na disciplina para visualizar o local da sua sala de aula no mapa</TableHead2>

                <Modalize ref={modalizeRef}>
                    <TableHead2>Local da sala de aula</TableHead2>
                    <MapView style={{ width: '90%', height: 450, margin: 16, borderRadius: 14 }}
                        loadingEnabled={true}
                        providor={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: latitudePessoa,
                            longitude: longitudePessoa,
                            latitudeDelta: 0.006,
                            longitudeDelta: 0.006,
                        }}
                    >
                        <Marker
                            icon={mapMarker}
                            coordinate={{
                                latitude: Number(latitudeSala),
                                longitude: Number(longitudeSala),
                            }}
                            title="Sua sala está aqui!"
                        />
                        <Marker
                            icon={pessoaMarker}
                            coordinate={{
                                latitude: latitudePessoa,
                                longitude: longitudePessoa,
                            }}
                            title="Você está aqui"
                        />
                    </MapView>  
                </Modalize>

                
                    <TableHead2>Para mais informações de sua grade, inclusive sobre Práticas de Formação, acesse a Área Logada.</TableHead2>

                    <Button onPress={() => {
                        hundleNavigateAreaLogada('https://arealogada.sis.puc-campinas.edu.br/wl/websist/academico/grade_disciplinas/index.asp')
                    }}>
                        <ButtonText>Acessar Área Logada</ButtonText>
                    </Button>


            <Footer>
                <FooterText>PUC-CAMPINAS</FooterText>
            </Footer>

            </Animated.ScrollView>
        </Container>
    );
}

export default GradeCompleta;
