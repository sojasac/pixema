import { configureStore } from '@reduxjs/toolkit';

import { listenerMiddleware } from './store.middleware';
import { TitlesSlice } from './titles/titles.slice';

export const store = configureStore({
  reducer: {
    [TitlesSlice.name]: TitlesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  devTools: true
});
