import React, {useState, useEffect} from 'react';
import { View, ScrollView, Animated, Easing } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import CardsComunicados from '../../components/CardsComunicados';
import * as rssParser from 'react-native-rss-parser';


function ComunicadosNoticias() {
    const [feedPortal, setFeedPortal] = useState([])

    useEffect(() => {

        async function getRSSFeed(){
            
            const feed = await fetch('https://www.puc-campinas.edu.br/filtro/acontece-home/feed/')
    
            const response = await feed.text()
            const responseData = await rssParser.parse(response)
            // if(!!responseData){
                setFeedPortal(responseData.items)
            // }
        }

        getRSSFeed()

    }, []);

   function FeedNewsPortalPUC(){
        return(
            <View>
                {
                    feedPortal.map((Info, index) => (
                        <CardsComunicados key={index} title={Info.title} subject={Info.description} 
                        bodyText={Info.content.replace(/(<([^>]+)>)/gi, '')} link="https://puc-campinas.edu.br/noticias"
                    />))
                    /* {Info.link.map(linkUrl => linkUrl.url)} */
                }
            </View>
                  
        );
    }

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
                <FeedNewsPortalPUC />

            </Animated.ScrollView>
            
        </View>
    );
}

export default ComunicadosNoticias;