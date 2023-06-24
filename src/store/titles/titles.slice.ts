import { createSlice } from '@reduxjs/toolkit';

import { fetchTitles } from './titles.api';
import { type MovieCard } from './titles.types';

export const getInitialState = (): {
  status: 'idle' | 'loading' | 'success' | 'error';
  titles: MovieCard[];
  error: string;
} => {
  return {
    status: 'idle',
    titles: [],
    error: ''
  };
};
export const TitleSlice = createSlice({
  name: 'titles',
  initialState: getInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTitles.fulfilled, (state, action) => {
      state.status = 'success';
      state.titles = action.payload.pagination.data;
    });
    builder.addCase(fetchTitles.pending, (state) => {
      state.status = 'loading';
    });
  }
});

export const { actions: titlesActions } = TitleSlice;
