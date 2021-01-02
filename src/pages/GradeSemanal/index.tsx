import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PageHeader from '../../components/PageHeader';
import TabViewScroll from '../../components/TabView';


import { Container, Footer, FooterText } from './styles';

  
function GradeSemanal() {    
    const { colors } = useContext(ThemeContext);

    return (
        
        <Container>
            <PageHeader title="Aulas da Semana" backColor={colors.headerAmarelo}></PageHeader>
            
                <TabViewScroll/>

            <Footer>
                <FooterText>
                    PUC-CAMPINAS
                </FooterText>
            </Footer>
            
        </Container>
    );
}

export default GradeSemanal;
