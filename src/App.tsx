import './App.style.scss';
import { Provider } from 'react-redux';

import { MainLayout } from './layouts/MainLayout/MainLayout';
import { store } from './store/store';
export const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};
