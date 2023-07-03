import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api';
import { listenerMiddleware } from './store.middleware';
import { TitlesSlice } from './titles/titles.slice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [TitlesSlice.name]: TitlesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      listenerMiddleware.middleware,
      baseApi.middleware
    ),
  devTools: true
});
