import { useEffect, useState } from 'react';
import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

export function Dashboard() {
  const [titleUfprnews, setTitleUfprnews] = useState<string | null>(null);
  const [abstractUfprnews, setAbstractUfprnews] = useState<string | null>(null);
  const [titleEd, setTitleEd] = useState<string | null>(null);
  const [abstractEd, setAbstractEd] = useState<string | null>(null);

  async function getData() {
    try {
      const responseUfpr = await fetch('/api/ufprnews');
      const dataUfpr = await responseUfpr.json();

      const responseEd = await fetch('/api/eletnews');
      const dataEd = await responseEd.json();

      setTitleUfprnews(dataUfpr.title);
      setAbstractUfprnews(dataUfpr.abstract);

      setTitleEd(dataEd.title);
      setAbstractEd(dataEd.abstract);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
    // Empty dependency array means this effect will only run once after the first render
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/fablab.jpg" alt="fablab" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/redess.jpg" alt="redess" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/QRCODE.png" alt="qrcode" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/forms.jpeg" alt="forms" height="100%" />
        </SwiperSlide>
      </Swiper>

      {/* Optionally, display fetched data */}
      {titleUfprnews && (
        <div>
          <h2>{titleUfprnews}</h2>
          <p>{abstractUfprnews}</p>
        </div>
      )}
      {titleEd && (
        <div>
          <h2>{titleEd}</h2>
          <p>{abstractEd}</p>
        </div>
      )}
    </>
  );
}
