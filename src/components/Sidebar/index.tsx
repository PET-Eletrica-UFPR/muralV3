import { Container, Content } from './styles';
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ReactHtmlParser from "react-html-parser";

export function Sidebar() {
    const [day, setDay] = useState('')
    const [menu, setMenu] = useState('')

    async function getData() {
        const response = await fetch('/api/menu')
        const data = await response.json()
    
        setDay(data.day)
        setMenu(data.menu)
    }

    useEffect(()=> {
      getData()
    })

    const [value, onChange] = useState(new Date())
    return (
        
        <Container>
            <div>
                <Calendar onChange={onChange} value={value} locale="pt-BR"/>
            </div>
            <Content>
                <span>{ReactHtmlParser(day)}</span>
                <p>{ReactHtmlParser(menu)}</p>
            </Content>
        </Container>
    )
}