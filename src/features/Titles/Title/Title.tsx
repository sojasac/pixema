import classNames from 'classnames';

import noposter from '~/assets/layouts/noposter.jpg';
import { ReactComponent as FavoritesIcon } from '~/assets/svg/favorites.svg';
import { ReactComponent as SharedIcon } from '~/assets/svg/Share.svg';
import { Button } from '~/shared/ui/button/Button';
import { type MovieResponse } from '~/store/api/titles/titles.types';
import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { favoriteSelector } from '~/store/title/title.selector';
import { titleActions } from '~/store/title/title.slice';

import TitleStyles from './Title.module.scss';
import { RecomendTitles } from './TitleComponents/RecomendTitles';
import { TitleInfoTable } from './TitleComponents/TableInfo';
import { TitleVideo } from './TitleComponents/TitleVideo';

export const getFirstUpperLetter = (anyString: string) => {
  return anyString.slice(0, 1).toUpperCase() + anyString.slice(1);
};

export const Title = ({ title }: { title: MovieResponse }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(favoriteSelector);
  const isFavorite = (favoriteId: number | undefined) => {
    return favorites.find((title) => title.id === favoriteId);
  };
  const handleClick = () => {
    return isFavorite(title.id)
      ? dispatch(titleActions.delFavoriteTitles(title.id))
      : dispatch(titleActions.addFavoriteTitles(title));
  };
  return (
    <div className={TitleStyles.container}>
      <div className={TitleStyles.posterContent}>
        <div className={TitleStyles.posterWrap}>
          <img
            className={TitleStyles.posterImg}
            src={title.poster?.url || noposter}
            alt="Poster"
          />
        </div>
        <div className={TitleStyles.actionsWrap}>
          <Button
            icon={<FavoritesIcon />}
            apperance={isFavorite(title.id) ? 'primary' : 'secondary'}
            onClick={() => handleClick()}
          />
          <Button
            icon={<SharedIcon />}
            apperance="secondary"
          />
        </div>
        {title.videos?.trailers[0]?.url && (
          <div>
            <h2>Trailer</h2>
            <TitleVideo url={title.videos.trailers[0].url} />
          </div>
        )}
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
                [TitleStyles.lowRating]: title.rating.kp < 5,
                [TitleStyles.middleRating]:
                  title.rating.kp < 7.5 && title.rating.kp >= 5,
                [TitleStyles.highRating]: title.rating.kp >= 7.5
              })}
            >
              {title.rating.kp.toFixed(1)}
            </div>
          ) : null}
          {title.rating.imdb > 0 && (
            <div className={TitleStyles.ratingItem}>
              <span>IMDB</span> {title.rating.imdb}
            </div>
          )}
          {title.movieLength && (
            <div className={TitleStyles.ratingItem}>
              {title.movieLength} min
            </div>
          )}
          {title.ageRating >= 18 && (
            <div
              className={TitleStyles.ratingItem}
              style={{ backgroundColor: '#ff5154' }}
            >
              18 +
            </div>
          )}
        </div>
        {title.type && <p>{getFirstUpperLetter(title.type)}</p>}
        <div className={TitleStyles.description}>{title.description}</div>
        <TitleInfoTable title={title} />
        {title.similarMovies[0] && <RecomendTitles title={title} />}
      </div>
      <div className={TitleStyles.cloud}></div>
    </div>
  );
};
