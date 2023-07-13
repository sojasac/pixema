import { type PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { type MovieResponse } from '../api/titles/titles.types';
import { startAppListening } from '../store.type';
export interface FavoriteSlice {
  favoriteMovie: MovieResponse[];
}

const getInitialState = (): FavoriteSlice => {
  const savedString = localStorage.getItem('@pixema/favorite-titles');
  const savedFavorites = savedString
    ? (JSON.parse(savedString) as { favoriteMovie: MovieResponse[] })
    : { favoriteMovie: [] };
  return { ...savedFavorites };
};

export const titleSlice = createSlice({
  name: 'title',
  initialState: getInitialState,
  reducers: {
    addFavoriteTitles: (
      state,
      action: PayloadAction<MovieResponse>
    ): FavoriteSlice => {
      return {
        ...state,
        favoriteMovie: [...state.favoriteMovie, action.payload]
      };
    },
    delFavoriteTitles: (
      state,
      action: PayloadAction<MovieResponse['id']>
    ): FavoriteSlice => {
      const updateFavorits = state.favoriteMovie.filter(
        (title) => title.id !== action.payload
      );
      return {
        ...state,
        favoriteMovie: [...updateFavorits]
      };
    }
  }
});

startAppListening({
  matcher: isAnyOf(
    titleSlice.actions.addFavoriteTitles.match,
    titleSlice.actions.delFavoriteTitles.match
  ),
  effect: (_, titleApi) => {
    localStorage.setItem(
      '@pixema/favorite-titles',
      JSON.stringify({ favoriteMovie: titleApi.getState().title.favoriteMovie })
    );
  }
});
export const { actions: titleActions } = titleSlice;
