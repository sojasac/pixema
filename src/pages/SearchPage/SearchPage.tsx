import { useParams } from 'react-router-dom';

import { PaginationComponent } from '~/features/Pagination/Pagination';
import { SearchComponent } from '~/features/Search/Search';
import { Loader } from '~/shared/ui/loader/Loader';
import {
  useGetSearchQuery,
  useLazyGetSearchQuery
} from '~/store/api/search/search';
import { type TitlesResponse } from '~/store/api/titles/titles.types';

export const SearchPage = () => {
  const { query } = useParams<'query'>();
  const {
    data: titles,
    error,
    status
  } = useGetSearchQuery({ page: 1, limit: 10, query: query || '' });
  const [getSearch, { isSuccess, isError, isLoading, data }] =
    useLazyGetSearchQuery();

  if (status === 'rejected' || isError) {
    return <div>Oooops, something went wrong: {JSON.stringify(error)}</div>;
  }
  if (status === 'pending' || isLoading) {
    return <Loader />;
  }
  if ((isSuccess && data) || titles) {
    const {
      docs: movies,
      page,
      pages
    } = (data as TitlesResponse) || (titles as TitlesResponse);

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
};
