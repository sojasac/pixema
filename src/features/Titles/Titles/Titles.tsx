import classNames from 'classnames';

import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';
import { type MovieByIdResponse } from '~/store/api/titles/titles.types';

import TitleStyle from './Titles.module.scss';
import { type RatingApperances } from './Titles.types';
import { TitleInRow } from '../Title/TitleComponents/TitleInRow';

export const Titles = ({
  title,
  apperance,
  isFavorites,
  isTrends
}: {
  title: MovieByIdResponse;
  apperance: RatingApperances;
  isFavorites?: boolean;
  isTrends?: boolean;
}) => {
  const date = new Date(title.premiere.world).toLocaleString('en', {
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className={TitleStyle.container}>
      <div className={TitleStyle.posterWrap}>
        <div
          className={classNames({
            [TitleStyle.ratingWrap]: true,
            [TitleStyle[apperance]]: true,
            [TitleStyle.trendsRatingWrap]: isTrends
          })}
        >
          {isTrends && (
            <div>
              <TrendsSvg style={{ fill: 'white' }} />
            </div>
          )}
          <p>{title.rating.kp}</p>
        </div>
        {isFavorites && (
          <div className={TitleStyle.favoritesWrap}>
            <FavoritesSvg />
          </div>
        )}
      </div>
      <TitleInRow
        id={title.id}
        name={title.name}
        poster={title.poster.url}
      />
      <div>
        <div className={TitleStyle.date}>{date}</div>
      </div>
    </div>
  );
};
