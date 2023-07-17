export type User = {
  username: string;
  id: number;
  email: string;
};
export type ErrorAuth = {
  email?: string;
  username?: string;
  password?: string;
};

export type FetchError = {
  statusCode: number;
  message: string;
  error: string;
};
