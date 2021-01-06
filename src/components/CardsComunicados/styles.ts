import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.colors.cardsTable};
    border-radius: 12px;
    margin-bottom: 25px; 
    overflow: hidden;
`;

export const HeaderText = styled.View`
    padding: 24px; 
    width: 100%;
`;

export const Title = styled.Text`
    font-family: 'Poppins_600SemiBold';
    color: ${props => props.theme.colors.cinzaText};
    font-size: 18px;
`;

export const LinhaFina = styled.Text`
    font-family: 'Poppins_400Regular';
    color: ${props => props.theme.colors.cinzaText};
    font-size: 12px;
    max-width: 100%;
`;

export const Resumo = styled.Text`
    font-family: 'Poppins_400Regular';
    color: ${props => props.theme.colors.cinzaText};
    font-size: 13px;
    margin-horizontal: 24px;
    line-height: 27px;
    text-align: left;
`;

export const Footer = styled.View`
    padding-horizontal: 24px;
    padding-bottom: 32px; 
    align-items: stretch;
    margin-top: 22px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const FavoriteButton = styled.View`
    background-color: ${props => props.theme.colors.cinzaText};
    width: 42px; 
    height: 42px;
    border-radius: 25px;
    justify-content: center; 
    align-items: center;
`;

export const Favorited = styled.View`
    background-color: ${props => props.theme.colors.vermelho};
`;


export const ButtonLerMais = styled(RectButton)`
    background-color: rgba(244, 187, 0, 0.2);
    width: 130px;
    height: 42px;
    border-radius: 25px; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #FFC300;
    font-family: 'Poppins_600SemiBold'; 
    font-size: 16px;
`;
