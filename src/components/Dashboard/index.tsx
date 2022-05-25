const cheerio = require('cheerio')
import { useEffect, useState } from 'react';
import {Container, Content} from './styles'

export function Dashboard() {

    const [data, setData] = useState()
    const [abstract, setAbstract] = useState()

    async function getData() {
      const res = await fetch(`https://www.ufpr.br/portalufpr/mais-noticias-sobre-gestao/`)
      const htmlString = await res.text()
      const $ = cheerio.load(htmlString)
      const title = $('.titulo').first().text()
      const abstract = $('div.chamada').first().text()

      setData(title)
      setAbstract(abstract)
    }

    useEffect(()=> {
      getData()
    })

    return (
      <Container>
         <Content>
            <span>{data}</span>
            <p>{abstract}</p>
        </Content>
      </Container>
      )
}


  

