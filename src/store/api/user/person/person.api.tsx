import { type Person } from './person.types';
import { baseApi } from '../..';

export const personApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getPerson: build.query<Person, { id: string }>({
      query: ({ id }) => ({ url: `/v1/person/${id}` })
    })
  })
});

export const { useGetPersonQuery } = personApi;
