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
  'rating.filmCritics'?: string;
  'poster.url'?: string;
}

export const titlesApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getTitle: build.query<MovieResponse, { id: string }>({
      query: ({ id }) => ({ url: `/v1.4/movie/${id}` })
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
        'rating.filmCritics': ratingCritics,
        sortType,
        'poster.url': url
      }) => {
        const parameters = new URLSearchParams();
        page && parameters.append('page', `${page}`);
        parameters.append('limit', `${limit}`);
        sortField
          ? parameters.append('sortField', sortField)
          : parameters.append('sortField', 'rating.kp');
        if (genres) {
          for (const genre of genres) {
            parameters.append('genres.name', genre);
          }
        } else {
          parameters.append('genres.name', '!документальный');
          parameters.append('genres.name', '!короткометражка');
        }
        if (countries) {
          for (const country of countries) {
            parameters.append('countries.name', country);
          }
        }
        type && parameters.append('type', type);
        rating && parameters.append('rating.kp', rating);
        year && parameters.append('year', `${year}`);
        ratingCritics && parameters.append('rating.filmCritics', ratingCritics);
        sortType
          ? parameters.append('sortType', `${sortType}`)
          : parameters.append('sortType', `${-1}`);
        url
          ? parameters.append('poster.url', `${url}`)
          : parameters.append('poster.url', '!null');
        return {
          url: '/v1.4/movie',
          params: parameters
        };
      }
    })
  })
});

export const { useGetTitleQuery, useGetTitlesQuery, useLazyGetTitlesQuery } =
  titlesApi;
