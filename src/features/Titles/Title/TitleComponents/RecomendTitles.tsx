import { SwiperComponent } from '~/shared/ui/swiper/Swiper';
import { type MovieResponse } from '~/store/api/titles/titles.types';

import RecomendStyles from './TitleComponents.module.scss';
import { TitleInRow } from './TitleInRow';

export const RecomendTitles = ({ title }: { title: MovieResponse }) => {
  const { similarMovies: recomendations } = title;
  return (
    <div
      className={RecomendStyles.recomendWrap}
      style={{ overflow: 'hidden', maxWidth: '100%' }}
    >
      <SwiperComponent
        slides={recomendations.map((recomnation) => (
          <TitleInRow
            key={recomnation.id}
            id={recomnation.id}
            name={recomnation.name}
            poster={recomnation.poster.url}
          />
        ))}
        name="Recomendations"
      />
    </div>
  );
};
