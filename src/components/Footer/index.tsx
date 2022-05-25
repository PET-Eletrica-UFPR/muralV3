import { Container, Content } from "./styles"
import Clock from 'react-live-clock'

import 'react-clock/dist/Clock.css';


export function Footer() {



    return (
        <Container>
            <Content>
                    <marquee style={{ color: 'black', fontSize: '1.5em'}}>
                        Horários Intercampi (saída do Politécnico):  
                        07:35, 08:30, 10:40, 11:35, 11:40
                    </marquee>
                
                <div>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Sao_Paulo'} />
                </div>
            </Content>
        </Container>
    )
}