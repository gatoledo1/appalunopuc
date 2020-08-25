import React, { ReactNode } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIcon from '../../assets/images/icons/arrow.png';
import headerBackground from '../../assets/images/back-header.png';
import LogoImg from '../../assets/images/header-puc-campinas.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    backColor: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backColor, headerRight, children }) => {

    const { navigate } = useNavigation();

    function hudleGoBack() {
        navigate('HomeItens');
    }

    return (
        <View style={[styles.container, {backgroundColor: backColor}]}>
            <ImageBackground resizeMode="cover" source={headerBackground} style={styles.headerBackground}>  
            <View style={styles.topBar}>
                <BorderlessButton onPress={hudleGoBack}>
                    <Image source={backIcon} style={styles.arrowHeader} resizeMode="contain" />
                </BorderlessButton>

                <Image source={LogoImg} style={styles.imgHeader} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{ title }</Text>
                { headerRight }
            </View>

            
            { children }
            
            </ImageBackground>
        </View>
    );
}

export default PageHeader;