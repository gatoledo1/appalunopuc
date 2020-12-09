import React from 'react';
import { Linking } from 'react-native';

import { Container, HeaderText, Title, LinhaFina, Resumo, Footer, FavoriteButton, 
    Favorited, ButtonsContainer, ButtonLerMais, ButtonText } from './styles';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import symbolPUC from '../../assets/images/symbol-logo-puc.png';

interface CardsComunicadosProps {
    title: string;
    subject: string;
    bodyText: string;
    link: string;
}

const CardsComunicados: React.FC<CardsComunicadosProps> = ({ title, subject, bodyText, link }) => {
    return (
        <Container>

                <HeaderText>
                    <Title>{ title }</Title>
                    <LinhaFina>{  subject }</LinhaFina>
                </HeaderText>


                <Resumo>
                    { bodyText }
                </Resumo> 

            <Footer>
                <ButtonsContainer>
                   {/* <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartIcon} /> 
                        <Image source={unfavoriteIcon} />           
                    </RectButton> */}

                    <ButtonLerMais
                    onPress={() => {
                        Linking.openURL(
                          link
                        );
                    }}>
                        <ButtonText> Ler mais</ButtonText>                      
                    </ButtonLerMais>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
}

export default CardsComunicados;