import React, {useState, useEffect, useContext} from "react";
import { Image, Text, View, ImageBackground, TextInput, Linking } from "react-native";
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./styles";
import PageHeader from '../../components/PageHeader';
import backLogin from '../../assets/images/back-login.png';
import AuthContext from '../../Contexts/auth';
import { Ionicons } from '@expo/vector-icons';
import base64 from 'react-native-base64';
import * as LocalAuthentication from 'expo-local-authentication';


export default function PWDAreaLogada({ route }) {

  let { returnUrl } = route.params;
  let UrlAreaLogada = returnUrl;

  const [passwordShow, setPasswordShow] = useState(false);
  const [erroPwd, setErroPwd] = useState('');
  const [pwd, setPwd] = useState< string | null>('');
  const {ra, authToken, authTokenAreaLogada, tokenAreaLogada} = useContext(AuthContext);

    useEffect(() => {

        tokenAreaLogada(authToken);

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
                <Ionicons name="md-eye-off" size={30} color="#367DFF" style={styles.iconEye} />
            )   
        }else{
            return (
                <Ionicons name="md-eye" size={30} color="#367DFF" style={styles.iconEye} />
            )
        }
    }
  

    return (
      <View style={styles.container}>
        <PageHeader title="Verificação de Segurança" backColor="#2CC272">
          <Text style={styles.titleChildren}>Para sua segurança, sempre perguntaremos sua senha.</Text>
        </PageHeader>
        
        <ImageBackground source={backLogin} style={styles.backgroungLogin}>
            <View style={styles.content}>
                <Text style={styles.titleBold}>
                Para acessar a área logada, digite sua senha novamente
                </Text>

                <Text style={styles.label}>Senha</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput style={styles.input}
                            secureTextEntry={passwordShow ? false : true}
                            value={pwd}
                            onChangeText={text => setPwd(text)}
                        />
                        <TouchableOpacity onPress={togglePasswordVisiblity}>
                            <ShowHidePWD />
                        </TouchableOpacity>
                        
                    </View>  

                    <Text style={{marginTop: 16, color: 'red'}}> { erroPwd } </Text>

                <TouchableOpacity onPress={Biometric} style={styles.biometria}>
                  <Text style={styles.fingerText}>Acessar com biometria</Text>
                  <Ionicons name="md-finger-print" size={28} color="#aaa" />
                </TouchableOpacity>    
                
                <RectButton onPress={SubmitAreaLogada} style={styles.button}>
                  <Text style={styles.buttonText}>Acessar</Text>
                </RectButton>      

            </View>

        </ImageBackground>
      </View>
    );
  }
