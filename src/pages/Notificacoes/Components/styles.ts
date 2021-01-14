import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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
  font-size: 13px;
  line-height: 22px;
  flex: 1;
`;

export const TextData = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${props => props.theme.colors.cinzaText};
  font-size: 11px;
  text-align: right;
  line-height: 25px;
`;