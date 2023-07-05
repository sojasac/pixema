import classNames from 'classnames';
import { format } from 'date-fns';

import { ReactComponent as FavoritesIcon } from '~/assets/svg/favorites.svg';
import { ReactComponent as SharedIcon } from '~/assets/svg/Share.svg';
import { type MovieByIdResponse } from '~/store/api/titles/titles.types';

import TitleStyles from './Title.module.scss';
import { type RatingApperances } from './Titles.types';
import { Button } from '../button/Button';
const getFirstUpperLetter = (anyString: string) => {
  return anyString.slice(0, 1).toUpperCase() + anyString.slice(1);
};
export const TitleInfoTable = ({ title }: { title: MovieByIdResponse }) => {
  const tableKeys = [
    'Year',
    'Released',
    'BoxOffice',
    'Country',
    'Production',
    'Actors',
    'Directors'
  ];
  const actors = title.persons.filter(
    (person) => person.enProfession === 'actor'
  );
  const directors = title.persons.filter(
    (person) => person.enProfession === 'director'
  );
  return (
    <div style={{ display: 'flex', gap: '15%' }}>
      <div>
        {tableKeys.map((item, id) => (
          <p key={id}>{item}</p>
        ))}
      </div>
      <div style={{ color: '#fff' }}>
        <p>{title.year}</p>
        <p>{format(new Date(title.premiere.world), 'd MMMM yyyy')}</p>
        <p>
          {title.fees.world.value} {title.fees.world.currency}
        </p>
        <p>
          {title.countries.map((country, id) =>
            id === title.countries.length - 1
              ? country.name
              : `${country.name}, `
          )}
        </p>
        <p>
          {title.productionCompanies.map((company, id) =>
            id === title.productionCompanies.length - 1
              ? company.name
              : `${company.name}, `
          )}
        </p>
        <p>
          {actors.map((actor, id) => {
            if (id < 5) {
              return id === actors.length - 1 ? actor.name : `${actor.name}, `;
            }
          })}
        </p>
        <p>
          {directors.map((director, id) => {
            if (id < 5) {
              return id === directors.length - 1
                ? director.name
                : `${director.name}, `;
            }
          })}
        </p>
      </div>
    </div>
  );
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
            return id === title.genres.length - 1 ? (
              <span key={id}>{getFirstUpperLetter(genre.name)}</span>
            ) : (
              <span key={id}>{getFirstUpperLetter(genre.name)}, </span>
            );
          })}
        </p>
        <h2>{title.name}</h2>
        <div className={TitleStyles.ratingWrap}>
          <div
            className={classNames({
              [TitleStyles.ratingItem]: true,
              [TitleStyles[apperance]]: true
            })}
          >
            {title.rating.kp.toFixed(1)}
          </div>
          <div className={TitleStyles.ratingItem}>
            <span>IMDB </span>
            {title.rating.imdb}
          </div>
          {title.movieLength ? (
            <div className={TitleStyles.ratingItem}>
              {title.movieLength} min
            </div>
          ) : (
            <div className={TitleStyles.ratingItem}>120 min</div>
          )}
          {title.ageRating === 18 && (
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
      </div>
    </div>
  );
};
