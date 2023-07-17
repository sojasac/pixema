import { Link } from 'react-router-dom';

import { NotFound } from '~/features/NotFound/NotFound';
import { Titles } from '~/features/Titles/TitlesComponent/Titles';
import { useAppSelector } from '~/store/store.type';
import { favoriteSelector } from '~/store/title/title.selector';
import { selectUser } from '~/store/user/user.selectors';

export const FavoritesPage = () => {
  const favorites = useAppSelector(favoriteSelector);
  const user = useAppSelector(selectUser);
  if (user) {
    return favorites[0] ? (
      <Titles
        titles={favorites}
        isFavorites
      />
    ) : (
      <NotFound message="Oooops, no favorites Titles" />
    );
  } else {
    return (
      <div>
        <NotFound message="You should Sign In!" />
        <p style={{ textAlign: 'center' }}>
          <Link to={'/auth/sign-in'}>Sign In</Link>?
        </p>
      </div>
    );
  }
};
