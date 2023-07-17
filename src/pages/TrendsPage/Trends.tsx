import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';
import { type FetchError } from '~/entities/entities';
import { NotFound } from '~/features/NotFound/NotFound';
import { Titles } from '~/features/Titles/TitlesComponent/Titles';
import { Button } from '~/shared/ui/button/Button';
import { Loader } from '~/shared/ui/loader/Loader';
import { isFetchBaseQueryErrorType } from '~/shared/utils/utils';
import {
  useGetTitlesQuery,
  useLazyGetTitlesQuery
} from '~/store/api/titles/titles.api';

import TrendsStyles from './Trends.module.scss';

export const TrendsPage = () => {
  const { data: movies } = useGetTitlesQuery({
    limit: 30,
    type: 'movie',
    sortField: 'rating.kp',
    'rating.filmCritics': '7-10'
  });
  const [getTitles, result] = useLazyGetTitlesQuery();
  if (result.status === 'uninitialized' && movies) {
    const { docs: titles } = movies;
    return (
      <div>
        <div className={TrendsStyles.titleWrap}>
          <TrendsSvg />
          <h2>Most popular</h2>
        </div>
        <div className={TrendsStyles.btnWrap}>
          <Button
            onClick={() =>
              void getTitles(
                {
                  limit: 30,
                  type: 'movie',
                  sortField: 'rating.kp',
                  'rating.filmCritics': '7-10'
                },
                true
              )
            }
            apperance="secondary"
          >
            Movie
          </Button>
          <Button
            onClick={() =>
              void getTitles(
                {
                  limit: 30,
                  type: 'tv-series',
                  sortField: 'rating.kp',
                  'rating.filmCritics': '7-10'
                },
                true
              )
            }
            apperance="secondary"
          >
            Tv-series
          </Button>
          <Button
            onClick={() =>
              void getTitles(
                {
                  limit: 30,
                  type: 'anime',
                  sortField: 'rating.kp',
                  'rating.filmCritics': '7-10'
                },
                true
              )
            }
            apperance="secondary"
          >
            Anime
          </Button>
          <Button
            onClick={() =>
              void getTitles(
                {
                  limit: 30,
                  type: 'cartoon',
                  sortField: 'rating.kp',
                  'rating.filmCritics': '7-10'
                },
                true
              )
            }
            apperance="secondary"
          >
            Cartoons
          </Button>
          <Button
            onClick={() =>
              void getTitles(
                {
                  limit: 30,
                  type: 'animated-series',
                  sortField: 'rating.kp',
                  'rating.filmCritics': '7-10'
                },
                true
              )
            }
            apperance="secondary"
          >
            Animated-series
          </Button>
        </div>
        <Titles
          titles={titles}
          isTrends
        />
      </div>
    );
  } else {
    const { data, error, isError, isLoading } = result;
    if (isError && isFetchBaseQueryErrorType(error) && error.status === 404) {
      return <NotFound message={(error.data as FetchError).message} />;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (data) {
      const { docs: titles } = data;
      return (
        <div>
          <div className={TrendsStyles.titleWrap}>
            <TrendsSvg />
            <h2>Most Popular</h2>
          </div>
          <div className={TrendsStyles.btnWrap}>
            <Button
              onClick={() =>
                void getTitles(
                  {
                    limit: 14,
                    type: 'movie',
                    sortField: 'rating.kp',
                    'rating.filmCritics': '7-10'
                  },
                  true
                )
              }
              apperance="secondary"
            >
              Movie
            </Button>
            <Button
              onClick={() =>
                void getTitles(
                  {
                    limit: 14,
                    type: 'tv-series',
                    sortField: 'rating.kp',
                    'rating.filmCritics': '7-10'
                  },
                  true
                )
              }
              apperance="secondary"
            >
              Tv-series
            </Button>
            <Button
              onClick={() =>
                void getTitles(
                  {
                    limit: 14,
                    type: 'anime',
                    sortField: 'rating.kp',
                    'rating.filmCritics': '7-10'
                  },
                  true
                )
              }
              apperance="secondary"
            >
              Anime
            </Button>
            <Button
              onClick={() =>
                void getTitles(
                  {
                    limit: 14,
                    type: 'cartoon',
                    sortField: 'rating.kp',
                    'rating.filmCritics': '7-10'
                  },
                  true
                )
              }
              apperance="secondary"
            >
              Cartoons
            </Button>
            <Button
              onClick={() =>
                void getTitles(
                  {
                    limit: 14,
                    type: 'animated-series',
                    sortField: 'rating.kp',
                    'rating.filmCritics': '7-10'
                  },
                  true
                )
              }
              apperance="secondary"
            >
              Animated-series
            </Button>
          </div>
          <Titles
            titles={titles}
            isTrends
          />
        </div>
      );
    }
  }
};
