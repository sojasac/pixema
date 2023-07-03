import { useEffect, useState } from 'react';

import { MainTitle } from '~/shared/ui/Titles/MainTitle';
import { TitleInRow } from '~/shared/ui/Titles/TitleInRow';
import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { selectTitles } from '~/store/titles/title.selectors';
import { fetchTitles } from '~/store/titles/titles.api';
import { type MovieCard } from '~/store/titles/titles.types';

import HomePageStyles from './HomePage.module.scss';

export const HomePage = () => {
  const titles = useAppSelector(selectTitles);
  const dispatchTitles = useAppDispatch();
  const [mainTitle, setMainTitle] = useState<MovieCard[] | []>([]);
  useEffect(() => {
    setMainTitle(titles.filter((title) => +title.rating > 7.2));
    const promise = dispatchTitles(fetchTitles({}));
    return () => promise.abort('cancelled');
  }, [dispatchTitles, setMainTitle, titles]);
  return (
    <div>
      <h2>Title of the day</h2>
      <div>
        {mainTitle.map((title, id) => {
          const titleId = 0;
          if (id === titleId) {
            return (
              <MainTitle
                key={title.id}
                title={title}
              />
            );
          }
        })}
      </div>
      <h2>All titles</h2>
      <div className={HomePageStyles.titlesWrap}>
        {titles.map((title) => (
          <TitleInRow
            key={title.id}
            title={title}
            apperance={
              +title.rating > 7
                ? 'highRating'
                : +title.rating < 7.5 && +title.rating > 4.9
                ? 'middleRating'
                : 'lowRating'
            }
          />
        ))}
      </div>
    </div>
  );
};
