import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Card = styled(RectButton)`
    flex: 1;
    width: 300px;
    min-height: 210px;
    margin: 0 5px 0 20px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.cardsTable};
`;

export const ImgCard = styled.Image`
    width: 300px;
    height: 168px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const TextCard = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    padding-bottom: 5px;
    margin-right: 48px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const Content = styled.View`
    flex-direction: row;
    padding-top: 8px;
    padding-left: 10px;
    
    margin: auto 0;
    color: ${props => props.theme.colors.cinzaText};
`;
