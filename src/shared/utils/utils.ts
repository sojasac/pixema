/* eslint-disable @typescript-eslint/no-explicit-any -- TypeGuard RTK Query Error */
import { type FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export const isFetchBaseQueryErrorType = (
  error: any
): error is FetchBaseQueryError => 'status' in error;

/* eslint-enable @typescript-eslint/no-explicit-any -- TypeGuard RTK Query Error */
