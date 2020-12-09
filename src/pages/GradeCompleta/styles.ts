import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const ContainerTable = styled.View`
    flex: 1;
`;

export const ContainerMap = styled.View`
    flex: 1;
    width: 90%;
    height: 400px;
    margin-top: 10px; 
    margin-horizontal: 20px; 
    border-radius: 16px; 
    overflow: hidden; 
`;

export const ModalHeader = styled(TouchableOpacity)`
    z-index: 9000;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 40px;
    background-color: rgba(248, 22, 41, 0.2);
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
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

export const InfoMap = styled.Text`
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
    color: ${props => props.theme.colors.azulPrimary};
    font-size: 18px;
    justify-content: center;
`;

export const ButtonLocation = styled(RectButton)`
    height: 20px;
    width: 250px;
    background-color: ${props => props.theme.colors.azulPrimaryBtn};
    border-radius: 18px; 
    padding-vertical: 20px;  
    align-items: center;
    justify-content: center;
    margin: 25px auto 0px;
`;

export const ButtonTextLocation = styled.Text`
    font-family: 'Poppins_400Regular'; 
    color: ${props => props.theme.colors.azulPrimary};
    font-size: 16px;
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
