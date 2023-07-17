import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { NotFound } from '~/features/NotFound/NotFound';
import { PaginationComponent } from '~/features/Pagination/Pagination';
import { SearchComponent } from '~/features/Search/Search';
import { Loader } from '~/shared/ui/loader/Loader';
import {
  useGetSearchQuery,
  useLazyGetSearchQuery
} from '~/store/api/search/search';
import { type TitlesSearchResponse } from '~/store/api/titles/titles.types';

export const SearchPage = () => {
  const { query } = useParams<'query'>();
  const { data: titles, status } = useGetSearchQuery({
    page: 1,
    limit: 10,
    query: query || ''
  });
  const [getSearch, { isSuccess, isError, isLoading, data }] =
    useLazyGetSearchQuery();

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [data?.page]);

  if (status === 'rejected' || isError) {
    return <NotFound message="Nothing found for this search..." />;
  }
  if (status === 'pending' || isLoading) {
    return <Loader />;
  }
  if (isSuccess && (data || titles)) {
    const {
      docs: movies,
      page,
      pages
    } = (data as TitlesSearchResponse) || (titles as TitlesSearchResponse);

    return (
      <div>
        <SearchComponent movies={movies} />
        <PaginationComponent
          onNextPage={() =>
            void getSearch(
              {
                page: page + 1,
                limit: 10,
                query: query || ''
              },
              true
            )
          }
          onPrevPage={() =>
            void getSearch(
              { page: page - 1, limit: 35, query: query || '' },
              true
            )
          }
          currentPage={page}
          total={pages}
        />
      </div>
    );
  }
  if (isSuccess && (!data || !titles)) {
    <NotFound message="Nothing found for this search..." />;
  }
};
