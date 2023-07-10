import { type PropsWithChildren, type ReactElement } from 'react';

import { Scrollbar, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { ReactComponent as ArrowLeft } from '~/assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '~/assets/svg/arrow-right.svg';

import 'swiper/scss';
import 'swiper/css/scrollbar';
import { Button } from '../button/Button';
export const SwiperButtonNext = ({
  children,
  icon = null
}: { icon?: ReactElement | null } & PropsWithChildren) => {
  const swiper = useSwiper();
  return (
    <Button
      apperance="secondary"
      onClick={() => swiper.slideNext()}
      icon={icon}
      style={{ width: 'fit-content', background: 'none' }}
    >
      {children}
    </Button>
  );
};
export const SwiperButtonPrevious = ({
  children,
  icon = null
}: { icon?: ReactElement | null } & PropsWithChildren) => {
  const swiper = useSwiper();
  return (
    <Button
      apperance="secondary"
      onClick={() => swiper.slidePrev()}
      icon={icon}
      style={{ width: 'fit-content', background: 'none' }}
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
          <SwiperButtonPrevious icon={<ArrowLeft />} />
          <SwiperButtonNext icon={<ArrowRight />} />
        </div>
      </div>
      {slides.map((slide, id) => (
        <SwiperSlide key={id}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
