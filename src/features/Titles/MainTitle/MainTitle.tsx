import { Loader } from '~/shared/ui/loader/Loader';
import { useGetTitlesQuery } from '~/store/api/titles/titles.api';

import { Titles } from '../Titles/Titles';
export const MainTitle = () => {
  const date = new Date(2022, 6, 10);
  const {
    data: titles,
    status,
    error
  } = useGetTitlesQuery({ 'premiere.world': date.toLocaleDateString() });
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <div>Error: {JSON.stringify(error)}</div>;
  }
  if (titles) {
    return <Titles titlesResponse={titles} />;
  }
};
