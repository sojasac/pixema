import { useNavigate } from 'react-router-dom';

import { ReactComponent as RateCup } from '~/assets/svg/cup.svg';
import { type MovieResponse } from '~/store/api/titles/titles.types';

import TitleStyle from './MainTitle.module.scss';
export const MainTitle = ({ title }: { title: MovieResponse }) => {
  const navigate = useNavigate();
  return (
    <div className={TitleStyle.mainTitleWrap}>
      <img
        src={title.poster.url}
        alt="MainPoster"
        onClick={() => navigate(`/titles/${title.id}`)}
      />
      <div className={TitleStyle.mainTitleContent}>
        <p>
          <h3 style={{ color: '#fff' }}>Title : {title.name}</h3>
          <h3>
            Rate: <RateCup /> {title.rating.kp}
          </h3>
          <p>{title.description}</p>
        </p>
      </div>
    </div>
  );
};
