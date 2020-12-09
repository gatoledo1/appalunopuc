import styled from 'styled-components/native';

export const Container = styled.View`
    padding-horizontal: 24px;
`;

export const Horas = styled.Text`
    font-family: 'Poppins_400Regular';
    color: ${props => props.theme.colors.cinzaText};
    font-size: 13px;
    padding-bottom: 18px;   
`;

export const Ano = styled.Text`
    padding-top: 16px;
    font-family: 'Poppins_600SemiBold';
    color: ${props => props.theme.colors.azulPrimary};
    font-size: 14px;
    line-height: 27px;
`;

export const Title = styled.Text`
    font-family: 'Poppins_600SemiBold';
    color: ${props => props.theme.colors.cinzaText};
    font-size: 14px;
    line-height: 27px;
    text-transform: capitalize;
`;

export const Condicao = styled.Text`
    font-family: 'Poppins_400Regular_Italic';
    color: ${props => props.theme.colors.azulPrimary};
    font-size: 14px;
`;

export const Footer = styled.View`
    padding-horizontal: 24px;
    padding-bottom: 32px; 
    align-items: stretch;
    margin-top: 22px;
`;

    

