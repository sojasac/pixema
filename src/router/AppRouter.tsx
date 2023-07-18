import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ConfirmEmail } from '~/features/Forms/ConfirmEmail/ConfirmEmail';
import { ResetPassword } from '~/features/Forms/ResetPassword/ResetPassword';
import { ResetPasswordConfirm } from '~/features/Forms/ResetPassword/ResetPasswordConfirm';
import { PageNotFound } from '~/layouts/404_Layout/404';
import { FormsLayout } from '~/layouts/FormsLayout/FormsLayout';
import { TitleLayout } from '~/layouts/TitleLayout/TitleLayout';
import { AllTitlesPage } from '~/pages/AllTitlesPage/AllTitlesPage';
import { FavoritesPage } from '~/pages/FavoritesPage/FavoritesPage';
import { PersonPage } from '~/pages/PersonPage/PersonPage';
import { SearchPage } from '~/pages/SearchPage/SearchPage';
import { SignInPage } from '~/pages/SignInPage/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage/SignUpPage';
import { TitlePage } from '~/pages/TitlePage/TitlePage';
import { TrendsPage } from '~/pages/TrendsPage/Trends';
import { useAppDispatch, useAppSelector } from '~/store/store.type';
import { AppTheme } from '~/store/theme/theme.constants';
import { selectAppTheme } from '~/store/theme/theme.selectors';
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
        path: '/favorites',
        Component: FavoritesPage
      },
      {
        path: '/all-titles',
        Component: AllTitlesPage
      },
      {
        path: '/search/:query',
        Component: SearchPage
      },
      {
        path: 'movie/:id',
        Component: TitlePage
      },
      {
        path: 'persons/:id',
        Component: PersonPage
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
        path: '/auth/reset-password',
        Component: ResetPassword
      },
      {
        path: 'activate/:uid/:token',
        Component: ConfirmEmail
      },
      {
        path: '/password/reset/confirm/:uid/:token',
        Component: ResetPasswordConfirm
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);
  const theme = useAppSelector(selectAppTheme);
  useEffect(() => {
    document
      .querySelector(':root')
      ?.classList[theme === AppTheme.Light ? 'add' : 'remove']('light');
    if (tokens) {
      const promise = dispatch(fetchUser());
      return () => {
        promise.abort('cancelled');
      };
    }
  }, [tokens, dispatch, theme]);

  return <RouterProvider router={routerSchema} />;
};
