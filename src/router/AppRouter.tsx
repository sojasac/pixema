import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignIn } from '~/features/Forms/SignIn/SignInForm';
import { SignUp } from '~/features/Forms/SignUp/SignUpForm';
import { MainLayout } from '~/layouts/MainLayout/MainLayout';
import { MainPage } from '~/pages/MainPage/MainPage';

const routerSchema = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage
      },
      {
        path: '/sign-in',
        Component: SignIn
      },
      {
        path: '/sign-up',
        Component: SignUp
      }
    ]
  },
  {
    path: '*',
    element: <div>Not Found!!</div>
  }
]);

export const AppRouter = () => <RouterProvider router={routerSchema} />;
