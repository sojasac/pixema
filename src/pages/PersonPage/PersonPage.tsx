import { useParams } from 'react-router-dom';

import { PersonComponent } from '~/features/Person/Person';
import { Loader } from '~/shared/ui/loader/Loader';
import { useGetPersonQuery } from '~/store/api/user/person/person.api';

export const PersonPage = () => {
  const { id } = useParams<'id'>();
  const { data, status, error } = useGetPersonQuery({ id: id || '' });
  if (status === 'rejected') {
    return <div>Ooops, something went wrong: {JSON.stringify(error)}</div>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (data) {
    return <PersonComponent person={data} />;
  }
};
