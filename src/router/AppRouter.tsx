import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ConfirmEmail } from '~/features/Forms/ConfirmEmail/ConfirmEmail';
import { FormsLayout } from '~/layouts/FormsLayout/FormsLayout';
import { TitleLayout } from '~/layouts/TitleLayout/TitleLayout';
import { AllTitlesPage } from '~/pages/AllTitlesPage/AllTitlesPage';
import { SignInPage } from '~/pages/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage';
import { TitlePage } from '~/pages/TitlePage/TitlePage';
import { TrendsPage } from '~/pages/TrendsPage/Trends';
import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { fetchUser } from '~/store/user/user.api';
import { selectTokens } from '~/store/user/user.selectors';

const routerSchema = createBrowserRouter([
  {
    path: '/',
    Component: TitleLayout,
    children: [
      {
        index: true,
        Component: TrendsPage
      },
      {
        path: '/trends',
        Component: TrendsPage
      },
      {
        path: '/all',
        Component: AllTitlesPage
      },
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
        Component: SignInPage
      },
      {
        path: '/auth/sign-up',
        Component: SignUpPage
      },
      {
        path: 'activate/:uid/:token',
        Component: ConfirmEmail
      }
    ]
  },
  {
    path: '*',
    element: <div>Not Found!!</div>
  }
]);

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);
  useEffect(() => {
    if (tokens) {
      const promise = dispatch(fetchUser());
      return () => {
        promise.abort('cancelled');
      };
    }
  }, [tokens, dispatch]);

  return <RouterProvider router={routerSchema} />;
};
