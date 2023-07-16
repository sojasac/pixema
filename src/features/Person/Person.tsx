import noposter from '~/assets/layouts/noposter.jpg';
import { type Person } from '~/store/api/user/person/person.types';

import { PersonInfoTable } from './PersonComponents/PersonTableInfo';
import PersonStyles from './PersonStyles.module.scss';

export const getFirstUpperLetter = (anyString: string) => {
  return anyString.slice(0, 1).toUpperCase() + anyString.slice(1);
};

export const PersonComponent = ({ person }: { person: Person }) => {
  return (
    <div>
      <div className={PersonStyles.container}>
        <div className={PersonStyles.posterContent}>
          <div className={PersonStyles.posterWrap}>
            <img
              className={PersonStyles.posterImg}
              src={person.photo || noposter}
              alt="Poster"
            />
          </div>
        </div>
        <div>
          <p>
            {person.profession.map((proffession, id) => {
              if (id === person.profession.length - 1) {
                return (
                  <span key={id}>
                    {proffession.value[0].toUpperCase() +
                      proffession.value.slice(1)}
                  </span>
                );
              }
              return id === person.profession.length - 1 ? (
                <span key={id}>{getFirstUpperLetter(proffession.value)}</span>
              ) : (
                <span key={id}>{getFirstUpperLetter(proffession.value)}, </span>
              );
            })}
          </p>
          {person.name && person.enName ? (
            <div>
              <h2>{person.name}</h2>
              <h2>{person.enName}</h2>
            </div>
          ) : person.name || person.enName ? (
            <h2>{person.name || person.enName}</h2>
          ) : null}
          <PersonInfoTable person={person} />
        </div>
      </div>
      <div className={PersonStyles.facts}>
        {person.facts[0] && (
          <ul>
            <h3>Interesting facts:</h3>
            {person.facts.map((fact, index) => (
              <li key={index}>
                {fact.value
                  .replaceAll(/(<([^>]+)>)/gi, '')
                  .replaceAll(/\/name\//gm, '/star/')
                  .replaceAll(/[^\sa-zа-яё]/gi, '')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
