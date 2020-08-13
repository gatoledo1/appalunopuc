import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import symbolPUC from '../../assets/images/symbol-logo-puc.png';


function CardsComunicados(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.imgProfile}>
                    <Image style={styles.avatar} source={symbolPUC} />
                </View>
        
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Gabriel Toledo</Text>
                    <Text style={styles.subject}>O encantador de Orangotangos</Text>
                </View>
            </View>

                <Text style={styles.bio}>
                    A técnica de encantamentos dos orangotangos foi desenvolvida pelo mestre Kunig Jong da Republica do Congo em 1963.
                    {'\n'}
                    Gabriel vem aplicando as técnicas com os primatas locais e obtendo resultados impressionantes.
                </Text> 

            <View style={styles.footer}>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartIcon} /> 
                       {/* <Image source={unfavoriteIcon} /> */}                  
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Text style={styles.contactButtonText}> Acessar</Text>                      
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default CardsComunicados;