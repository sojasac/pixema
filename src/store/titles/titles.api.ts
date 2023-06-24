import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosCore, { AxiosHeaders } from 'axios';

import { type TitlesResponse } from './titles.types';
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
    const headers = new AxiosHeaders();
    headers.set(
      'Authorization',
      `Bearer 889|i4rQHWcL8YDB40SfITLe1TNgbjBokwMqhHWWUuHj`
    );
    const { data } = await axiosCore.get<TitlesResponse>(
      `${BASE_API_URL}titles`,
      {
        headers,
        params: {
          limit: titlesPerPage
        },
        signal
      }
    );
    return data;
  }
);
