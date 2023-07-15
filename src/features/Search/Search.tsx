import classNames from 'classnames';

import noposter from '~/assets/layouts/noposter.jpg';
import { type MovieResponse } from '~/store/api/titles/titles.types';

import SearchStyles from './Search.module.scss';
import { getFirstUpperLetter } from '../Titles/Title/Title';

export const SearchComponent = ({ movies }: { movies: MovieResponse[] }) => {
  return (
    <div>
      <h2>Searched titles...</h2>
      <div className={SearchStyles.container}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className={SearchStyles.posterWrap}>
              <img
                className={SearchStyles.posterImg}
                src={movie.poster.url || noposter}
                alt="movie poster"
              />
            </div>
            <div>
              {movie.name && <h3>{movie.name}</h3>}
              {movie.alternativeName && <h3>{movie.alternativeName}</h3>}
              {movie.genres[0] && (
                <p>
                  {movie.genres.map((genre, id) => {
                    if (id === movie.genres.length - 1) {
                      return (
                        <span key={id}>
                          {genre.name[0].toUpperCase() + genre.name.slice(1)}
                        </span>
                      );
                    }
                    return id === movie.genres.length - 1 ? (
                      <span key={id}>{getFirstUpperLetter(genre.name)}</span>
                    ) : (
                      <span key={id}>{getFirstUpperLetter(genre.name)}, </span>
                    );
                  })}
                </p>
              )}
              <div className={SearchStyles.ratingWrap}>
                {movie.rating.kp ? (
                  <div
                    className={classNames({
                      [SearchStyles.ratingItem]: true,
                      [SearchStyles.lowRating]: movie.rating.kp < 5,
                      [SearchStyles.middleRating]:
                        movie.rating.kp < 7.5 && movie.rating.kp >= 5,
                      [SearchStyles.highRating]: movie.rating.kp >= 7.5
                    })}
                  >
                    {movie.rating.kp.toFixed(1)}
                  </div>
                ) : null}
                {movie.rating.imdb > 0 && (
                  <div className={SearchStyles.ratingItem}>
                    <span>IMDB</span> {movie.rating.imdb}
                  </div>
                )}
                {movie.movieLength && (
                  <div className={SearchStyles.ratingItem}>
                    {movie.movieLength} min
                  </div>
                )}
                {movie.ageRating >= 18 && (
                  <div
                    className={SearchStyles.ratingItem}
                    style={{ backgroundColor: '#ff5154' }}
                  >
                    18 +
                  </div>
                )}
              </div>
              {movie.type && <p>{getFirstUpperLetter(movie.type)}</p>}
              {movie.description && <p>{movie.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
