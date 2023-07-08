import { type MovieByIdResponse } from './titles.types';
import { baseApi } from '..';

export const titlesApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getTitle: build.query<MovieByIdResponse, { id: string }>({
      providesTags: (result) =>
        result
          ? [{ type: 'POST', id: result.id }]
          : [{ type: 'POST', id: 'ENTITY' }],
      query: ({ id }) => ({ url: `movie/${id}` })
    })
  })
});

export const { useGetTitleQuery } = titlesApi;
