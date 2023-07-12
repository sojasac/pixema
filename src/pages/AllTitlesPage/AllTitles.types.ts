import { type InputHTMLAttributes } from 'react';

export interface FormField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: keyof FormState;
}

export interface FormState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
export const GenresSchema = [
  {
    name: 'аниме',
    slug: 'anime'
  },
  {
    name: 'биография',
    slug: 'biografiya'
  },
  {
    name: 'боевик',
    slug: 'boevik'
  },
  {
    name: 'вестерн',
    slug: 'vestern'
  },
  {
    name: 'военный',
    slug: 'voennyy'
  },
  {
    name: 'детектив',
    slug: 'detektiv'
  },
  {
    name: 'детский',
    slug: 'detskiy'
  },
  {
    name: 'для взрослых',
    slug: 'dlya-vzroslyh'
  },
  {
    name: 'документальный',
    slug: 'dokumentalnyy'
  },
  {
    name: 'драма',
    slug: 'drama'
  },
  {
    name: 'игра',
    slug: 'igra'
  },
  {
    name: 'история',
    slug: 'istoriya'
  },
  {
    name: 'комедия',
    slug: 'komediya'
  },
  {
    name: 'концерт',
    slug: 'koncert'
  },
  {
    name: 'короткометражка',
    slug: 'korotkometrazhka'
  },
  {
    name: 'криминал',
    slug: 'kriminal'
  },
  {
    name: 'мелодрама',
    slug: 'melodrama'
  },
  {
    name: 'музыка',
    slug: 'muzyka'
  },
  {
    name: 'мультфильм',
    slug: 'multfilm'
  },
  {
    name: 'мюзикл',
    slug: 'myuzikl'
  },
  {
    name: 'новости',
    slug: 'novosti'
  },
  {
    name: 'приключения',
    slug: 'priklyucheniya'
  },
  {
    name: 'реальное ТВ',
    slug: 'realnoe-TV'
  },
  {
    name: 'семейный',
    slug: 'semeynyy'
  },
  {
    name: 'спорт',
    slug: 'sport'
  },
  {
    name: 'ток-шоу',
    slug: 'tok-shou'
  },
  {
    name: 'триллер',
    slug: 'triller'
  },
  {
    name: 'ужасы',
    slug: 'uzhasy'
  },
  {
    name: 'фантастика',
    slug: 'fantastika'
  },
  {
    name: 'фильм-нуар',
    slug: 'film-nuar'
  },
  {
    name: 'фэнтези',
    slug: 'fentezi'
  },
  {
    name: 'церемония',
    slug: 'ceremoniya'
  }
] as const;

export const RadioInputSchema = [
  {
    value: 'raiting.kp',
    name: 'Rating'
  },
  {
    value: 'year',
    name: 'Year'
  },
  {
    value: 'anime',
    name: 'Anime'
  }
] as const;
