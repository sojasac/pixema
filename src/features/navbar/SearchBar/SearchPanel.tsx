import { useState } from 'react';

import { Button } from '~/shared/ui/button/Button';
import { InputField } from '~/shared/ui/inputField/InputField';

import SearchStyle from './SearchPanel.module.scss';
import { ReactComponent as FilterImg } from '../../../assets/svg/filter.svg';
export const SearchPanel = () => {
  const [search, setSearch] = useState('');
  return (
    <form
      className={SearchStyle.container}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputField
        placeholder="Search"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      ></InputField>
      <Button
        style={{
          width: '30px',
          background: 'transparent',
          border: 'none',
          margin: 'auto 10px'
        }}
        icon={<FilterImg />}
      />
    </form>
  );
};
