import axiosCore from 'axios';

import { checkTokensInterceptor, proccessingError } from './axios.utils';

export const axiosAuth = axiosCore.create();

axiosAuth.interceptors.request.use(checkTokensInterceptor);
axiosAuth.interceptors.response.use(undefined, proccessingError);
