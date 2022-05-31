import { Container, Content } from "./styles"
import Clock from 'react-live-clock'
import Marquee from "react-fast-marquee";


import 'react-clock/dist/Clock.css';


export function Footer() {

    return (
        <Container>
            <Content>
                    <marquee style={{ color: 'black', fontSize: '1.5em'}}>
                        <strong> Horários Intercampi 01 (saída do Politécnico): </strong>
                        07:30, 08:30, 10:40, 11:35, 11:40, 13:20, 15:50, 18:35<strong> • </strong>
                        <strong> Horários Intercampi 02 (saída do Politécnico): </strong>
                        07:35, 10:40, 11:40, 13:15, 15:10, 17:40, 15:50, 18:35<strong> • </strong>
                        <strong> Horários Intercampi 04 (saída do Politécnico): </strong>
                        08:25, 10:40, 11:30, 15:10, 17:40
                    </marquee>
                
                <div>
                    <Clock format={'HH:mm'} ticking={true} timezone={'America/Sao_Paulo'} />
                </div>
            </Content>
        </Container>
    )
}