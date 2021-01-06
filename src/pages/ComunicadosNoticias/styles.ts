import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const Card = styled.View`
    flex: 1;
`;

export const ButtonMaisNoticias = styled(RectButton)`
    height: 45px;
    width: 250px;
    background-color: ${props => props.theme.colors.azulPrimaryBtn};
    border-radius: 22px; 
    align-items: center;
    justify-content: center;
    margin: 0px auto 10px;
`;

export const ButtonTextMaisNoticias = styled.Text`
    font-family: 'Poppins_400Regular'; 
    color: ${props => props.theme.colors.azulPrimary};
    font-size: 16px;
    justify-content: center;
`;

export const Footer = styled.View`
    margin-top: 22px;
    justify-content: center;
    alignItems: center;
`;

export const FooterText = styled.Text`
    color: #DADADA;
    font-family: 'Poppins_400Regular';
    font-size: 14px;
`;