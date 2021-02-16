import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Card = styled(RectButton)`
    flex: 1;
    background-color: ${props => props.theme.colors.cardsTable};
    width: 280px;
    height: 550px;
    border-radius: 12px;
    padding: 26px;
    justify-content: space-between;
    margin-left: 15px;
    margin-right: 10px;
`;

export const Codigos = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Ementa = styled.View`
    height: 150px;
    padding: 5px 0;
    margin-bottom: 8px;
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
    margin-bottom: 5px;
    color: ${props => props.theme.colors.verdeText};
`;

export const TextCard = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const TextBold = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 14px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const TextProf = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    text-transform: capitalize;
    color: ${props => props.theme.colors.cinzaText};
`;
