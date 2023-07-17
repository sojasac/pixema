import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import noposter from '~/assets/svg/noposter.jpg';
import { type MovieSearchResponse } from '~/store/api/titles/titles.types';

import SearchStyles from './Search.module.scss';
import { getFirstUpperLetter } from '../Titles/Title/Title';

export const SearchComponent = ({
  movies
}: {
  movies: MovieSearchResponse[];
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Searched titles...</h2>
      <div className={SearchStyles.container}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={SearchStyles.contentWrap}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div className={SearchStyles.posterWrap}>
              <img
                className={SearchStyles.posterImg}
                src={movie.poster || noposter}
                alt="movie poster"
              />
            </div>
            <div className={SearchStyles.infoWrap}>
              {movie.name && <h3>{movie.name}</h3>}
              {movie.alternativeName && <h3>{movie.alternativeName}</h3>}
              {movie.genres[0] && (
                <p>
                  {movie.genres.map((genre, id) => {
                    if (id === movie.genres.length - 1) {
                      return (
                        <span key={id}>
                          {genre[0].toUpperCase() + genre.slice(1)}
                        </span>
                      );
                    }
                    return id === movie.genres.length - 1 ? (
                      <span key={id}>{getFirstUpperLetter(genre)}</span>
                    ) : (
                      <span key={id}>{getFirstUpperLetter(genre)}, </span>
                    );
                  })}
                </p>
              )}
              <p>{movie.year && <span>Year: {movie.year}</span>}</p>
              <div className={SearchStyles.ratingWrap}>
                {movie.rating ? (
                  <div
                    className={classNames({
                      [SearchStyles.ratingItem]: true,
                      [SearchStyles.lowRating]: movie.rating < 5,
                      [SearchStyles.middleRating]:
                        movie.rating < 7.5 && movie.rating >= 5,
                      [SearchStyles.highRating]: movie.rating >= 7.5
                    })}
                  >
                    {movie.rating.toFixed(1)}
                  </div>
                ) : null}
                {movie.movieLength ? (
                  <div className={SearchStyles.ratingItem}>
                    {movie.movieLength} min
                  </div>
                ) : null}
              </div>
              {movie.type && <p>{getFirstUpperLetter(movie.type)}</p>}
              {movie.shortDescription && <p>{movie.shortDescription}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
