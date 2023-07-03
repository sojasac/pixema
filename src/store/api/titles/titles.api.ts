import { type TitleResponse } from '~/store/titles/titles.types';

import { baseApi } from '..';

export const titlesApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getTitle: build.query<TitleResponse, { id: string }>({
      providesTags: (result) =>
        result
          ? [{ type: 'POST', id: result.title.id }]
          : [{ type: 'POST', id: 'ENTITY' }],
      query: ({ id }) => ({ url: `titles/${id}` })
    })
  })
});

export const { useGetTitleQuery } = titlesApi;
