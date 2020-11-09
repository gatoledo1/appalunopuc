import React, { useContext } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, Image, Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from 'styled-components';
import PageHeader from '../../components/PageHeader';
import TabViewScroll from '../../components/TabView';


import { Container, Footer, FooterText } from './styles';

  
function GradeSemanal() {    
    const { colors } = useContext(ThemeContext);

    return (
        
        <Container>
            <PageHeader title="Grade Semanal" backColor={colors.headerAmarelo}></PageHeader>
            
                <TabViewScroll/>
            
        </Container>
    );
}

export default GradeSemanal;
