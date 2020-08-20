import React, {useState} from 'react';
import { View, ScrollView, Animated, Easing } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import CardsComunicados from '../../components/CardsComunicados';


function ComunicadosNoticias() {

    const [animaTop, setTop] = useState(new Animated.Value(150));

    Animated.timing(
        animaTop,
        {
            toValue: -60,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <View style={styles.container}>
            <PageHeader title="Notícias e Comunicados"></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <CardsComunicados title="O encantador de Orangotangos" subject="Jovem da PUC-Campinas se destaca" 
                    bodyText="A antiga técnica de encantamentos dos orangotangos foi desenvolvida pelo mestre Kunig Jong da Republica do Congo em 1963.
                    Gabriel Toledo vem aplicando as técnicas com os primatas locais e obtendo resultados impressionantes." 
                />
                <CardsComunicados title="Confraternização CLC" subject="Após o fim da pandemia, o CLC dará uma festa" 
                    bodyText="Os alunos dos cursos de Artes Visuais e jornalismo estão vendendo ingressos por 2kg de alimentos não perecíveis. A festa será 
                    após as 18h, no centro.
                    Apresentações de bandas e corais do CCA, cantinho da arte e apresentação teatral. Não haverá consumo de bebidas alcóolicas no local." 
                />

            </Animated.ScrollView>
            
        </View>
    );
}

export default ComunicadosNoticias;