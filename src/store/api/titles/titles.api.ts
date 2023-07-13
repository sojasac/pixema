import { type TitlesResponse, type MovieResponse } from './titles.types';
import { baseApi } from '..';
export interface Parameters {
  page?: number;
  limit: number;
  sortField?: 'year' | 'rating.kp';
  'releaseYears.start'?: number;
  'releaseYears.end'?: number;
  'genres.name'?: string[];
  type?:
    | 'anime'
    | 'cartoon'
    | 'movie'
    | 'tv-series'
    | 'animated-series'
    | 'tv-show';
}

export const titlesApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getTitle: build.query<MovieResponse, { id: string }>({
      query: ({ id }) => ({ url: `/v1.3/movie/${id}` })
    }),
    getTitles: build.query<TitlesResponse, Parameters>({
      query: (parameters) => ({
        url: `/v1.3/movie`,
        params: parameters
      })
    })
  })
});

export const { useGetTitleQuery, useGetTitlesQuery, useLazyGetTitlesQuery } =
  titlesApi;
