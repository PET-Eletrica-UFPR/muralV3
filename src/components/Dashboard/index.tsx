const cheerio = require('cheerio')
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Container} from './styles'


interface DashboardProps {
    title: string;
}

export function Dashboard(props) {

    const [data, setData] = useState()

    function getData() {
      const res = fetch('/api/scraper')
      console.log(res)
    }

    useEffect(()=> {
      getData()
    })

    return (
        <div>
          <main >
            <div>Latest Comic: {props.title}</div>
            <div>Last scraped: {props.lastScraped}</div>
          </main>
        </div>
      )
}


  

