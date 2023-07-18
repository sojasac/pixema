import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';
import { Loader } from '~/shared/ui/loader/Loader';
import { useResetPasswordMutation } from '~/store/api/user/user.api';

import FormStyles from '../FormsStyles.module.scss';

export const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [
    resetPassword,
    { isLoading, isError, isSuccess, isUninitialized, error }
  ] = useResetPasswordMutation();
  if (isUninitialized) {
    return (
      <form
        className={FormStyles.container}
        onSubmit={(event) => {
          event.preventDefault();
          void resetPassword({ email });
        }}
      >
        <h2>Reset Password</h2>
        <InputField
          type="email"
          placeholder="Your Email..."
          shouldFitContainer
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Button style={{ width: '100%' }}>Reset</Button>
      </form>
    );
  }
  if (isError) {
    return (
      <form
        className={FormStyles.container}
        onSubmit={(event) => {
          event.preventDefault();
          void resetPassword({ email });
        }}
      >
        <h2>Reset Password</h2>
        <p className="error">Error: {JSON.stringify(error)}</p>
        <InputField
          type="email"
          placeholder="Your Email..."
          shouldFitContainer
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Button style={{ width: '100%' }}>Reset</Button>
      </form>
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  if (isSuccess) {
    navigate('/auth/sign-in');
  }
};
