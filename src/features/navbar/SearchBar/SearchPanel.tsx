import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';

import SearchStyle from './SearchPanel.module.scss';
import { ReactComponent as SearchSvg } from '../../../assets/svg/search.svg';
export const SearchPanel = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  return (
    <form
      className={SearchStyle.container}
      onSubmit={(event) => {
        event.preventDefault();
        if (search.trim()) {
          navigate(`/search/${search}`);
          setSearch('');
        } else {
          navigate('/all-titles');
        }
      }}
    >
      <InputField
        placeholder="Search"
        type="search"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
        shouldFitContainer
      ></InputField>
      <Button
        apperance="primary"
        style={{
          width: '50px',
          height: '50px'
        }}
        icon={<SearchSvg />}
      />
    </form>
  );
};
