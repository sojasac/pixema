import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as HomeSvg } from '~/assets/svg/home.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';

export const MenuSchema = [
  {
    icon: <HomeSvg />,
    path: '/',
    title: 'Home'
  },
  {
    icon: <TrendsSvg />,
    path: '/trends',
    title: 'Trends'
  },
  {
    icon: <FavoritesSvg />,
    path: '/favorites',
    title: 'Favorites'
  }
] as const;
