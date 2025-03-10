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
//https://github.com/PET-Eletrica-UFPR/muralV3/blob/main/src/components/Dashboard/index.tsx
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
          delay: 9000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src="/Videeo.jpg" alt="public/Videeo.jpg" height="100%" /></SwiperSlide>
        <SwiperSlide><img src="/fablab.jpg" alt="fablab" height="100%" /></SwiperSlide>
        <SwiperSlide><img src="/redess.jpg" alt="redess" height="100%" /></SwiperSlide>
        <SwiperSlide><img src="/QRCODE.png" alt="qrcode" height="100%" /></SwiperSlide>
        <SwiperSlide><img src="/forms.jpeg" alt="forms" height="100%" /></SwiperSlide>
        <SwiperSlide><img src="/dsasfa.jpg" alt="public/dsasfa.jpg" height="100%" /></SwiperSlide>
       
      </Container>

    </>
  )
}

