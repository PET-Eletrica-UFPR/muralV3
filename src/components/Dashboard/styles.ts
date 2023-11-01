import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react'

export const Container = styled(Swiper) `
    background: black;
    height: calc(100vh - 15.96rem);

    h1 {
        padding: 1rem 2rem 2rem 2rem;
        font-size: 4rem;
        font-weight: bolder;
        color: #ffd230;
    }

    p {
        padding: 0 2rem 2rem 2rem;
        margin-top: 3.5rem;
        font-size: 3.5rem;
        color: #FFFFFF;
    }

    img {
      width: 100%;
      align-items: center;
    }
    
`
