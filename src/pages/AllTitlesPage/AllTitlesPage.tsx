import { useEffect } from 'react';

import { PaginationComponent } from '~/features/Pagination/Pagination';
import { Titles } from '~/features/Titles/Titles/Titles';
import { Loader } from '~/shared/ui/loader/Loader';
import {
  useGetTitlesQuery,
  useLazyGetTitlesQuery
} from '~/store/api/titles/titles.api';

export const AllTitlesPage = () => {
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
        <Titles titlesResponse={titles} />
        <PaginationComponent
          onNextPage={() =>
            void getTitles({ page: titles.page + 1, limit: 35 }, true)
          }
          onPrevPage={() =>
            void getTitles({ page: titles.page - 1, limit: 35 }, true)
          }
          currentPage={titles.page}
          total={titles.total}
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
        <Titles titlesResponse={data} />
        <PaginationComponent
          onNextPage={() =>
            void getTitles({ page: data?.page + 1, limit: 35 }, true)
          }
          onPrevPage={() =>
            void getTitles({ page: data?.page - 1, limit: 35 }, true)
          }
          currentPage={data.page}
          total={data.total}
        />
      </div>
    );
  }
};
