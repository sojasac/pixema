import { type MovieParameters } from '~/store/api/titles/titles.api';

import { type FilterInputs } from './AllTitles.types';
import {
  ratingFromDefaultValue,
  ratingToDefaultValue,
  yearFromDefaultValue,
  yearToDefaultValue
} from '../constants';

export const getDefaultFilterValues = (): Partial<MovieParameters> => {
  return {
    sortField: undefined,
    year: undefined,
    'genres.name': undefined,
    type: undefined,
    'countries.name': undefined
  };
};

function isValidYear(year: string): boolean {
  return +year > +yearFromDefaultValue && +year < +yearToDefaultValue;
}

function isValidRating(rating: string): boolean {
  return +rating > +ratingFromDefaultValue && +rating < +ratingToDefaultValue;
}

export const getFormErrors = (form: FilterInputs) => {
  const errors: Partial<FilterInputs> = {};
  if (!isValidYear(form.yearFrom)) {
    errors.yearFrom = 'The interval should be within 1860 - 2030';
  }
  if (!isValidYear(form.yearTo)) {
    errors.yearTo = 'The interval should be within 1860 - 2030';
  }
  if (!isValidRating(form.ratingFrom)) {
    errors.ratingFrom = 'The interval should be within 0 - 10';
  }
  if (!isValidRating(form.ratingTo)) {
    errors.ratingTo = 'The interval should be within 0 - 10';
  }
  return errors;
};
