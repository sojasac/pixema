/* eslint-disable @typescript-eslint/naming-convention -- API CONSTANTS*/
export interface MovieCard {
  id: number;
  name: string;
  release_date: string;
  year: string;
  tagline: string;
  poster: string;
  backdrop: string;
  runtime: number;
  budget: number;
  revenue: number;
  popularity: number;
  tmdb_id: number;
  imdb_id: string;
  is_series: boolean;
  adult: boolean;
  season_count: number;
  episode_count: number;
  series_ended: boolean;
  language: string;
  original_title: string;
  certification: string;
  rating: string;
  vote_count: number;
}
export interface Pagination {
  current_page: number;
  from: number;
  to: number;
  per_page: number;
  last_page: number;
  total: number;
  data: MovieCard[];
}

export interface TitlesResponse {
  pagination: Pagination;
  status: string;
}
export interface Genres {
  id: number;
  type: string;
  name: string;
  display_name: string;
}

export interface TitleImage {
  id: number;
  url: string;
  type: string;
  source: string;
}
export interface TitleEntity {
  id: number;
  name: string;
  type: string;
  release_date: string;
  year: number;
  description: string;
  tagline: string;
  poster: string;
  runtime: number;
  budget: number;
  revenue: number;
  language: string;
  country: string;
  original_title: string;
  adult: boolean;
  rating: number;
  genres: Genres[];
  images: TitleImage[];
}

export interface TitleResponse {
  title: TitleEntity;
  status: string;
}
/* eslint-enable @typescript-eslint/naming-convention*/
