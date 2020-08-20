import React, { useState } from 'react';
import { View, Image, Text, TextInput, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
 
import styles from './styles';

import backLogin from '../../assets/images/back-login.png';
import logoLogin from '../../assets/images/logo-login.png';
import loginImg from '../../assets/images/login.png';



function Login() {
    const [ra, setRa] = useState('');
    const [pwd, setPwd] = useState('');

    const { navigate } = useNavigation();

    function hundleNavigationToStudyPage() {
        navigate('HomeItens');
    }

    return (
        <View style={styles.container} >
            <ImageBackground resizeMode="cover" source={backLogin} style={styles.backgroungLogin}>
                
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

                    <RectButton onPress={hundleNavigationToStudyPage} style={styles.button}>
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