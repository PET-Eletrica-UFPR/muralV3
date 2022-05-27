import { Container, Content } from './styles';
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import * as cheerio from  'cheerio';
import ReactHtmlParser from "react-html-parser";

export function Sidebar() {
    const [data, setData] = useState('')
    const [abstract, setAbstract] = useState('')

    async function getData() {
        const res = await fetch(`https://pra.ufpr.br/ru/ru-centro-politecnico/`)
        const htmlString = await res.text()
        const $ = cheerio.load(htmlString)
        const title = $('p').first().html()
        const abstract = $('table').first().html()

        setData(title)
        setAbstract(abstract)
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
                <span>{ReactHtmlParser(data)}</span>
                <p>{ReactHtmlParser(abstract)}</p>
            </Content>
        </Container>
    )
}