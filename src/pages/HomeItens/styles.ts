import { RectButton } from 'react-native-gesture-handler';
import styled  from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const TitleChildren = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #fff;
    font-size: 14;
    line-height: 18;
    margin-bottom: 40;
    margin-top: -30;
    margin-left: 20;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    padding-horizontal: 32;
    padding-vertical: 15;
    align-items: center;
    justify-content: space-between;
`;

export const Badge = styled.Text`
    background-color: ${props => props.theme.colors.vermelho};
    width: 17;
    height: 17;
    color: #fff;
    padding-vertical: 4;
    padding-horizontal: 6;
    line-height: 9;
    border-radius: 24;
    top: -35;
    font-size: 9;
`;

export const Links = styled(RectButton)`
    width: 47%;
    max-height: 165; 
`;

export const Card = styled.View`
    width: 100%;
    height: 160;
    background-color: ${props => props.theme.colors.cardsTable};
    border-radius: 8;
    padding-horizontal: 8;
    padding-vertical: 35;
    align-items: center;
    justify-content: center; 
`;

export const Icon = styled.Image`
    height: 50;
    margin-bottom: 14; 
`;

export const TextCard = styled.Text`
    color: ${props => props.theme.colors.azulPrimary};
    font-family: 'Poppins_400Regular';
    font-size: 14;
    width: 120;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Footer = styled.View`
    margin-vertical: 12;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.Text`
    color: #DADADA;
    font-family: 'Poppins_400Regular';
    font-size: 14; 
`;

export const Logout = styled(RectButton)`
    height: 45;
    justify-content: center;
    align-items: center;
    margin-bottom: 25; 
`;

export const LoguotText = styled.Text`
    margin-vertical: 15;
    color: ${props => props.theme.colors.vermelho};
    font-family: 'Poppins_400Regular';
    font-size: 14;
`;


