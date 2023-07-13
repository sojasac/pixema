import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';

import { type Person } from '~/store/api/user/person/person.types';

import TableStyles from './PersonComponents.module.scss';

export const PersonInfoTable = ({ person }: { person: Person }) => {
  const placeOfBirth = person.birthPlace
    ?.map((place) => place.value)
    .join(', ');
  const placeOfDeath = person.deathPlace
    ?.map((place) => place.value)
    .join(', ');
  const movies = person.movies
    .filter(
      (movie) =>
        movie.rating > 0 &&
        movie.enProfession === ('actor' || 'producer' || 'director' || 'cameo')
    )
    .sort((a, b) => b.rating - a.rating)
    .filter((_, index) => index < 7);

  const tableSchema = Object.entries({
    Sex: person.sex,
    Birth: person.birthday
      ? format(new Date(person.birthday), 'do MMMM yyyy')
      : '-',
    Death: person.death ? format(new Date(person.death), 'do MMMM yyyy') : '-',
    Age: person.age,
    'Birth place': placeOfBirth || '-',
    'Death place': placeOfDeath || '-',
    'Most Popular Titles': movies,
    Awards: person.countAwards,
    Growth: person.growth
  });
  return (
    <table>
      <tbody>
        {tableSchema.map((item, id) =>
          item[1] ? (
            <tr key={id}>
              <td className={TableStyles.tableKeys}>{item[0]}</td>
              <td className={TableStyles.tableValues}>
                {item[0] === 'Most Popular Titles' ? (
                  <div>
                    {movies.map((movie, id) => (
                      <span key={movie.id}>
                        <NavLink
                          style={{ whiteSpace: 'nowrap' }}
                          to={`/movie/${movie.id}`}
                        >
                          {movie.name || movie.alternativeName}
                        </NavLink>
                        {id === movies.length - 1 ? (
                          <span>&nbsp;</span>
                        ) : (
                          <span>,</span>
                        )}
                      </span>
                    ))}
                  </div>
                ) : item[1] === undefined ? (
                  ''
                ) : (
                  <p>
                    <span>{item[1] as string | number}</span>
                  </p>
                )}
              </td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};
