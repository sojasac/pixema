import { ReactComponent as RateCup } from '~/assets/svg/cup.svg';

import TitleStyle from './TitleInRow.module.scss';
export const MainTitle = ({
  rating,
  poster,
  name,
  tagline
}: {
  rating: string;
  poster: string;
  name: string;
  tagline: string;
}) => {
  return (
    <div className={TitleStyle.mainTitleWrap}>
      <img
        src={poster}
        alt="MainPoster"
      />
      <div className={TitleStyle.mainTitleContent}>
        <p>
          <h3 style={{ color: '#fff' }}>Title : {name}</h3>
          <h3>
            Rate: <RateCup /> {rating}
          </h3>
          <p>{tagline}</p>
        </p>
      </div>
    </div>
  );
};
