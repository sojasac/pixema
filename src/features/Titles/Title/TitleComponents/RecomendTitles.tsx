import { type MovieByIdResponse } from '~/store/api/titles/titles.types';

import RecomendStyles from './TitleComponents.module.scss';
import { TitleInRow } from './TitleInRow';

export const RecomendTitles = ({ title }: { title: MovieByIdResponse }) => {
  const { similarMovies: recomendations } = title;
  return (
    <div className={RecomendStyles.recomendWrap}>
      <h2>Recommendations</h2>
      <div className={RecomendStyles.recomendContent}>
        {recomendations.map((recomnation) => (
          <TitleInRow
            key={recomnation.id}
            id={recomnation.id}
            name={recomnation.name}
            poster={recomnation.poster.url}
          />
        ))}
      </div>
    </div>
  );
};
