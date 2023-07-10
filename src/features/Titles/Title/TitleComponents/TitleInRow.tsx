import { Link } from 'react-router-dom';

import noposter from '~/assets/layouts/noposter.jpg';

import TableInRowStyles from './TitleComponents.module.scss';

export const TitleInRow = ({
  id,
  name,
  poster
}: {
  id: number;
  name: string;
  poster?: string;
}) => {
  return (
    <div className={TableInRowStyles.titleCard}>
      <div className={TableInRowStyles.posterWrap}>
        <img
          src={poster || noposter}
          alt="Title_poster"
          className={TableInRowStyles.posterImg}
        />
      </div>
      <div>
        <div className={TableInRowStyles.name}>
          <Link to={`/movie/${id}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
};
