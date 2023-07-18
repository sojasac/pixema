import { useCallback, useState, useEffect } from 'react';

import classNames from 'classnames';
import Select, { type MultiValue } from 'react-select';

import { ReactComponent as ArrowTop } from '~/assets/svg/up-arrow.svg';
import { type FetchError } from '~/entities/entities';
import { NotFound } from '~/features/NotFound/NotFound';
import { PaginationComponent } from '~/features/Pagination/Pagination';
import { Titles } from '~/features/Titles/TitlesComponent/Titles';
import { Button } from '~/shared/ui/button/Button';
import { InputField, RadioInput } from '~/shared/ui/inputField/InputField';
import { Loader } from '~/shared/ui/loader/Loader';
import { isFetchBaseQueryErrorType } from '~/shared/utils/utils';
import { type MovieParameters } from '~/store/api/titles/titles.api';
import {
  useGetTitlesQuery,
  useLazyGetTitlesQuery
} from '~/store/api/titles/titles.api';
import { type TitlesResponse } from '~/store/api/titles/titles.types';

import AllTitlesStyle from './AllTitles.module.scss';
import { type OptionProperties } from './AllTitles.types';
import { getDefaultFilterValues } from './AllTitles.utils';
import './SelectStyles.scss';
import { CountriesSchema, GenresSchema, RadioInputSchema } from './Schemas';
import {
  ratingFromDefaultValue,
  ratingToDefaultValue,
  yearFromDefaultValue,
  yearToDefaultValue
} from '../constants';

export const AllTitlesPage = () => {
  const [formState, setFormState] = useState<Partial<MovieParameters>>(
    getDefaultFilterValues
  );

  const [genres, setGenres] = useState<readonly OptionProperties[]>([]);
  const [countries, setCountries] = useState<readonly OptionProperties[]>([]);
  const [ratingFrom, setRatingFrom] = useState<string>('');
  const [yearFrom, setYearFrom] = useState<string>('');
  const [ratingTo, setRatingTo] = useState<string>('');
  const [yearTo, setYearTo] = useState<string>('');
  const [isFilterActive, setIsFilterActive] = useState(false);
  const updateFormValues = useCallback(
    (newFormValue: Partial<MovieParameters>) => {
      setFormState((previousFields) => ({
        ...previousFields,
        ...newFormValue
      }));
    },
    []
  );
  if (yearFrom && yearTo) {
    formState.year = `${yearFrom}-${yearTo}`;
  } else if (yearFrom === '' && yearTo) {
    formState.year = `${yearFromDefaultValue}-${yearTo}`;
  } else if (yearFrom && yearTo === '') {
    formState.year = `${yearFrom}-${yearToDefaultValue}`;
  }

  if (ratingFrom && ratingTo) {
    formState['rating.kp'] = `${ratingFrom}-${ratingTo}`;
  } else if (ratingFrom === '' && ratingTo) {
    formState['rating.kp'] = `${ratingFromDefaultValue}-${ratingTo}`;
  } else if (ratingFrom && ratingTo === '') {
    formState['rating.kp'] = `${ratingFrom}-${ratingToDefaultValue}`;
  }

  const toggleFilters = () => {
    setIsFilterActive((isOpened) => !isOpened);
  };
  const handleGenreChange = (newValue: MultiValue<OptionProperties>) => {
    updateFormValues({
      'genres.name': Array.isArray(newValue)
        ? newValue.map((option: OptionProperties) => option.value)
        : []
    });
    setGenres(newValue);
  };
  const handleCountryChange = (newValue: MultiValue<OptionProperties>) => {
    updateFormValues({
      'countries.name': Array.isArray(newValue)
        ? newValue.map((option: OptionProperties) => option.value)
        : []
    });
    setCountries(newValue);
  };
  const handleClear = () => {
    updateFormValues(getDefaultFilterValues());
    setCountries([]);
    setGenres([]);
    setYearFrom('');
    setYearTo('');
    setRatingFrom('');
    setRatingTo('');
  };
  const { data: titles } = useGetTitlesQuery({
    page: 1,
    limit: 60
  });
  const [getTitles, { isError, isLoading, isSuccess, data, error }] =
    useLazyGetTitlesQuery();
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [data?.page]);
  if (isLoading) {
    return <Loader />;
  }
  if (isError && isFetchBaseQueryErrorType(error) && error.status === 404) {
    return <NotFound message={(error.data as FetchError).message} />;
  }
  if ((isSuccess && data) || titles) {
    const {
      docs: movies,
      page,
      pages
    } = (data as TitlesResponse) || (titles as TitlesResponse);
    return (
      <div>
        <div>
          <div>
            <div className={AllTitlesStyle.titlesHeader}>
              <h2>All Titles</h2>
              <div className={AllTitlesStyle.filtersButton}>
                <Button
                  onClick={toggleFilters}
                  type="button"
                >
                  Filters
                </Button>
              </div>
            </div>
            <form
              className={classNames({
                [AllTitlesStyle.containerFilters]: true,
                [AllTitlesStyle.containerFiltersActive]: isFilterActive
              })}
              onSubmit={(event) => {
                event.preventDefault();

                void getTitles({
                  limit: 60,
                  page: 1,
                  ...formState
                });
              }}
            >
              <div>
                <Button
                  icon={<ArrowTop />}
                  style={{ width: '50px', height: '50px', float: 'right' }}
                  apperance="secondary"
                  onClick={toggleFilters}
                  type="button"
                />
              </div>
              <div>
                <p>Sort by</p>
                <div className={AllTitlesStyle['radio-inputs']}>
                  {RadioInputSchema.map((radioButton) => (
                    <RadioInput
                      key={radioButton.name}
                      value={radioButton.value}
                      name={radioButton.name}
                      onChange={({ target: { value } }) =>
                        updateFormValues({ sortField: value })
                      }
                      checked={
                        formState.sortField === radioButton.value ? true : false
                      }
                      className="radioInputdd"
                    />
                  ))}
                </div>
              </div>
              <div>
                <p>Genres</p>
                <Select
                  closeMenuOnSelect={false}
                  options={GenresSchema.map((genre) => ({
                    value: genre.value,
                    label: genre.value
                  }))}
                  value={genres}
                  onChange={handleGenreChange}
                  isMulti
                  isClearable
                  classNames={{
                    control: () => 'selectControl',
                    menu: () => 'selectMenu',
                    option: (state) => (state.isFocused ? 'selectOption' : ''),
                    multiValue: () => 'multiValue',
                    multiValueLabel: () => 'multiLabel',
                    multiValueRemove: () => 'removeLabel',
                    clearIndicator: () => 'indicator',
                    dropdownIndicator: () => 'indicator'
                  }}
                />
              </div>
              <div>
                <p>Years</p>
                <div className={AllTitlesStyle.inputFields}>
                  <InputField
                    type="number"
                    placeholder="From"
                    name="yearFrom"
                    value={yearFrom}
                    onChange={({ target: { value } }) => setYearFrom(value)}
                  />
                  <InputField
                    type="number"
                    placeholder="To"
                    value={yearTo}
                    onChange={({ target: { value } }) => setYearTo(value)}
                  />
                </div>
              </div>
              <div>
                <p>Rating</p>
                <div className={AllTitlesStyle.inputFields}>
                  <InputField
                    type="number"
                    placeholder="From"
                    value={ratingFrom}
                    onChange={({ target: { value } }) => setRatingFrom(value)}
                  />
                  <InputField
                    type="number"
                    min={ratingFrom}
                    placeholder="To"
                    value={ratingTo}
                    onChange={({ target: { value } }) => setRatingTo(value)}
                  />
                </div>
              </div>
              <div>
                <p>Counries</p>
                <Select
                  options={CountriesSchema.map((country) => ({
                    value: country.value,
                    label: country.value
                  }))}
                  value={countries}
                  onChange={handleCountryChange}
                  isMulti
                  classNames={{
                    control: () => 'selectControl',
                    menu: () => 'selectMenu',
                    option: (state) => (state.isFocused ? 'selectOption' : ''),
                    multiValue: () => 'multiValue',
                    multiValueLabel: () => 'multiLabel',
                    multiValueRemove: () => 'removeLabel',
                    clearIndicator: () => 'indicator',
                    dropdownIndicator: () => 'indicator',
                    singleValue: () => 'selectSingleValue'
                  }}
                />
              </div>
              <div className={AllTitlesStyle.formBtn}>
                <Button
                  apperance="secondary"
                  onClick={handleClear}
                  type="button"
                >
                  Clear filter
                </Button>
                <Button
                  type="submit"
                  onClick={toggleFilters}
                >
                  Show results
                </Button>
              </div>
            </form>
            <Titles titles={movies} />
          </div>
        </div>
        <PaginationComponent
          onNextPage={() =>
            void getTitles(
              {
                page: page + 1,
                limit: 60,
                ...formState
              },
              true
            )
          }
          onPrevPage={() =>
            void getTitles({ page: page - 1, limit: 60, ...formState }, true)
          }
          currentPage={page}
          total={pages}
        />
      </div>
    );
  }
  if (isSuccess && (!data || !titles)) {
    return <NotFound message="Not Found!" />;
  }
};
