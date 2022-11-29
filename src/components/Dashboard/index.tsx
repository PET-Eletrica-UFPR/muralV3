import { useEffect, useState } from 'react';
import { Container } from './styles'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export function Dashboard() {
  
  const [titleUfprnews, setTitleUfprnews] = useState()
  const [abstractUfprnews, setAbstractUfprnews] = useState()
  const [titleEd, setTitleEd] = useState()
  const [abstractEd, setAbstractEd] = useState()

  SwiperCore.use([Autoplay]);

  async function getData() {

    const response = await fetch('/api/ufprnews')
    const dataUfpr = await response.json()

    const responseEd = await fetch('/api/eletnews')
    const dataEd = await responseEd.json()

    setTitleUfprnews(dataUfpr.title)
    setAbstractUfprnews(dataUfpr.abstract)

    setTitleEd(dataEd.title)
    setAbstractEd(dataEd.abstract)
  }

  useEffect(() => {
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
        <SwiperSlide><h1>{titleUfprnews}</h1> <p>{abstractUfprnews}</p></SwiperSlide>
        <SwiperSlide><h1>{titleEd}</h1> <p>{abstractEd}</p></SwiperSlide>
        <SwiperSlide><img src="/fablab.jpg" alt="fablab" height="100%" /></SwiperSlide>
      </Container>

    </>
  )
}


