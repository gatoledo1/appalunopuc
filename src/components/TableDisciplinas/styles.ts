import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Card = styled(RectButton)`
    flex: 1;
    background-color: ${props => props.theme.colors.cardsTable};
    width: 260px;
    height: 400px;
    border-radius: 12px;
    padding: 26px;
    justify-content: space-between;
    margin-horizontal: 15px;
`;

export const Codigos = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const CodText = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 12px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const TitleCard = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const TextCard = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const TextProf = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.cinzaText};
`;
