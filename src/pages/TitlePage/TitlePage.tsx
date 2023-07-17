import { useParams } from 'react-router-dom';

import { type FetchError } from '~/entities/entities';
import { NotFound } from '~/features/NotFound/NotFound';
import { Title } from '~/features/Titles/Title/Title';
import { Loader } from '~/shared/ui/loader/Loader';
import { isFetchBaseQueryErrorType } from '~/shared/utils/utils';
import { useGetTitleQuery } from '~/store/api/titles/titles.api';

export const TitlePage = () => {
  const { id } = useParams<'id'>();
  const { data: title, status, error } = useGetTitleQuery({ id: id || '' });
  if (status === 'pending') {
    return <Loader />;
  }
  if (
    status === 'rejected' &&
    isFetchBaseQueryErrorType(error) &&
    error.status === 404
  ) {
    return <NotFound message={(error.data as FetchError).message} />;
  }
  if (title) {
    return <Title title={title} />;
  }
};
