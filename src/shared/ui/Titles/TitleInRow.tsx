import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';
import { type MovieCard } from '~/store/titles/titles.types';

import TitleStyle from './TitleInRow.module.scss';
import { type RatingApperances } from './Titles.types';

export const TitleInRow = ({
  title,
  apperance,
  isFavorites,
  isTrends
}: {
  title: MovieCard;
  apperance: RatingApperances;
  isFavorites?: boolean;
  isTrends?: boolean;
}) => {
  const date = new Date(title.release_date).toLocaleString('en', {
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className={TitleStyle.container}>
      <div className={TitleStyle.posterWrap}>
        <img
          src={title.poster}
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
          <p>{title.rating}</p>
        </div>
        {isFavorites && (
          <div className={TitleStyle.favoritesWrap}>
            <FavoritesSvg />
          </div>
        )}
      </div>
      <div>
        <div className={TitleStyle.name}>
          <Link to={`titles/${title.id}`}>{title.name}</Link>
        </div>
        <div className={TitleStyle.date}>{date}</div>
      </div>
    </div>
  );
};
