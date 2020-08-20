import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import symbolPUC from '../../assets/images/symbol-logo-puc.png';

interface CardsComunicadosProps {
    title: string;
    subject: string;
    bodyText: string;
}

const CardsComunicados: React.FC<CardsComunicadosProps> = ({ title, subject, bodyText }) => {
    return (
        <View style={styles.container}>

                <View style={styles.profileInfo}>
                    <Text style={styles.title}>{ title }</Text>
                    <Text style={styles.subject}>{  subject }</Text>
                </View>


                <Text style={styles.bio}>
                    { bodyText }
                </Text> 

            <View style={styles.footer}>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartIcon} /> 
                       {/* <Image source={unfavoriteIcon} /> */}                  
                    </RectButton>

                    <RectButton style={styles.contactButton}
                    onPress={() => {
                        Linking.openURL(
                          'https://www.puc-campinas.edu.br/puc-campinas-divulga-protocolos-sanitarios-e-de-protecao/'
                        );
                    }}>
                        <Text style={styles.contactButtonText}> Ler mais</Text>                      
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default CardsComunicados;