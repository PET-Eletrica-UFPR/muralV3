import { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import Clock from 'react-live-clock'


import 'react-clock/dist/Clock.css';

interface HeaderProps {
   current: {
       temp: number,
       weather: {
           icon: string,
       }
   }

   daily: {}
}

export function Header() {
    
    const [data, setData] = useState<HeaderProps>();

    let lat = '-25.451044'
    let long = '-49.233127'

/*
    async function getWeather() {

        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=-25.451044&lon=-49.233127&units=metric&lang=pt_br&exclude=hourly,minutely&appid=ad57e5ac1868710898196074310cc813`)
        .then(res => res.json())
        .then(result => {
        setData(result)
        console.log(result)
    })

    }
    const id = '02d'
    useEffect(() => {
         getWeather()
    }, [])
   */

    return(
        <Container>
            <Content>
                <img src="/logo.jpeg" alt="logo" width="200rem"/>
                <ul>
                    <li>
                        <img src='/clock.png' alt="horas" width={80} />
                        <span>Horário: <strong><Clock format={'HH:mm'} ticking={true} timezone={'America/Sao_Paulo'} style={{ fontWeight: 'bolder'}} /></strong></span>
                    </li>
                     

                </ul>
            </Content>
        </Container>
    )
}
