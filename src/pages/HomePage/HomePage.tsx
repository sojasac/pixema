import { useEffect } from 'react';

import { TitleInRow } from '~/shared/ui/Titles/TitleInRow';
import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { selectTitles } from '~/store/titles/title.selectors';
import { fetchTitles } from '~/store/titles/titles.api';

import HomePageStyles from './HomePage.module.scss';
export const HomePage = () => {
  const titles = useAppSelector(selectTitles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(fetchTitles({}));
    return () => promise.abort('cancelled');
  }, [dispatch]);
  return (
    <div className={HomePageStyles.titlesWrap}>
      {titles.map((title) => (
        <TitleInRow
          key={title.id}
          rating={title.rating}
          poster={title.poster}
          name={title.name}
          apperance={
            +title.rating > 7
              ? 'highRating'
              : +title.rating < 7.5 && +title.rating > 4.9
              ? 'middleRating'
              : 'lowRating'
          }
          releaseDate={title.release_date}
        />
      ))}
    </div>
  );
};
