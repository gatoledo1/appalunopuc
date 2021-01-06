import React, {useState, useEffect, useContext} from 'react';
import { View, ScrollView, Animated, Easing, ActivityIndicator, Linking } from 'react-native';
import { Container, Card, ButtonMaisNoticias, ButtonTextMaisNoticias, Footer, FooterText } from './styles';
import PageHeader from '../../components/PageHeader';
import CardsComunicados from '../../components/CardsComunicados';
import * as rssParser from 'react-native-rss-parser';
import { ThemeContext } from 'styled-components';


function Eventos() {
    const [feedPortal, setFeedPortal] = useState([])
    const [load, setLoad] = useState(true);
    const { colors } = useContext(ThemeContext);

    useEffect(() => {

        async function getRSSFeed(){
            
            const feed = await fetch('https://www.puc-campinas.edu.br/?call_custom_simple_rss=1&csrp_posts_per_page=6&csrp_orderby=date&csrp_order=DESC')
    
            const response = await feed.text()
            const responseData = await rssParser.parse(response)
            // if(!!responseData){
                setFeedPortal(responseData.items)
            // }
            setLoad(false);
        }

        getRSSFeed()

    }, []);
    

   function FeedNewsPortalPUC(){
        return(
            <Card>
                {
                    feedPortal.map((Info, index) => (
                        <CardsComunicados key={index} title={Info.title}
                        bodyText={Info.content.replace(/(<([^>]+)>)/gi, '').replace(/(^\s+|\s+$)/g, '').substring(0, 240) + "  . . . leia mais"} 
                        link={Info.id}
                    />))
                }
            </Card>
                  
        );
    }

    const [animaTop, setTop] = useState(new Animated.Value(0));

    Animated.timing(
        animaTop,
        {
            toValue: -90,
            duration: 800,
            delay: 100,
            easing: Easing.bezier(0.33, 1, 0.68, 1),
            useNativeDriver: false
        }
    ).start();

    return (
        <Container>
            <PageHeader title="Eventos PUC-Campinas" backColor={colors.headerLaranja}></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <FeedNewsPortalPUC />
                <ActivityIndicator animating={load} size="large" color="#367DFF" />

                <ButtonMaisNoticias onPress={() => {
                    Linking.openURL(
                    'https://www.puc-campinas.edu.br/eventos/'
                    );
                }}>
                    <ButtonTextMaisNoticias>Todos os eventos</ButtonTextMaisNoticias>
                
                </ButtonMaisNoticias>

                <Footer>
                    <FooterText>
                        PUC-CAMPINAS
                    </FooterText>
                </Footer>

            </Animated.ScrollView>
            
        </Container>
    );
}

export default Eventos;