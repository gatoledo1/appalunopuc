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

export const CardItem = styled(RectButton)`
    flex: 1;
    background-color: ${props => props.theme.colors.cardsTable};
    margin-bottom: 20px;
    padding-horizontal: 20px;
    padding-vertical: 15px;
    border-radius: 20px;
`;

export const Icon = styled.View`
  border-top-left-radius: 20px; 
  border-bottom-right-radius: 14px;
  background-color: ${props => props.theme.colors.verdeIcon}; 
  padding: 12px;
  position: absolute; 
  left: -20px; 
  top: -15px;
`;

export const TitleItem = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: ${props => props.theme.colors.cinzaText};
  font-size: 15px;
  padding-left: 40px;
  line-height: 25px;
  flex: 1;
`;

export const TextItem = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${props => props.theme.colors.cinzaText};
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 13px;
  line-height: 25px;
  flex: 1;
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
