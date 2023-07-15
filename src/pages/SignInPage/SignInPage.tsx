import { SignIn } from '~/features/Forms/SignIn/SignInForm';

export type Error = {
  email?: string;
  username?: string;
  password?: string;
  detail?: string;
};

export const SignInPage = () => {
  return <SignIn />;
};
