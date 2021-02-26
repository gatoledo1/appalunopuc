import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Content, Card, Grid, Title, Texto, Row, Footer, FooterText } from './styles';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../../PageHeader/styles';

interface GradeSegundaProps {
    frequencia: number;
    codigo: string;
    materia: string;
    horario: string;
    local: string;
    data: string;
    atualizacao: string;

}

const ItensGradeSemanal: React.FC<GradeSegundaProps> = ({ frequencia, codigo, materia, horario, local, data, atualizacao }) => {
    
    const { colors } = useContext(ThemeContext);

    if(frequencia == undefined){
        frequencia = 0;
    }
    if(atualizacao == 'Frequência atualizada: undefined'){
        atualizacao = "Frequência não atualizada"
    }

    let aulaTipo = 'Aula Teórica';

    if( codigo != undefined){
        if(codigo.indexOf("P") != -1){
            aulaTipo = "Aula Prática";
        }
    }

    return(
        <Container>
                
                <Card>
                    <Grid>
                        <Row>
                            <ProgressCircle percent={frequencia} radius={40} borderWidth={8} color={frequencia >= 70 ? '#2CC272' : '#367DFF'} 
                                shadowColor="#e5efff" bgColor={colors.cardsTable}>
                                <Texto>{ frequencia }%</Texto>
                            </ProgressCircle>
                            <Texto style={{fontSize: 10, paddingTop: 10}}>{ aulaTipo }</Texto>
                        </Row>
                        <Content>
                            <Title>{ materia }</Title>
                            <Texto style={{fontFamily: 'Poppins_600SemiBold', color: '#367DFF'}}>{ horario }</Texto>
                            <Texto>{ local }</Texto>
                            <Texto style={{fontSize: 12}}>{ data }</Texto>
                            <Texto style={{fontSize: 10}}>{ atualizacao }</Texto>
                        </Content>
                    </Grid>
                
                </Card>

        </Container>
    );
}

export default ItensGradeSemanal;

