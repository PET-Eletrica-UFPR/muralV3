import { useEffect, useState } from 'react';
import { Container, Content } from './styles';

interface HeaderProps {
    main: {
        temp: number,
        temp_min: number,
        temp_max: number
    }
}

export function Header() {
    const [data, setData] = useState<HeaderProps>();

    let lat = '-25.451044'
    let long = '-49.233127'

    useEffect(() => {
         fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=ad57e5ac1868710898196074310cc813`)
            .then(res => res.json())
            .then(result => {
              setData(result)
              console.log(result);
            });
    }, [])



    return(
        <Container>
            <Content>
                <img src="/logo.jpeg" alt="logo" width="200rem"/>
                <ul>
                    <li>
                        <img src="/weather.svg" alt="temperatura atual" width={128} />
                        <span>Temp Atual: <strong>33 ºC</strong></span>
                    </li>
                    <li>
                        <img src="/weather.svg" alt="temperatura minima" width={128}/>
                        <span>Temp Máx: <strong>35 ºC</strong></span>
                    </li>
                    <li>
                        <img src="/weather.svg" alt="temperatura máxima" width={128} />
                        <span>Temp Min: <strong>20 ºC</strong></span>
                    </li>
                </ul>
            </Content>
        </Container>
    )
}