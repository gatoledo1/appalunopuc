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

                <Image source={LogoImg} style={styles.imgHeader} resizeMode="contain" />
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