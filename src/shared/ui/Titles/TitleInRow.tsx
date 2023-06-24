import classNames from 'classnames';

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
  const date = new Date(releaseDate).toLocaleString('en', {
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className={TitleStyle.container}>
      <div className={TitleStyle.posterWrap}>
        <img
          src={poster}
          alt="Title_poster"
          className={TitleStyle.posterImg}
        />
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
        <div className={TitleStyle.name}>
          <a href="#">{name}</a>
        </div>
        <div className={TitleStyle.date}>{date}</div>
      </div>
    </div>
  );
};
