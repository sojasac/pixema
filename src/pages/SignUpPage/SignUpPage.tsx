/* eslint-disable @typescript-eslint/no-misused-promises -- RTK Query*/
import { useNavigate } from 'react-router-dom';

import { type ErrorAuth } from '~/entities/entities';
import { SignUp } from '~/features/Forms/SignUp/SignUpForm';
import { Loader } from '~/shared/ui/loader/Loader';
import { isFetchBaseQueryErrorType } from '~/shared/utils/utils';
import { useCreateUserMutation } from '~/store/api/user/user.api';

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
          (error.data as ErrorAuth).email ||
          (error.data as ErrorAuth).username ||
          (error.data as ErrorAuth).password
        }
      />
    );
  }
  if (isSuccess) {
    navigate('/auth/sign-in');
  }
};
/* eslint-enable @typescript-eslint/no-misused-promises -- RTK Query*/
