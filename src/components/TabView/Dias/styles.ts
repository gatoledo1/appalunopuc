import styled from 'styled-components/native'

export const Container = styled.View`
    padding-horizontal: 16px;
    margin-vertical: 12px;
`;

export const Content = styled.View`
    padding-left: 12px;
    flex: 1;
`;

export const Card = styled.View`
    padding: 20px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.cardsTable};
`;

export const Grid = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const Row = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 14px;
    color: ${props => props.theme.colors.cinzaText};
    text-transform: capitalize;
`;

export const Texto = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    color: ${props => props.theme.colors.cinzaText};
`;

export const Footer = styled.View`
    margin-top: 22px;
    justify-content: center;
    align-items: center;
`;

export const FooterText = styled.Text`
    color: #DADADA,
    font-family: 'Poppins_400Regular',
    font-size: 14px,
`;