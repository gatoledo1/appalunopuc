import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.azulBack};
`;

export const Button = styled(RectButton)`
    height: 45px;
    width: 250px;
    background-color: #367DFF;s
    border-radius: 22px; 
    align-items: center;
    justify-content: center;
    margin: 20px auto 0;
`;

export const ButtonText = styled.Text`
    font-family: 'Poppins_400Regular'; 
    color: #fff;
    font-size: 17px;
    justify-content: center;
`;

export const BackgroungLogin = styled.ImageBackground`
    flex: 1;
    width: 100%;
    justifyContent: space-evenly;
`;

export const TitleChildren = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 40px;
    margin-top: -30px;
    margin-left: 20px;
`;

export const Title = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 15px;
    padding: 0 60px 10px;
    color: ${props => props.theme.colors.cinzaText};
    text-align: center;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Biometria = styled.TouchableOpacity`
    flex-direction: row;
    width: 210px;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
`;

export const FingerText = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    color: ${props => props.theme.colors.cinzaText};
    justify-content: center;
`;

export const Label = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    color: ${props => props.theme.colors.azulPrimary};

`;

export const Input = styled.TextInput`
    height: 40px; 
    font-size: 16px;
    justify-content: center; 
    padding: 0 16px; 
    width: 93%;
`;

export const PasswordContainer = styled.View`
    flex-direction: row;
    width: 70%;
`;



