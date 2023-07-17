import { useParams } from 'react-router-dom';

import { type FetchError } from '~/entities/entities';
import { NotFound } from '~/features/NotFound/NotFound';
import { PersonComponent } from '~/features/Person/Person';
import { Loader } from '~/shared/ui/loader/Loader';
import { isFetchBaseQueryErrorType } from '~/shared/utils/utils';
import { useGetPersonQuery } from '~/store/api/user/person/person.api';

export const PersonPage = () => {
  const { id } = useParams<'id'>();
  const { data, status, error } = useGetPersonQuery({ id: id || '' });
  if (
    status === 'rejected' &&
    isFetchBaseQueryErrorType(error) &&
    error.status === 404
  ) {
    return <NotFound message={(error.data as FetchError).message} />;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (data) {
    return <PersonComponent person={data} />;
  }
};
