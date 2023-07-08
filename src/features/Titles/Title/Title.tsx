import classNames from 'classnames';

import { ReactComponent as FavoritesIcon } from '~/assets/svg/favorites.svg';
import { ReactComponent as SharedIcon } from '~/assets/svg/Share.svg';
import { Button } from '~/shared/ui/button/Button';
import { type MovieByIdResponse } from '~/store/api/titles/titles.types';

import TitleStyles from './Title.module.scss';
import { RecomendTitles } from './TitleComponents/RecomendTitles';
import { TitleInfoTable } from './TitleComponents/TableInfo';
import { type RatingApperances } from '../Titles/Titles.types';

const getFirstUpperLetter = (anyString: string) => {
  return anyString.slice(0, 1).toUpperCase() + anyString.slice(1);
};

export const Title = ({
  title,
  apperance
}: {
  title: MovieByIdResponse;
  apperance: RatingApperances;
}) => {
  return (
    <div className={TitleStyles.container}>
      <div className={TitleStyles.posterContent}>
        <div className={TitleStyles.posterWrap}>
          <img
            className={TitleStyles.posterImg}
            src={title.poster.url}
            alt="Poster"
          />
        </div>
        <div className={TitleStyles.actionsWrap}>
          <Button
            icon={<FavoritesIcon />}
            apperance="secondary"
          />
          <Button
            icon={<SharedIcon />}
            apperance="secondary"
          />
        </div>
      </div>
      <div>
        <p>
          {title.genres.map((genre, id) => {
            if (id === title.genres.length - 1) {
              return (
                <span key={id}>
                  {genre.name[0].toUpperCase() + genre.name.slice(1)}
                </span>
              );
            }
            return id === title.genres.length - 1 ? (
              <span key={id}>{getFirstUpperLetter(genre.name)}</span>
            ) : (
              <span key={id}>{getFirstUpperLetter(genre.name)}, </span>
            );
          })}
        </p>
        <h2>{title.name}</h2>
        {title.alternativeName && <h2>{title.alternativeName}</h2>}
        <div className={TitleStyles.ratingWrap}>
          {title.rating.kp ? (
            <div
              className={classNames({
                [TitleStyles.ratingItem]: true,
                [TitleStyles[apperance]]: true
              })}
            >
              {title.rating.kp.toFixed(1)}
            </div>
          ) : null}
          <div className={TitleStyles.ratingItem}>
            <span>IMDB </span>
            {title.rating.imdb}
          </div>
          <div className={TitleStyles.ratingItem}>{title.movieLength} min</div>
          {title.ageRating >= 18 && (
            <div
              className={TitleStyles.ratingItem}
              style={{ backgroundColor: '#ff5154' }}
            >
              18 +
            </div>
          )}
        </div>
        <div className={TitleStyles.description}>{title.description}</div>
        <TitleInfoTable title={title} />
        <RecomendTitles title={title} />
      </div>
    </div>
  );
};
