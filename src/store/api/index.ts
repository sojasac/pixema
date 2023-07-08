import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { secondaryToken } from './interceptors/axios.constants';
import { BASE_API_URL } from '../store.constants';

export const baseApi = createApi({
  tagTypes: ['POST'] as const,
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', `${secondaryToken}`);
    }
  }),
  endpoints: () => ({})
});
