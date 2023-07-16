import { type TypedStartListening } from '@reduxjs/toolkit';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';

import { type store } from './store';
import { listenerMiddleware } from './store.middleware';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;
