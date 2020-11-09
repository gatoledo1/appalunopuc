import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Content, Card, Grid, Title, Texto, Footer, FooterText } from './styles';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../../PageHeader/styles';

interface GradeSegundaProps {
    frequencia: number;
    materia: string;
    horario: string;
    local: string;
    data: string;
    atualizacao: string;

}

const ItensGradeSemanal: React.FC<GradeSegundaProps> = ({ frequencia, materia, horario, local, data, atualizacao }) => {
    
    const { colors } = useContext(ThemeContext);
    return(
        <Container>
                
                <Card>
                    <Grid>
                        <ProgressCircle percent={frequencia} radius={40} borderWidth={8} color={frequencia >= 70 ? '#2CC272' : '#367DFF'} 
                            shadowColor="#e5efff" bgColor={colors.cardsTable}>
                            <Texto>{ frequencia }%</Texto>
                        </ProgressCircle>

                        <Content>
                            <Title> { materia } </Title>
                            <Texto style={{fontFamily: 'Poppins_600SemiBold', color: '#367DFF'}}> { horario } </Texto>
                            <Texto>
                                { local } {'\n'}
                                { data } {'\n'}{'\n'}
                                <Texto style={{fontSize: 10}}> { atualizacao } </Texto>
                            </Texto>
                        </Content>
                    </Grid>
                
                </Card>

        </Container>
    );
}

export default ItensGradeSemanal;

