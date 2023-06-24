import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './store.middleware';
import { TitleSlice } from './titles/titles.slice';

export const store = configureStore({
  reducer: {
    [TitleSlice.name]: TitleSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: true
});
