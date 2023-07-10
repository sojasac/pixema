import { type PropsWithChildren } from 'react';

import { Scrollbar, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/scss';
import 'swiper/css/scrollbar';
import { Button } from '../button/Button';
export const SwiperButtonNext = ({ children }: PropsWithChildren) => {
  const swiper = useSwiper();
  return (
    <Button
      apperance="secondary"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </Button>
  );
};
export const SwiperButtonPrevious = ({ children }: PropsWithChildren) => {
  const swiper = useSwiper();
  return (
    <Button
      apperance="secondary"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </Button>
  );
};

export const SwiperComponent = ({
  slides,
  name
}: {
  slides: JSX.Element[];
  name: string;
}) => {
  return (
    <Swiper
      modules={[Scrollbar, Navigation]}
      spaceBetween={50}
      slidesPerView={5}
      pagination={{ clickable: true }}
      style={{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column-reverse'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>{name}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <SwiperButtonPrevious>ddd</SwiperButtonPrevious>
          <SwiperButtonNext>sss</SwiperButtonNext>
        </div>
      </div>
      {slides.map((slide, id) => (
        <SwiperSlide
          key={id}
          style={{ minHeight: '400px' }}
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
