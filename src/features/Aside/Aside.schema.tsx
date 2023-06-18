import { ReactComponent as FavoritesSvg } from '~/assets/svg/favorites.svg';
import { ReactComponent as HomeSvg } from '~/assets/svg/home.svg';
import { ReactComponent as TrendsSvg } from '~/assets/svg/trends.svg';
const home = <HomeSvg />;
const trends = <TrendsSvg />;
const favorites = <FavoritesSvg />;

export const AsideSchema = [
  {
    icon: home,
    path: '/',
    title: 'Home'
  },
  {
    icon: trends,
    path: '/trends',
    title: 'Trends'
  },
  {
    icon: favorites,
    path: '/favorites',
    title: 'Favorites'
  }
] as const;
