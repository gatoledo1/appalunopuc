import React, {useContext, useState, useEffect} from 'react';
import { View, Text, Animated, Easing, ActivityIndicator } from 'react-native';
import PageHeader from '../../../components/PageHeader';
import CardsNotify from '../Components/index'; 
import {Container, ModalContainer, ModalText, ModalTitulo, Footer, FooterText} from '../styles';
import { ThemeContext } from 'styled-components';
import { Modalize } from 'react-native-modalize';
import AuthContext from '../../../Contexts/auth';
import { ListaNotificacoes } from '../../../Services/Notificacoes';

interface ArrayNotifyItens {
  [index: number]: string;
  pessoaTipoNotificacao: object;
  dataNotificacao: string;
  mensagem: string;
  visualizado: boolean;
  codPessoaNotificacao: number;
}

function NotifyCurso() {
    const [animaTop, setTop] = useState(new Animated.Value(150));
    const { colors } = useContext(ThemeContext);
    const [load, setLoad] = useState(true);
    const { authToken, modalizeRef, currentNotify } = useContext(AuthContext);
    const [listaNotificacoesCurso, setListaNotificacoesCurso] = useState(new Array<ArrayNotifyItens>());


  useEffect(() => {

    consultaNotificacao(authToken);

  }, []);


  async function consultaNotificacao(token){

      const responseNotificacoes = await ListaNotificacoes(token);

      const notificacaoCurso = await responseNotificacoes.json();
      
      setListaNotificacoesCurso(notificacaoCurso);

      setLoad(false)

  }

  function NotificacoesCurso(){
      return (
          <View>
              {
                  listaNotificacoesCurso.map((Info, index) => (
                      <CardsNotify key={index} title={Info.pessoaTipoNotificacao.nome} bodyText={Info.pessoaTipoNotificacao.observacao}
                      subject={Info.mensagem} visualizada={Info.visualizado} codigo={Info.codPessoaNotificacao}
                      data={`Data: ${Info.dataNotificacao.slice(8, 10)}${Info.dataNotificacao.slice(4, 8)}${Info.dataNotificacao.slice(0, 4)}   Hora: ${Info.dataNotificacao.slice(11, 19)}`} ></CardsNotify>
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

                <NotificacoesCurso />

                <Footer>
                <FooterText>
                    PUC-CAMPINAS
                </FooterText>
            </Footer>

            </Animated.ScrollView>

            <Modalize ref={modalizeRef} adjustToContentHeight={true} modalStyle={{backgroundColor: colors.cardsTable}}>
                        
                <ModalContainer>
                    <ModalTitulo> { currentNotify.titulo } </ModalTitulo>
                    <ModalText> { currentNotify.mensagem } </ModalText>
                    <ModalText style={{ paddingTop: 20 }}> { currentNotify.data } </ModalText>
                </ModalContainer>

            </Modalize>
            
        </Container>
    );
}

export default NotifyCurso;