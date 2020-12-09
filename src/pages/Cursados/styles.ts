import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const Card = styled.View`
    padding-vertical: 20px;
    background-color: ${props => props.theme.colors.cardsTable};
    border-radius: 12px; 
    margin-bottom: 25px; 
    overflow: hidden;
`;

export const Ano = styled.Text`
    padding-horizontal: 24px;
    font-family: 'Poppins_600SemiBold';
    color: #367DFF;
    font-size: 20px;
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


