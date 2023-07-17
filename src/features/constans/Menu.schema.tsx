import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as MoviesSvg } from '~/assets/svg/movies.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';

export const MenuSchema = [
  {
    icon: <MoviesSvg />,
    path: '/all-titles',
    title: 'All Titles'
  },
  {
    icon: <TrendsSvg />,
    path: '/trends',
    title: 'Most popular'
  },
  {
    icon: <FavoritesSvg />,
    path: '/favorites',
    title: 'Favorites'
  }
] as const;
