import { Titles } from '~/features/Titles/Titles/Titles';
import { useAppSelector } from '~/store/store.type';
import { favoriteSelector } from '~/store/title/title.selector';

export const FavoritesPage = () => {
  const favorites = useAppSelector(favoriteSelector);
  return favorites[0] ? (
    <Titles
      titles={favorites}
      isFavorites
    />
  ) : (
    <div>Oooops, no favorites Titles</div>
  );
};
