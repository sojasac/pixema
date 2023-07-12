import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { secondaryToken } from './interceptors/axios.constants';
import { AUTH_API_URL, BASE_API_URL } from '../store.constants';

export const baseApi = createApi({
  tagTypes: ['POST'] as const,
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${secondaryToken}`);
    }
  }),
  endpoints: () => ({})
});

export const authApi = createApi({
  tagTypes: ['POST'] as const,
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_API_URL
  }),
  endpoints: () => ({})
});
