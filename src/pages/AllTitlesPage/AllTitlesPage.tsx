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
    const { docs: movies, page, total } = titles;
    return (
      <div>
        <h2>All Titles</h2>
        <Titles titles={movies} />
        <PaginationComponent
          onNextPage={() => void getTitles({ page: page + 1, limit: 35 }, true)}
          onPrevPage={() => void getTitles({ page: page - 1, limit: 35 }, true)}
          currentPage={page}
          total={total}
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
    const { docs: titles, page, pages } = data;
    return (
      <div>
        <h2>All Titles</h2>
        <Titles titles={titles} />
        <PaginationComponent
          onNextPage={() => void getTitles({ page: page + 1, limit: 35 }, true)}
          onPrevPage={() => void getTitles({ page: page - 1, limit: 35 }, true)}
          currentPage={page}
          total={pages}
        />
      </div>
    );
  }
};
