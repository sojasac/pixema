import { useParams } from 'react-router-dom';

import { Title } from '~/shared/ui/Titles/Title';
import { useGetTitleQuery } from '~/store/api/titles/titles.api';

export const TitlePage = () => {
  const { id } = useParams<'id'>();
  const { data: title, status, error } = useGetTitleQuery({ id: id || '' });
  if (status === 'pending') {
    return <div>Loading Title</div>;
  }
  if (status === 'rejected') {
    return <div>Error: {JSON.stringify(error)}</div>;
  }
  if (title) {
    return (
      <Title
        title={title.title}
        apperance={
          +title.title.rating > 7
            ? 'highRating'
            : +title.title.rating < 7.5 && +title.title.rating > 4.9
            ? 'middleRating'
            : 'lowRating'
        }
      />
    );
  }
};
