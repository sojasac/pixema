import classNames from 'classnames';
import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';

import { ReactComponent as FavoritesIcon } from '~/assets/svg/favorites.svg';
import { ReactComponent as SharedIcon } from '~/assets/svg/Share.svg';
import { Button } from '~/shared/ui/button/Button';
import { type RatingApperances } from '~/shared/ui/Titles/Titles/Titles.types';
import { type MovieByIdResponse } from '~/store/api/titles/titles.types';

import TitleStyles from './Title.module.scss';

const getFirstUpperLetter = (anyString: string) => {
  return anyString.slice(0, 1).toUpperCase() + anyString.slice(1);
};
export const TitleInfoTable = ({ title }: { title: MovieByIdResponse }) => {
  const contries = title.countries.map((country) => country.name).join(', ');
  const productionCompanies = title.productionCompanies
    .map((company) => company.name)
    .join(', ');
  const actors = title.persons
    .filter((person) => person.enProfession === 'actor')
    .filter((_, id) => id < 5);
  const directors = title.persons.filter(
    (person) => person.enProfession === 'director'
  );
  const tableSchema = Object.entries({
    Year: title.year,
    Released: format(new Date(title.premiere.world), 'd MMMM yyyy'),
    BoxOffice: `${title.fees.world.value} ${title.fees.world.currency}`,
    Country: contries,
    Production: productionCompanies,
    Actors: actors,
    Directors: directors
  });
  return (
    <table>
      <tbody>
        {tableSchema.map((item, id) => (
          <tr key={id}>
            <td className={TitleStyles.tableKeys}>{item[0]}</td>
            <td className={TitleStyles.tableValues}>
              {item[0] === 'Actors' ? (
                <p>
                  {actors.map((actor, id) => (
                    <p
                      key={actor.id}
                      className={TitleStyles.personsContent}
                    >
                      <div className={TitleStyles.personPhotoWrap}>
                        <img
                          src={actor.photo}
                          alt="ActorPhoto"
                        />
                      </div>
                      <span>
                        <NavLink
                          style={{ whiteSpace: 'nowrap' }}
                          to={`/persons/${actor.id}`}
                        >
                          {actor.name}
                        </NavLink>
                        {id === actors.length - 1 ? null : ', '}
                      </span>
                    </p>
                  ))}
                </p>
              ) : item[0] === 'Directors' ? (
                <p>
                  {directors.map((director, id) => (
                    <p
                      key={id}
                      className={TitleStyles.personsContent}
                    >
                      <div className={TitleStyles.personPhotoWrap}>
                        <img
                          src={director.photo}
                          alt="DirectorPhoto"
                        />
                      </div>
                      <span key={director.id}>
                        <NavLink
                          style={{ whiteSpace: 'nowrap' }}
                          to={`/persons/${director.id}`}
                        >
                          {director.name}
                        </NavLink>
                        {id === directors.length - 1 ? null : ', '}
                      </span>
                    </p>
                  ))}
                </p>
              ) : (
                <p>
                  <span>{item[1] as string | number}</span>
                </p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
      </div>
    </div>
  );
};
