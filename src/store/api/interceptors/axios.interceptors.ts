import axiosCore, { type InternalAxiosRequestConfig } from 'axios';

export const axiosRequest = axiosCore.create();

axiosRequest.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set(
    'Authorization',
    `Bearer 889|i4rQHWcL8YDB40SfITLe1TNgbjBokwMqhHWWUuHj`
  );
  return config;
});
