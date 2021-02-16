import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const Content = styled.View`
    margin-top: -80px;
`;

export const Footer = styled.View`
    justify-content: center;
    alignItems: center;
`;

export const FooterText = styled.Text`
    color: #DADADA;
    font-family: 'Poppins_400Regular';
    font-size: 14px;
`;

