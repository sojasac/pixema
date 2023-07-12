import { useEffect, useState } from 'react';

import { PaginationComponent } from '~/features/Pagination/Pagination';
import { Titles } from '~/features/Titles/Titles/Titles';
import { Button } from '~/shared/ui/button/Button';
import { RadioInput } from '~/shared/ui/inputField/InputField';
import { Loader } from '~/shared/ui/loader/Loader';
import {
  useGetTitlesQuery,
  useLazyGetTitlesQuery
} from '~/store/api/titles/titles.api';

import AllTitlesStyle from './AllTitles.module.scss';
import { RadioInputSchema } from './AllTitles.types';

export const AllTitlesPage = () => {
  const [radioType, setRadioType] = useState('');
  const { data: titles } = useGetTitlesQuery({
    page: 1,
    limit: 35
  });
  const [getTitles, { isError, isLoading, isSuccess, status, data }] =
    useLazyGetTitlesQuery();
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [data?.page]);
  if (status === 'uninitialized' && titles) {
    return (
      <div>
        <h2>All Titles</h2>
        <form>
          <div className={AllTitlesStyle['radio-inputs']}>
            {RadioInputSchema.map((radioButton) => (
              <RadioInput
                key={radioButton.name}
                value={radioButton.value}
                name={radioButton.name}
                onChange={({ target: { value } }) => setRadioType(value)}
              />
            ))}
          </div>
          <Button
            onClick={() =>
              void getTitles({
                page: titles.page,
                limit: 35,
                sortField: radioType || '',
                type: radioType || ''
              })
            }
          >
            click
          </Button>
        </form>
        <Titles titlesResponse={titles} />
        <PaginationComponent
          onNextPage={() =>
            void getTitles({ page: titles.page + 1, limit: 35 }, true)
          }
          onPrevPage={() =>
            void getTitles({ page: titles.page - 1, limit: 35 }, true)
          }
          currentPage={titles.page}
          total={titles.pages}
        />
      </div>
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    <div>Ooops, something went wrong!</div>;
  }
  if (isSuccess && data) {
    return (
      <div>
        <h2>All Titles</h2>
        <form>
          <div className={AllTitlesStyle['radio-inputs']}>
            {RadioInputSchema.map((radioButton) => (
              <RadioInput
                key={radioButton.name}
                value={radioButton.value}
                name={radioButton.name}
                onChange={({ target: { value } }) => setRadioType(value)}
              />
            ))}
          </div>
        </form>
        <Titles titlesResponse={data} />
        <PaginationComponent
          onNextPage={() =>
            void getTitles({ page: data?.page + 1, limit: 35 }, true)
          }
          onPrevPage={() =>
            void getTitles({ page: data?.page - 1, limit: 35 }, true)
          }
          currentPage={data.page}
          total={data.pages}
        />
      </div>
    );
  }
};
