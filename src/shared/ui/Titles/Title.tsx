import classNames from 'classnames';
import { format } from 'date-fns';

import { ReactComponent as FavoritesIcon } from '~/assets/svg/favorites.svg';
import { ReactComponent as SharedIcon } from '~/assets/svg/Share.svg';
import { type TitleEntity } from '~/store/titles/titles.types';

import TitleStyles from './Title.module.scss';
import { type RatingApperances } from './Titles.types';
import { Button } from '../button/Button';

export const TitleInfoTable = ({ title }: { title: TitleEntity }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Year</td>
          <td className={TitleStyles.mainInfoRow}>{title.year}</td>
        </tr>
        <tr>
          <td>ReLeased</td>
          <td className={TitleStyles.mainInfoRow}>
            {format(new Date(title.release_date), 'd MMMM yyyy')}
          </td>
        </tr>
        {title.revenue && (
          <tr>
            <td>BoxOffice</td>
            <td className={TitleStyles.mainInfoRow}>{title.revenue}</td>
          </tr>
        )}
        {title.country && (
          <tr>
            <td>Country</td>
            <td className={TitleStyles.mainInfoRow}>{title.country}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export const Title = ({
  title,
  apperance
}: {
  title: TitleEntity;
  apperance: RatingApperances;
}) => {
  return (
    <div className={TitleStyles.container}>
      <div className={TitleStyles.posterContent}>
        <div className={TitleStyles.posterWrap}>
          <img
            className={TitleStyles.posterImg}
            src={title.poster}
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
                <span key={genre.id}>
                  {genre.name[0].toUpperCase() + genre.name.slice(1)}
                </span>
              );
            }
            return (
              <span key={genre.id}>
                {genre.name[0].toUpperCase() + genre.name.slice(1)}
                {', '}
              </span>
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
            {title.rating}
          </div>
          <div className={TitleStyles.ratingItem}>
            <span>IMDB </span>
            {title.rating}
          </div>
          {title.runtime ? (
            <div className={TitleStyles.ratingItem}>{title.runtime} min</div>
          ) : (
            <div className={TitleStyles.ratingItem}>120 min</div>
          )}
          {title.adult && (
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
