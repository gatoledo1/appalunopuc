import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, TextInput, ImageBackground } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import AuthContext from '../../Contexts/auth';
 
import styles from './styles';
import { Envia } from '../../Services/login';

import backLogin from '../../assets/images/back-login.png';
import logoLogin from '../../assets/images/logo-login.png';
import loginImg from '../../assets/images/login.png';
import AsyncStorage from '@react-native-community/async-storage';

const Login: React.FC = () => {
    const {signed, nome, signIn} = useContext(AuthContext);


    const [ra, setRa] = useState('17013996');
    const [pwd, setPwd] = useState('UIE01!#C');
   
    //console.log(nome);

    async function SubmitLogin(){
        await AsyncStorage.setItem('ra', ra);
        await AsyncStorage.setItem('senha', pwd);

        signIn();
    }

    useEffect(() => {

        async function getStore(){
            const pwdStorage = AsyncStorage.getItem('senha');
            if (pwdStorage !== null){
                const response = await Envia();
            }
        }

        getStore()

    }, []);

    return (
        
        <View style={styles.container} >

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
                        <TextInput style={styles.input}
                            secureTextEntry={true}
                            value={pwd}
                            onChangeText={text => setPwd(text)}
                        />
                </View>

                    <RectButton onPress={SubmitLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                

            {/* <View style={styles.logo}>
                    <Image source={logoLogin} style={styles.imgLogo} />
                    </View>*/}
            </ImageBackground>
        </View>
    );
}

export default Login;