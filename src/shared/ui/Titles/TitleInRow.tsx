import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';

import TitleStyle from './TitleInRow.module.scss';
import { type RatingApperances } from './Titles.types';

export const TitleInRow = ({
  rating,
  poster,
  name,
  apperance,
  releaseDate,
  isFavorites,
  isTrends
}: {
  rating: string;
  poster: string;
  apperance: RatingApperances;
  name: string;
  releaseDate: string;
  isFavorites?: boolean;
  isTrends?: boolean;
}) => {
  return (
    <div className={TitleStyle.container}>
      <div
        style={{ backgroundImage: `url(${poster})` }}
        className={TitleStyle.posterWrap}
      >
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
          <p>{rating}</p>
        </div>
        {isFavorites && (
          <div className={TitleStyle.favoritesWrap}>
            <FavoritesSvg />
          </div>
        )}
      </div>
      <div>
        <NavLink to="#">{name}</NavLink>
        <div>{releaseDate}</div>
      </div>
    </div>
  );
};
