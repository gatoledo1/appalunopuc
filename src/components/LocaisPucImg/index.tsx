import React, { useContext } from 'react';
import AuthContext from '../../Contexts/auth';
import { Card, ImgCard, TextCard, Content } from './styles';
import { Entypo } from '@expo/vector-icons';
 
interface ArrayImagensCampi {
  id: number;
  nome: string;
  latitude: string;
  longitude: string;
  imagem: string;
}

const ImagemCards: React.FC<ArrayImagensCampi> = ({ id, nome, latitude, longitude, imagem }) => {
  
  const { localizacaoSala } = useContext(AuthContext);

  return (
        <Card onPress={
          ()=>{ localizacaoSala(latitude, longitude); }
        }>

          <ImgCard source={ imagem }></ImgCard>
          <Content>
            <Entypo name="location-pin" size={20} color="#999" />
            <TextCard>{ nome } </TextCard>
            <Entypo name="dots-three-vertical" style={{position: 'absolute', right: 7, top: 10}} size={18} color="#999" />
          </Content>
          
        </Card>
  )
}

export default ImagemCards;



