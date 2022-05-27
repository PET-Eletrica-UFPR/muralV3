const cheerio = require('cheerio')
import { useEffect, useState } from 'react';
import {Container} from './styles'
import {  SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export function Dashboard() {

    const [data, setData] = useState()
    const [abstract, setAbstract] = useState()
    SwiperCore.use([Autoplay]);
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
      <>
        <Container
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><h1>{data}</h1> <p>{abstract}</p></SwiperSlide>
          <SwiperSlide><img src="/logo.jpeg" alt="qqchose" width={10} /></SwiperSlide>
        </Container>

      </>
      )
}


  

