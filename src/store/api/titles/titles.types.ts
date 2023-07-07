/* eslint-disable @typescript-eslint/naming-convention -- Api constants*/
export interface MovieByIdResponse {
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
  ratingMpaa: string;
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
  sequelsAndPrequels: [
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
  top10: number;
  top250: number;
  ticketsOnSale: true;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: true;
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
}
/* eslint-enable @typescript-eslint/naming-convention -- Api constants*/
