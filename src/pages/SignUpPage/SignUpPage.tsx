/* eslint-disable @typescript-eslint/no-misused-promises -- RTK Query*/
import { type FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useNavigate } from 'react-router-dom';

import { SignUp } from '~/features/Forms/SignUp/SignUpForm';
import { Loader } from '~/shared/ui/loader/Loader';
import { useCreateUserMutation } from '~/store/api/user/user.api';
export type Error = {
  email?: string;
  username?: string;
  password?: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- TypeGuard RTK Query Error
const isFetchBaseQueryErrorType = (error: any): error is FetchBaseQueryError =>
  'status' in error;

export const SignUpPage = () => {
  const [
    createUser,
    { error, isLoading, isError, isSuccess, isUninitialized }
  ] = useCreateUserMutation();
  const navigate = useNavigate();
  if (isUninitialized) {
    return <SignUp onCreateUser={createUser} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (isError && isFetchBaseQueryErrorType(error) && error.status === 400) {
    return (
      <SignUp
        onCreateUser={createUser}
        error={
          (error.data as Error).email ||
          (error.data as Error).username ||
          (error.data as Error).password
        }
      />
    );
  }
  if (isSuccess) {
    navigate('/auth/sign-in');
  }
};
/* eslint-enable @typescript-eslint/no-misused-promises -- RTK Query*/
