import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';

import { type MovieByIdResponse } from '~/store/api/titles/titles.types';

import TableStyles from './TitleComponents.module.scss';
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
            <td className={TableStyles.tableKeys}>{item[0]}</td>
            <td className={TableStyles.tableValues}>
              {item[0] === 'Actors' ? (
                <p>
                  {actors.map((actor, id) => (
                    <p
                      key={actor.id}
                      className={TableStyles.personsContent}
                    >
                      <div className={TableStyles.personPhotoWrap}>
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
                      className={TableStyles.personsContent}
                    >
                      <div className={TableStyles.personPhotoWrap}>
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
