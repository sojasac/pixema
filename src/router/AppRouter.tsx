import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignIn } from '~/features/Forms/SignIn/SignInForm';
import { SignUp } from '~/features/Forms/SignUp/SignUpForm';
import { FormsLayout } from '~/layouts/FormsLayout/FormsLayout';
import { TitleLayout } from '~/layouts/TitleLayout/TitleLayout';
// import { HomePage } from '~/pages/HomePage/HomePage';
import { TitlePage } from '~/pages/TitlePage/TitlePage';

const routerSchema = createBrowserRouter([
  {
    path: '/',
    Component: TitleLayout,
    children: [
      // {
      //   index: true,
      //   Component: HomePage
      // },
      {
        path: 'movie/:id',
        Component: TitlePage
      }
    ]
  },
  {
    Component: FormsLayout,
    children: [
      {
        path: '/auth/sign-in',
        Component: SignIn
      },
      {
        path: '/auth/sign-up',
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
