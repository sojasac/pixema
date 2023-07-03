import { createAsyncThunk } from '@reduxjs/toolkit';

import { type TitlesResponse } from './titles.types';
import { axiosRequest } from '../api/interceptors/axios.interceptors';
import { BASE_API_URL } from '../store.constants';
export const fetchTitles = createAsyncThunk(
  'titles/fetch',
  async function ({
    titlesPerPage = 10,
    signal
  }: {
    titlesPerPage?: number;
    signal?: AbortController['signal'];
  }): Promise<TitlesResponse> {
    const { data } = await axiosRequest.get<TitlesResponse>(
      `${BASE_API_URL}titles`,
      {
        params: {
          perPage: titlesPerPage
        },
        signal
      }
    );
    return data;
  }
);
