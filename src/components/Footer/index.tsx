import { Container, Content } from "./styles"
import Clock from 'react-live-clock'
import Marquee from "react-fast-marquee";


import 'react-clock/dist/Clock.css';


export function Footer() {

    return (
        <Container>
            <Content>
                    <Marquee gradient= {false} style={{ padding: 0, fontSize: 2,}}>
                       Horários Intercampi 01 (saída do Politécnico): &nbsp;
                        07:30, &nbsp;08:30, &nbsp;10:40, &nbsp;11:35, &nbsp;11:40, &nbsp;13:20, &nbsp;15:50, &nbsp;18:35 &nbsp; • &nbsp;   
                         Horários Intercampi 02 (saída do Politécnico): &nbsp;
                        07:35, &nbsp;10:40, &nbsp;11:40, &nbsp;13:15, &nbsp;15:10, &nbsp;17:40, &nbsp;15:50, &nbsp;18:35 &nbsp; • &nbsp; 
                        Horários Intercampi 04 (saída do Politécnico): &nbsp;
                        08:25, &nbsp;10:40, &nbsp;11:30, &nbsp;15:10, &nbsp;17:40
                    </Marquee>
                
                <div>
                    <Clock format={'HH:mm'} ticking={true} timezone={'America/Sao_Paulo'} />
                </div>
            </Content>
        </Container>
    )
}