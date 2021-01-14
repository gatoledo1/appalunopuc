import React, {useContext, useState, useEffect} from 'react';
import { View, Text, Animated, Easing, ActivityIndicator } from 'react-native';
import PageHeader from '../../../components/PageHeader';
import CardsNotify from '../Components/index'; 
import {Container, Footer, FooterText} from '../styles';
import { ThemeContext } from 'styled-components';
import { Modalize } from 'react-native-modalize';
import AuthContext from '../../../Contexts/auth';
import { ListaNotificacoes } from '../../../Services/Notificacoes';

interface ArrayNotifyItens {
  [index: number]: string;
  pessoaTipoNotificacao: object;
  dataNotificacao: string;
  mensagem: string;
}

function NotifyCurso() {
    const [animaTop, setTop] = useState(new Animated.Value(150));
    const { colors } = useContext(ThemeContext);
    const { modalizeRef } = useContext(AuthContext);
    const [load, setLoad] = useState(true);
    const {authToken} = useContext(AuthContext);
    const [listaNotificacoes, setListaNotificacoes] = useState(new Array<ArrayNotifyItens>());


  useEffect(() => {

    consultaNotificacao(authToken);

  }, []);


  async function consultaNotificacao(token){

      const responseNotificacoes = await ListaNotificacoes(token);

      const notificacaoIndividual = await responseNotificacoes.json();

      const listaIndividual = notificacaoIndividual.filter((data) => { return data.dataNotificacao; });
      
      setListaNotificacoes(listaIndividual.sort((a, b) => parseFloat(b.dataNotificacao) - parseFloat(a.dataNotificacao)));

      setLoad(false)

  }

  function Notificacoes(){
      return (
          <View>
              {
                  listaNotificacoes.map((Info, index) => (
                      <CardsNotify key={index} title={Info.pessoaTipoNotificacao.nome} bodyText={Info.mensagem}
                      data={`Data: ${Info.dataNotificacao.slice(8, 10)}${Info.dataNotificacao.slice(4, 8)}${Info.dataNotificacao.slice(0, 4)}`} ></CardsNotify>
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
            <PageHeader title="Suas notificações" backColor={colors.headerAzul}></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
              <ActivityIndicator animating={load} size="large" color="#367DFF" style={{position: 'absolute',right: 0,left: 0,}} />

                <Notificacoes />

                <Footer>
                <FooterText>
                    PUC-CAMPINAS
                </FooterText>
            </Footer>

            </Animated.ScrollView>

            <Modalize ref={modalizeRef} modalStyle={{backgroundColor: colors.cardsTable}}>


            </Modalize>
            
        </Container>
    );
}

export default NotifyCurso;