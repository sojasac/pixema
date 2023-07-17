import classNames from 'classnames';

import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';
import { type MovieResponse } from '~/store/api/titles/titles.types';

import TitleStyle from './Titles.module.scss';
import { TitleInRow } from '../Title/TitleComponents/TitleInRow';

export const Titles = ({
  titles,
  isFavorites,
  isTrends
}: {
  titles: MovieResponse[];
  isFavorites?: boolean;
  isTrends?: boolean;
}) => {
  return (
    <div className={TitleStyle.wrapper}>
      {titles.map((title) => {
        return (
          <div
            className={TitleStyle.container}
            key={title.id}
          >
            <div
              className={classNames({
                [TitleStyle.ratingWrap]: true,
                [TitleStyle.lowRating]: title.rating.kp < 5,
                [TitleStyle.middleRating]:
                  title.rating.kp < 7.5 && title.rating.kp >= 5,
                [TitleStyle.highRating]: title.rating.kp >= 7.5,
                [TitleStyle.trendsRatingWrap]: isTrends
              })}
            >
              {isTrends && (
                <div>
                  <TrendsSvg style={{ fill: 'white' }} />
                </div>
              )}
              {title.rating.kp && <span>{title.rating.kp.toFixed(1)}</span>}
            </div>
            <div
              className={classNames({
                [TitleStyle.iconsWrap]: true,
                [TitleStyle.iconsWrapActive]: isFavorites
              })}
            >
              {isFavorites && (
                <div className={TitleStyle.favoritesWrap}>
                  <FavoritesSvg />
                </div>
              )}
            </div>
            <div className={TitleStyle.titleContainer}>
              <TitleInRow
                id={title.id}
                name={title.name || title.alternativeName}
                poster={title.poster?.url || title.poster?.previewUrl}
                genres={title.genres}
              ></TitleInRow>
            </div>
          </div>
        );
      })}
    </div>
  );
};
