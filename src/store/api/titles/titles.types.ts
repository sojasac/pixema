/* eslint-disable @typescript-eslint/naming-convention -- Api constants*/
export interface MovieResponse {
  id: number;
  name: string;
  alternativeName: string;
  year: number;
  description: string;
  shortDescription: string;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  ageRating: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  videos: {
    trailers: [
      {
        url: string;
        name: string;
        site: string;
        type: string;
        size: number;
      }
    ];
  };
  persons: [
    {
      id: number;
      photo: string;
      name: string;
      enName: string;
      description: string;
      profession: string;
      enProfession: string;
    }
  ];
  genres: [
    {
      name: string;
    }
  ];
  countries: [
    {
      name: string;
    }
  ];
  budget: {
    value: number;
    currency: string;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
  };
  premiere: {
    world: string;
  };
  similarMovies: [
    {
      id: number;
      name: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string;
        previewUrl: string;
      };
    }
  ];
  facts: [
    {
      value: string;
      type: string;
      spoiler: true;
    }
  ];
  productionCompanies: [
    {
      name: string;
      url: string;
      previewUrl: string;
    }
  ];
  type: string;
}

export interface MovieSearchResponse {
  id: number;
  name: string;
  year: number;
  alternativeName: string;
  enName: string;
  type: string;
  shortDescription: string;
  genres: string[];
  logo: string;
  poster: string;
  rating: number;
  movieLength: number;
}

export interface TitlesResponse {
  docs: MovieResponse[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface TitlesSearchResponse {
  docs: MovieSearchResponse[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
/* eslint-enable @typescript-eslint/naming-convention -- Api constants*/
