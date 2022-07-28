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

      const response = await fetch('/api/ufprnews')
      const data = await response.json()

      setData(data.title)
      setAbstract(data.abstract)
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
          <SwiperSlide><img src="/fablab.jpeg" alt="fablab" height="100%"/></SwiperSlide>
          <SwiperSlide><img src="/4.png" alt="4.png" height="100%"/></SwiperSlide>
          <SwiperSlide><img src="/5.png" alt="5.png" height="100%"/></SwiperSlide>
          <SwiperSlide><img src="/6.png" alt="6.png" height="100%"/></SwiperSlide>
          <SwiperSlide><img src="/7.png" alt="7.png" height="100%"/></SwiperSlide>
        </Container>

      </>
      )
}


  

