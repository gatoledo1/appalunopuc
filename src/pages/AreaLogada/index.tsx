import React, {useState, useEffect, useContext} from "react";
import { Text, Linking } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Content, BackgroungLogin, Biometria, Button, ButtonText, Title, TitleChildren, FingerText, Label, Input, PasswordContainer } from "./styles";
import PageHeader from '../../components/PageHeader';
import backLogin from '../../assets/images/back-login.png';
import AuthContext from '../../Contexts/auth';
import { Ionicons } from '@expo/vector-icons';
import base64 from 'react-native-base64';
import { ThemeContext } from 'styled-components';
import * as LocalAuthentication from 'expo-local-authentication';


export default function PWDAreaLogada({ route }) {

  let { returnUrl } = route.params;
  let UrlAreaLogada = returnUrl;

  const [passwordShow, setPasswordShow] = useState(false);
  const [erroPwd, setErroPwd] = useState('');
  const [pwd, setPwd] = useState< string | null>('');
  const {ra, authToken, authTokenAreaLogada, tokenAreaLogada} = useContext(AuthContext);
  const { colors } = useContext(ThemeContext);

    useEffect(() => {

      if(authTokenAreaLogada == '' || authTokenAreaLogada == undefined || authTokenAreaLogada == null){
        tokenAreaLogada(authToken);
      }

    }, []);

  function SubmitAreaLogada(){

    const compara = `Basic ${base64.encode(`${ra}:${pwd}`)}`;

    if(compara == authToken){
        Linking.openURL(
          `https://arealogada.sis.puc-campinas.edu.br/login-silencioso?token=${authTokenAreaLogada}&returnUrl=${UrlAreaLogada}`
        );
    }else{
      setErroPwd('A senha informada, não corresponde senha de login');
    }

  }

  async function Biometric(){
      let compatible = await LocalAuthentication.hasHardwareAsync();
      if(compatible){
          let biometricRecords = await LocalAuthentication.isEnrolledAsync();
          if(!biometricRecords){
              alert('Biometria não cadastrada');
          }else{
              let result = await  LocalAuthentication.authenticateAsync();
              if(result.success){
                Linking.openURL(
                  `https://arealogada.sis.puc-campinas.edu.br/login-silencioso?token=${authTokenAreaLogada}&returnUrl=${UrlAreaLogada}`
                );
              }else{
                
              }
          }
      }
  }

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
      }
        
      function ShowHidePWD() {
        if(passwordShow == false){
            return (
                <Ionicons name="md-eye-off" size={30} color="#367DFF" />
            )   
        }else{
            return (
                <Ionicons name="md-eye" size={30} color="#367DFF" />
            )
        }
    }
  

    return (
      <Container>
        <PageHeader title="Verificação de Segurança" backColor={colors.headerVerde}>
          <TitleChildren>Sempre perguntaremos sua senha. {'\n'}{'\n'}Para acessar a área logada, digite sua senha novamente</TitleChildren>
        </PageHeader>

          <Content>
              <Title>
              
              </Title>

              <Label>Senha de seu login</Label>
                  <PasswordContainer>
                      <Input style={{borderBottomColor: '#367DFF', borderBottomWidth: 1,}}
                          secureTextEntry={passwordShow ? false : true}
                          value={pwd}
                          onChangeText={text => setPwd(text)}
                      />
                      <TouchableOpacity onPress={togglePasswordVisiblity}>
                          <ShowHidePWD />
                      </TouchableOpacity>
                      
                  </PasswordContainer>  

                  <Text style={{marginTop: 16, color: 'red'}}> { erroPwd } </Text>

              <Biometria onPress={Biometric}>
                <FingerText>Acessar com biometria</FingerText>
                <Ionicons name="md-finger-print" size={28} color="#aaa" />
              </Biometria>    
              
              <Button onPress={SubmitAreaLogada}>
                <ButtonText>Acessar</ButtonText>
              </Button>      

          </Content>

      </Container>
    );
  }
