import React, { useContext } from 'react';
import { Image } from 'react-native';
import PaperOnboarding, {PaperOnboardingItemType} from "@gorhom/paper-onboarding";
import logoLogin from '../../assets/images/puc-campinas-branco.png';
import recursos from '../../assets/images/recursos.png';
import pwdImg from '../../assets/images/password.png';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import AuthContext from '../../Contexts/auth';

const data: PaperOnboardingItemType[] = [
    {
        title: 'Bem-vindo',
        description: 'Nosso novo app trás novos recursos e uma interface renovada para ',
        backgroundColor: '#0652DD',
        image: () => <Image source={logoLogin} style={{height: 200, resizeMode: 'contain'}} />,
        icon: () => <Feather name="info" size={30} color="#0652DD" />,
    },
    {
        title: 'Novos recursos',
        description: 'Receba notificações e veja informações das aulas, mensagens da coordenação, mapa de sala e muito mais.',
        backgroundColor: '#eaa400',
        image: () => <Image source={recursos} style={{height: 250, resizeMode: 'contain'}} />,
        icon: () => <Feather name="check-circle" size={30} color="#eaa400" />,
    },
    {
        title: 'Atenção',
        description: 'Seu login e sua senha são informações que não devem ser compartilhadas. A PUC-Campinas não se responsabilza pelo uso indevido dos seus dados, acessados por meios de responsabilidade dos estudantes.',
        backgroundColor: '#e74c3c',
        image: () => <Image source={pwdImg} style={{height: 250, resizeMode: 'contain'}} />,
        icon: () => <Feather name="eye-off" size={30} color="#e74c3c" />,
    },
    
    ];

const Slider: React.FC = () => {
    const { introOuLogin } = useContext(AuthContext);

    const handleOnClosePress = () => {
        AsyncStorage.setItem('teste3', 'ok');

        introOuLogin();

    }
    return (
        <PaperOnboarding
        data={data}
        closeButtonText="Fechar"
        onCloseButtonPress={handleOnClosePress}
        />
    )
}

export default Slider;