import { useState } from 'react';

import { Link, NavLink, Navigate } from 'react-router-dom';

import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';
import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { createJWTToken } from '~/store/user/user.api';
import { selectUser } from '~/store/user/user.selectors';
import { type ErrorType } from '~/store/user/user.types';

import FormStyles from '../FormsStyles.module.scss';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenError, setTokenError] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  if (user) {
    return <Navigate to={'/'} />;
  }
  return (
    <form
      className={FormStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
        void dispatch(createJWTToken({ email, password }))
          .unwrap()
          .catch((error) => setTokenError((error as ErrorType).detail));
      }}
    >
      <h2>Sign in</h2>
      {tokenError && <span className={FormStyles.error}>{tokenError}</span>}
      <div>
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={({ target: { value } }) => setEmail(value)}
          shouldFitContainer
        />
      </div>
      <div>
        <InputField
          id="password"
          label="Password"
          value={password}
          type="password"
          placeholder="Your Password"
          onChange={({ target: { value } }) => setPassword(value)}
          style={{ marginBottom: '10px' }}
          shouldFitContainer
        />
        <Link
          to={'/auth/reset-password'}
          style={{ textDecoration: 'none', color: '#afb2b6' }}
        >
          Forgot password?
        </Link>
      </div>
      <div>
        <Button
          type="submit"
          style={{ width: '100%' }}
        >
          Sign in
        </Button>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Don’t have an account? <NavLink to="/auth/sign-up">Sign up</NavLink>
        </p>
      </div>
    </form>
  );
};
