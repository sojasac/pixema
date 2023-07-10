import { Titles } from '~/features/Titles/Titles/Titles';
import { Loader } from '~/shared/ui/loader/Loader';
import { useGetTitlesQuery } from '~/store/api/titles/titles.api';

export const HomePage = () => {
  const {
    data: titles,
    status,
    error
  } = useGetTitlesQuery({
    limit: 12,
    sortField: ['rating.kp']
  });
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <div>Error: {JSON.stringify(error)}</div>;
  }
  if (titles) {
    return (
      <>
        <h2>Most popular</h2>
        <Titles titlesResponse={titles} />
      </>
    );
  }
};
