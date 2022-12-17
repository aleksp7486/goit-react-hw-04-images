import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarBoard,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './SearchBar.styled';

const SearchBar = ({ onSearchBarSubmit }) => {
  const [value, setValue] = useState('');

  const onInputChange = evt => {
    setValue(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onSearchBarSubmit(value);
    setValue('');
  };

  return (
    <SearchBarBoard>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>
        <Input
          onChange={onInputChange}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarBoard>
  );
};

SearchBar.propTypes = {
  onSearchBarSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
