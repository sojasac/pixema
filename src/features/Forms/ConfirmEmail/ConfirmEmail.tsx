import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';
import { Loader } from '~/shared/ui/loader/Loader';
import {
  type ActivateEmail,
  useConfirmEmailMutation,
  useResendEmailMutation
} from '~/store/api/user/user.api';

import FormStyles from '../FormsStyles.module.scss';

export const ConfirmEmail = () => {
  const [activateEmail, { isError, isLoading, isUninitialized, isSuccess }] =
    useConfirmEmailMutation();
  const [resendEmail] = useResendEmailMutation();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const tokens = useParams<'uid' | 'token'>();
  useEffect(() => {
    activateEmail(tokens as ActivateEmail)
      .then(() => isSuccess)
      .catch(() => isError);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- more flexible rule
  }, [tokens, activateEmail]);
  if (isError) {
    return (
      <form
        className={FormStyles.container}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2>Error</h2>
        <div>
          <p>Ooops, something went wrong</p>
          <InputField
            label="Email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Button
            style={{ width: '100%' }}
            onClick={() => {
              resendEmail({ email })
                .then(() => {
                  navigate('/');
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          >
            Resend email
          </Button>
        </div>
      </form>
    );
  }
  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (isSuccess) {
    return (
      <form
        className={FormStyles.container}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2>Success</h2>
        <div>
          <p>Email confirmed. Your registration is now completed</p>
          <Button
            style={{ width: '100%' }}
            onClick={() => navigate('/auth/sign-in')}
          >
            Sign In
          </Button>
        </div>
      </form>
    );
  }
};
