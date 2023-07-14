import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';
import { Titles } from '~/features/Titles/Titles/Titles';
import { Button } from '~/shared/ui/button/Button';
import { Loader } from '~/shared/ui/loader/Loader';
import {
  useGetTitlesQuery,
  useLazyGetTitlesQuery
} from '~/store/api/titles/titles.api';

import TrendsStyles from './Trends.module.scss';

export const TrendsPage = () => {
  const { data: movies } = useGetTitlesQuery({
    limit: 12,
    type: 'movie',
    sortField: 'rating.kp'
  });
  const [trigger, result] = useLazyGetTitlesQuery();
  if (result.status === 'uninitialized' && movies) {
    const { docs: titles } = movies;
    return (
      <div>
        <div className={TrendsStyles.titleWrap}>
          <TrendsSvg />
          <h2>Trends</h2>
        </div>
        <div className={TrendsStyles.btnWrap}>
          <Button
            onClick={() =>
              void trigger(
                { limit: 12, type: 'movie', sortField: 'rating.kp' },
                true
              )
            }
            apperance="secondary"
          >
            Movie
          </Button>
          <Button
            onClick={() =>
              void trigger(
                { limit: 12, type: 'tv-series', sortField: 'rating.kp' },
                true
              )
            }
            apperance="secondary"
          >
            Tv-series
          </Button>
          <Button
            onClick={() =>
              void trigger(
                { limit: 12, type: 'anime', sortField: 'rating.kp' },
                true
              )
            }
            apperance="secondary"
          >
            Anime
          </Button>
          <Button
            onClick={() =>
              void trigger(
                { limit: 12, type: 'cartoon', sortField: 'rating.kp' },
                true
              )
            }
            apperance="secondary"
          >
            Cartoons
          </Button>
          <Button
            onClick={() =>
              void trigger(
                { limit: 12, type: 'animated-series', sortField: 'rating.kp' },
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
    if (isError) {
      return <div>{JSON.stringify(error)}</div>;
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
            <h2>Trends</h2>
          </div>
          <div className={TrendsStyles.btnWrap}>
            <Button
              onClick={() =>
                void trigger(
                  { limit: 12, type: 'movie', sortField: 'rating.kp' },
                  true
                )
              }
              apperance="secondary"
            >
              Movie
            </Button>
            <Button
              onClick={() =>
                void trigger(
                  {
                    limit: 12,
                    type: 'tv-series',
                    sortField: 'rating.kp'
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
                void trigger(
                  { limit: 12, type: 'anime', sortField: 'rating.kp' },
                  true
                )
              }
              apperance="secondary"
            >
              Anime
            </Button>
            <Button
              onClick={() =>
                void trigger(
                  {
                    limit: 12,
                    type: 'cartoon',
                    sortField: 'rating.kp'
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
                void trigger(
                  {
                    limit: 12,
                    type: 'animated-series',
                    sortField: 'rating.kp'
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
