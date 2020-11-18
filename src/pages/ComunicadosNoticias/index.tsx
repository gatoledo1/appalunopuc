import React, {useState, useEffect} from 'react';
import { View, ScrollView, Animated, Easing, ActivityIndicator } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import CardsComunicados from '../../components/CardsComunicados';
import * as rssParser from 'react-native-rss-parser';


function ComunicadosNoticias() {
    const [feedPortal, setFeedPortal] = useState([])
    const [load, setLoad] = useState(true);

    useEffect(() => {

        async function getRSSFeed(){
            
            const feed = await fetch('https://www.puc-campinas.edu.br/filtro/acontece-home/feed/')
    
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
            <View>
                {
                    feedPortal.map((Info, index) => (
                        <CardsComunicados key={index} title={Info.title} subject={Info.description} 
                        bodyText={Info.content.replace(/(<([^>]+)>)/gi, '').replace(/(^\s+|\s+$)/g, '').substring(0, 240) + " . . . leia mais"} 
                        link={Info.id}
                    />))
                }
            </View>
                  
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
        <View style={styles.container}>
            <PageHeader title="Notícias e Comunicados" backColor="#ca1313"></PageHeader>
            
            <Animated.ScrollView style={{ marginTop: animaTop }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <FeedNewsPortalPUC />
                <ActivityIndicator animating={load} size="large" color="#367DFF" style={styles.activityIndicator} />

            </Animated.ScrollView>
            
        </View>
    );
}

export default ComunicadosNoticias;