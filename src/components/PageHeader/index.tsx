import React, { ReactNode, useContext } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import { Feather } from '@expo/vector-icons'; 
import backIcon from '../../assets/images/icons/arrow.png';
import headerBackground from '../../assets/images/back-header.png';
import LogoImg from '../../assets/images/PUC-80anos_logo-unido.png';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../Contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';

interface PageHeaderProps {
    title: string;
    backColor: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backColor, headerRight, children }) => {

    const { navigate } = useNavigation();

    const {signOut} = useContext(AuthContext);

    function hundleSignOut(){
        signOut();
    }

    function hudleGoBack() {
        navigate('HomeItens');
    }

    const route = useRoute();

    let contTouch = 0

    function EasterEgg(){

       /* const now = new Date;
        const days = [1, 2, 3, 4, 5, 6, 7];
        const day = days[ now.getDay() ];

        const stringGradeSemanal = await AsyncStorage.getItem('gradeSemanal');

        if(stringGradeSemanal !== null){

            const arrayGradeSemanal = JSON.parse(stringGradeSemanal);
            let aulasDia = arrayGradeSemanal.filter((dia: { diaSemana: number; }) => { return dia.diaSemana == day; });

            let horarioAula = aulasDia.map((Info, index) => ( Info.horario ));

            console.log(horarioAula);
        } */

        contTouch = contTouch * 1 + 1
        
        if(contTouch == 10){
            contTouch = 0;
            navigate('Basketball');
        }

    }

    function ArrowBackOrSignOut(){
        if(route.name !== 'HomeItens'){
            return (
                <BorderlessButton onPress={hudleGoBack} style={{padding: 6}}>
                    <Image source={backIcon} style={styles.arrowHeader} resizeMode="contain" />
                </BorderlessButton>
            );
        }else{
            return (
                <BorderlessButton onPress={hundleSignOut} style={{flexDirection: 'row'}}>
                    <Feather name="log-out" size={22} color="rgba(255, 255, 255, 0.6)" />
                    <Text style={{fontFamily: 'Poppins_400Regular', color: 'rgba(255, 255, 255, 0.6)',fontSize: 15, paddingLeft: 5}}>
                        Sair
                    </Text>
                </BorderlessButton>
            );
        }
        
    }

    return (
        <View style={[styles.container, {backgroundColor: backColor}]}>
            <ImageBackground resizeMode="cover" source={headerBackground} style={styles.headerBackground}>  
            <View style={styles.topBar}>
                
                <ArrowBackOrSignOut></ArrowBackOrSignOut>

                <BorderlessButton onPress={EasterEgg}>
                    <Image source={LogoImg} style={styles.imgHeader} resizeMode="contain" />
                </BorderlessButton>

            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{ title }</Text>
                { headerRight }
            </View>

            
            <Text style={styles.description}>{ children }</Text>
            
            </ImageBackground>
        </View>
    );
}

export default PageHeader;