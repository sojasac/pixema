import { authApi } from '~/store/api/index';
import { AUTH_API_URL } from '~/store/store.constants';
export interface CreateUserResponse {
  username: string;
  email: string;
  id: number;
}
export interface CreateUserPayload {
  username: string;
  email: string;
  password: string;
}
export interface JWTToken {
  access: string;
  refresh: string;
}

export interface CreateTokenPayload {
  email: string;
  password: string;
}
export interface ActivateEmail {
  uid: string;
  token: string;
}
export interface ResendEmail {
  email: string;
}
export const userApi = authApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    createUser: build.mutation<CreateUserResponse, CreateUserPayload>({
      query: (user) => ({
        url: `${AUTH_API_URL}/auth/users/`,
        method: 'POST',
        body: user
      })
    }),
    confirmEmail: build.mutation<ActivateEmail, ActivateEmail>({
      query: (payload) => ({
        url: `${AUTH_API_URL}/auth/users/activation/`,
        method: 'POST',
        body: payload
      })
    }),
    resendEmail: build.mutation<ResendEmail, ResendEmail>({
      query: (payload) => ({
        url: `${AUTH_API_URL}/auth/users/resend_activation/`,
        method: 'POST',
        body: payload
      })
    })
  })
});

export const {
  useCreateUserMutation,
  useConfirmEmailMutation,
  useResendEmailMutation
} = userApi;
