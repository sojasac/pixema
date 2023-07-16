import { type TitlesResponse, type MovieResponse } from './titles.types';
import { baseApi } from '..';
export interface MovieParameters {
  page?: number;
  limit: number;
  sortField?: string;
  year?: string;
  'genres.name'?: string[];
  type?: string;
  'countries.name'?: string[];
  'rating.kp'?: string;
  sortType?: 1 | -1;
}

export const titlesApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getTitle: build.query<MovieResponse, { id: string }>({
      query: ({ id }) => ({ url: `/v1.3/movie/${id}` })
    }),
    getTitles: build.query<TitlesResponse, MovieParameters>({
      query: ({
        page,
        limit,
        sortField,
        year,
        'genres.name': genres,
        type,
        'countries.name': countries,
        'rating.kp': rating,
        sortType
      }) => {
        const parameters = new URLSearchParams();
        page && parameters.append('page', `${page}`);
        parameters.append('limit', `${limit}`);
        sortField && parameters.append('sortField', sortField);
        if (genres) {
          for (const genre of genres) {
            parameters.append('genres.name', genre);
          }
        }
        if (countries) {
          for (const country of countries) {
            parameters.append('countries.name', country);
          }
        }
        type && parameters.append('type', type);
        rating && parameters.append('rating.kp', rating);
        year && parameters.append('year', year);
        sortType && parameters.append('sortType', `${sortType}`);
        return {
          url: '/v1.3/movie',
          params: parameters
        };
      }
    })
  })
});

export const { useGetTitleQuery, useGetTitlesQuery, useLazyGetTitlesQuery } =
  titlesApi;
