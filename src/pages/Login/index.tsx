import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, TextInput, ImageBackground, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AuthContext from '../../Contexts/auth';
import { Feather } from '@expo/vector-icons';

 
import styles from './styles';

import backLogin from '../../assets/images/back-login.png';
import logoLogin from '../../assets/images/logo-login.png';
import loginImg from '../../assets/images/login.png';
import AsyncStorage from '@react-native-community/async-storage';
import base64 from 'react-native-base64';

const Login: React.FC = () => {
    const {erroLogin, signIn} = useContext(AuthContext);
    const [ra, setRa] = useState< string | null>('17013996');
    const [pwd, setPwd] = useState< string | null>('UIE01!#C');
    const [load, setLoad] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
      }
        
      function ShowHidePWD() {
        if(passwordShow == false){
            return (
                <Feather name="eye-off" size={30} color="#367DFF" style={styles.iconEye} />
            )   
        }else{
            return (
                <Feather name="eye" size={30} color="#367DFF" style={styles.iconEye} />
            )
        }
        
    }

    function SubmitLogin(){

        setLoad(true);

        const token = `Basic ${base64.encode(`${ra}:${pwd}`)}`;

        signIn(token);
    }

    useEffect(() => {

        async function getStore(){
            const token = await AsyncStorage.getItem('token');
            
            if (token !== null){
                setLoad(true);
                
                signIn(token);
            }
        }

        getStore()

    }, []);

    return (
        <View style={styles.container} >
          <StatusBar style="dark" />
            <ImageBackground source={backLogin} style={styles.backgroungLogin}>
                <View style={styles.imgCover}>
                    <Image source={logoLogin} style={styles.banner} />
                </View>

                <View style={styles.title}>
                    <Text style={styles.titleBold}>
                        Seja bem-vindo!
                    </Text>
                </View>

                <View>
                    <Text style={styles.label}>Seu RA</Text>
                        <TextInput style={styles.input}
                            value={ra}
                            onChangeText={text => setRa(text)}
                        />
                    <Text>
                        {'\n'}{'\n'}
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
                </View>

                    <Text style={{color: 'red'}}> { erroLogin } </Text>

                    <RectButton onPress={SubmitLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                        <ActivityIndicator animating={load} size="large" color="#ffffff" style={styles.activityIndicator} />
                    </RectButton>
                

            {/* <View style={styles.logo}>
                    <Image source={logoLogin} style={styles.imgLogo} />
                    </View>*/}
            </ImageBackground>
        </View>
    );
}

export default Login;