import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';

import FormStyles from '../FormsStyles.module.scss';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      className={FormStyles.container}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h2>Sign in</h2>
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
        <a
          href="#"
          style={{ textDecoration: 'none', color: '#afb2b6' }}
        >
          Forgot password?
        </a>
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
