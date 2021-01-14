import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const List = styled.View`
  padding-horizontal: 20px;
  padding-bottom: 60px;
`;

export const ModalContainer = styled.View`
  padding: 50px 20px 160px;
  flex: 1;
`;

export const ModalTitulo = styled.Text`
  color: ${props => props.theme.colors.cinzaText};
  font-family: 'Poppins_600SemiBold';
  font-size: 18px;
  padding-bottom: 10px;
`;

export const ModalText = styled.Text`
  color: ${props => props.theme.colors.cinzaText};
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 25px;
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
