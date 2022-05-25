import { Container, Content } from './styles';
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export function Sidebar() {
    const [value, onChange] = useState(new Date())
    return (
        <Container>
            <div>
                <Calendar onChange={onChange} value={value} locale="pt-BR"/>
            </div>
            <Content>
                <div>
                </div>
            </Content>
        </Container>
    )
}