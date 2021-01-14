import React, { useRef, useContext } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { View } from 'react-native';
import { CardItem, Icon, TitleItem, TextItem, TextData } from './styles';
import AuthContext from '../../../Contexts/auth';

interface CardsNotifyProps {
    title: string;
    subject: string;
    bodyText?: string;
    data: string;
    visualizada: boolean;
    codigo: number;
}

const CardsNotify: React.FC<CardsNotifyProps> = ({ title, subject, bodyText, data, visualizada, codigo }) => {

    const { VisualizarNotificacao } = useContext(AuthContext);

    function IconView() {
        if(visualizada == true){
            return(
                <Icon style={{ backgroundColor: 'rgba(190, 190, 190, 0.3)' }}>
                    <Feather name="info" size={24} color="#777" />
                </Icon>
            );
        }else{
            return(
                <Icon style={{ backgroundColor: 'rgba(0, 92, 64, 0.3)' }}>
                    <Feather name="info" size={24} color="#2CC272" />
                </Icon>
            );
        }
    }

    return (
        <CardItem onPress={() => { VisualizarNotificacao( title, subject, data, codigo ) }}>
            <View>
                <IconView />
                <TitleItem> { title } </TitleItem>
                <TextItem> { bodyText } </TextItem>
                <TextData> { data } </TextData>
            </View>
        </CardItem>
    );
}

export default CardsNotify;