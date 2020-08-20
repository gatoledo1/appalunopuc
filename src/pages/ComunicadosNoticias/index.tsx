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
            toValue: -70,
            duration: 800,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <View style={styles.container}>
            <PageHeader title="Notícias e Comunicados" backColor="#ca1313"></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <CardsComunicados title="PUC-Campinas divulga protocolos sanitários e de proteção" subject="Medidas são, neste momento, somente para os estudantes de Enfermagem, Farmácia, Fisioterapia, Odontologia e em internato da Medicina" 
                    bodyText="A PUC-Campinas divulga os protocolos sanitários e de proteção adotados em seus campi. 
                    Essas orientações são destinadas, neste momento, somente a funcionários, professores e estudantes concluintes dos Cursos de Enfermagem, Farmácia, Fisioterapia, Odontologia e em internato da Medicina, envolvidos nas aulas práticas, clínicas, ambulatórios e estágios supervisionados. 
                    Todos os outros estudantes da Universidade continuarão em atividades remotas." 
                />
                <CardsComunicados title="Universidade inicia série de webinários voltados ao diálogo sobre o racismo" subject="Palestra do dia 20 de agosto, on-line e aberta ao público, inaugura projeto que visa debater o racismo nos diversos espaços sociais" 
                    bodyText="O webinário “Os reflexos no Brasil da Conferência de Durban 19 anos depois: entre a intenção e o gesto”, que será realizado no próximo dia 20 de agosto, às 18h, por meio do YouTube, inicia um projeto da PUC-Campinas dedicado ao diálogo sobre o racismo. 
                    Debates gratuitos e abertos ao público serão promovidos ao longo do semestre, possibilitando aos estudantes e à sociedade uma profunda reflexão sobre a questão étnico-racial." 
                />

            </Animated.ScrollView>
            
        </View>
    );
}

export default ComunicadosNoticias;