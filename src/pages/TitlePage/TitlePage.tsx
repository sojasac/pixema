import { useParams } from 'react-router-dom';

import { Title } from '~/features/Titles/Title/Title';
import { Loader } from '~/shared/ui/loader/Loader';
import { useGetTitleQuery } from '~/store/api/titles/titles.api';

export const TitlePage = () => {
  const { id } = useParams<'id'>();
  const { data: title, status, error } = useGetTitleQuery({ id: id || '' });
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <div>Error: {JSON.stringify(error)}</div>;
  }
  if (title) {
    return (
      <Title
        title={title}
        apperance={
          title.rating.kp > 7
            ? 'highRating'
            : title.rating.kp < 7.5 && title.rating.kp > 4.9
            ? 'middleRating'
            : 'lowRating'
        }
      />
    );
  }
};
