import { type User } from '~/entities/entities';

import { type JWTToken } from './user.api';

export interface UserSlice {
  currentUser:
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: User }
    | { status: 'error'; error: string };
  tokens:
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: JWTToken }
    | { status: 'error'; error: string };
}

export interface ErrorType {
  detail: string;
}
