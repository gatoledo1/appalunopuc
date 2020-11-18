import React, { useContext } from 'react';
import { Image } from 'react-native';
import PaperOnboarding, {PaperOnboardingItemType} from "@gorhom/paper-onboarding";
import logoLogin from '../../assets/images/PUC-80anos_logo-branco.png';
import recursos from '../../assets/images/recursos.png';
import pwdImg from '../../assets/images/password.png';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import AuthContext from '../../Contexts/auth';

const data: PaperOnboardingItemType[] = [
    {
        title: 'Bem-vindo',
        description: 'Em comemoração aos 80 anos de PUC-Campinas, criamos um novo app para os alunos que trás novos recursos e uma interface renovada, muito mais intuitiva. 😄',
        backgroundColor: '#ffb207',
        image: () => <Image source={logoLogin} style={{height: 130, resizeMode: 'contain'}} />,
        icon: () => <Feather name="info" size={30} color="#ffc107" />,
    },
    {
        title: 'Novos recursos',
        description: 'Receba notificações e veja informações das aulas, mensagens da coordenação, mapa de sala e muito mais. Disponibilizamos também, o modo escuro para maior acessibilidade.',
        backgroundColor: '#1b69f8',
        image: () => <Image source={recursos} style={{height: 250, resizeMode: 'contain'}} />,
        icon: () => <Feather name="check-circle" size={30} color="#1b69f8" />,
    },
    {
        title: 'Atenção',
        description: 'Seu login e sua senha são informações que não devem ser compartilhadas. A PUC-Campinas não se responsabilza pelo uso indevido dos seus dados, acessados por meios de responsabilidade dos estudantes.',
        backgroundColor: '#ff6151',
        image: () => <Image source={pwdImg} style={{height: 250, resizeMode: 'contain'}} />,
        icon: () => <Feather name="eye-off" size={30} color="#e74c3c" />,
    },
    
    ];

const Slider: React.FC = () => {
    
    const { introOuLogin } = useContext(AuthContext);

    const handleOnClosePress = () => {
    /*==============================================================================================================================
    | Ao clicar no botão fechar, deve ser setado no AsyncStorage a informação de que a Introdução já foi feita pelo novo usuário    |
    | Então a função introOuLogin() é chamada para que ela set um novo valor no estado "introLogin", assim mudando a rota de login  |
    ===============================================================================================================================*/

        AsyncStorage.setItem('teste6', 'ok');

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