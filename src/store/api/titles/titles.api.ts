import { type TitlesResponse, type MovieResponse } from './titles.types';
import { baseApi } from '..';
export interface Parameters {
  page?: number;
  limit?: number;
  sortField?: 'year' | 'rating.kp';
  releaseYears?: {
    start: number;
    end: number;
  };
  'genres.name'?: string[];
  type?:
    | 'movie'
    | 'tv-series'
    | 'cartoon'
    | 'anime'
    | 'animated-series'
    | 'tv-show';
  'premiere.world'?: string;
}

export const titlesApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getTitle: build.query<MovieResponse, { id: string }>({
      query: ({ id }) => ({ url: `movie/${id}` })
    }),
    getTitles: build.query<TitlesResponse, Parameters>({
      query: (parameters) => ({
        url: `movie`,
        params: parameters
      })
    })
  })
});

export const { useGetTitleQuery, useGetTitlesQuery } = titlesApi;
