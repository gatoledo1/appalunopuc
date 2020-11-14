import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const ContainerTable = styled.View`
    flex: 1;
`;

export const Cards = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`;

export const TableHead = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #fff;
    font-size: 18px;
    padding-left: 15px;
    padding-vertical: 8px;
`;

export const TableHead2 = styled.Text`
    font-family: 'Poppins_400Regular';
    color: ${props => props.theme.colors.cinzaText};
    font-size: 13px;
    padding-top: 32px;
    margin-horizontal: 25px;
    padding-bottom: 30px;
    text-align: justify;
`;

export const ArrowRotate = styled.Image`
    transform: rotate(180deg);
    margin-right: 30px;
`;

export const Head = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-horizontal: 8px;
`;

export const Button = styled(RectButton)`
    height: 24px;
    background-color: ${props => props.theme.colors.azulPrimaryBtn};
    border-radius: 25px; 
    padding: 24px; 
    align-items: center;
    justify-content: center;
    margin-horizontal: 30px;
`;

export const ButtonText = styled.Text`
    font-family: 'Poppins_400Regular'; 
    color: #FFF;
    font-size: 18px;
    justify-content: center;
`;

export const Footer = styled.View`
    margin-top: 22px;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.Text`
    color: #DADADA;
    font-family: 'Poppins_400Regular';
    font-size: 14px;
`;
