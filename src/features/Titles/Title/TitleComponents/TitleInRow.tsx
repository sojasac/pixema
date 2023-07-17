import { Link, useNavigate } from 'react-router-dom';

import noposter from '~/assets/svg/noposter.jpg';

import TitleInRowStyles from './TitleComponents.module.scss';
import { getFirstUpperLetter } from '../Title';

export const TitleInRow = ({
  id,
  name,
  poster,
  genres
}: {
  id: number;
  name: string;
  poster?: string;
  genres?: { name: string }[];
}) => {
  const navigate = useNavigate();
  return (
    <div className={TitleInRowStyles.titleCard}>
      <div className={TitleInRowStyles.posterWrap}>
        <img
          src={poster || noposter}
          alt="Title_poster"
          className={TitleInRowStyles.posterImg}
          onClick={() => navigate(`/movie/${id}`)}
        />
      </div>
      <div>
        <div className={TitleInRowStyles.name}>
          <Link to={`/movie/${id}`}>{name}</Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {genres &&
            genres
              .filter((_, index) => index < 3)
              .map((genre, index) => (
                <span
                  key={index}
                  className={TitleInRowStyles.genres}
                >
                  {getFirstUpperLetter(genre.name)}
                </span>
              ))}
        </div>
      </div>
    </div>
  );
};
