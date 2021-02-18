import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

let tablet;
const window = Dimensions.get("window");

if(window.width >= 768){
    tablet = true;  
}

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const TitleChildren = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 40px;
    margin-top: -30px;
    margin-left: 20px;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px 32px 15px 32px;
    align-items: center;
    justify-content: space-between;
`;

export const Badge = styled.Text`
    background-color: ${props => props.theme.colors.vermelho};
    width: 17px;
    height: 17px;
    color: #fff;
    padding-vertical: 4px;
    padding-horizontal: 6px;
    line-height: 10px;
    border-radius: 24px;
    top: -35px;
    font-size: 10px;
`;

export const Links = styled(RectButton)`
    width: ${tablet ? '32%' : '47%'}
    max-height: 165px; 
    margin-bottom: 20px;
`;

export const Card = styled.View`
    width: 100%;
    height: 160px;
    background-color: ${props => props.theme.colors.cardsTable};
    border-radius: 8px;
    padding-horizontal: 8px;
    padding-vertical: 35px;
    align-items: center;
    justify-content: center; 
`;

export const Icon = styled.Image`
    height: 50px;
    margin-bottom: 14px; 
`;

export const TextCard = styled.Text`
    color: ${props => props.theme.colors.azulPrimary};
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    width: 120px;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Footer = styled.View`
    margin-vertical: 12px;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.Text`
    color: #DADADA;
    font-family: 'Poppins_400Regular';
    font-size: 14px; 
`;

export const Logout = styled(RectButton)`
    height: 45px;
    width: 180px;
    justify-content: center;
    margin: 25px auto 32px;
    align-items: center;
    background-color: rgba(248, 22, 41, 0.07);
    border-radius: 22px;
`;

export const LoguotText = styled.Text`
    color: ${props => props.theme.colors.vermelho};
    font-family: 'Poppins_400Regular';
    font-size: 14px;
`;


