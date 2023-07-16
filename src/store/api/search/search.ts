import { baseApi } from '..';
import { type TitlesSearchResponse } from '../titles/titles.types';

export interface SearchPayload {
  limit: number;
  page: number;
  query: string;
}

export const searchApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getSearch: build.query<TitlesSearchResponse, SearchPayload>({
      query: ({ page, query, limit }) => {
        const parameters = new URLSearchParams();
        parameters.append('page', `${page}`);
        parameters.append('limit', `${limit}`);
        parameters.append('query', query);

        return {
          url: '/v1.2/movie/search',
          params: parameters
        };
      }
    })
  })
});

export const { useGetSearchQuery, useLazyGetSearchQuery } = searchApi;
