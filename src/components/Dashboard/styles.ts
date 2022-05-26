import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react'

export const Container = styled(Swiper) `
    background: white;
    height: calc(100vh - 15.96rem);

    h1 {
        padding: 1rem 2rem 2rem 2rem;
        font-size: 3rem;
        font-weight: bold;
    }

    p {
        padding: 0 2rem 2rem 2rem;
        margin-top: 3.5rem;
        font-size: 2.5rem;
    }

    img {
      width: 100%;
      align-items: center;
    }
    
`
