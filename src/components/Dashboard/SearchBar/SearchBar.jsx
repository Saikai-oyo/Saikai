import React from 'react';
import * as S from './style';

const SearchBar = () => {
  return (
    <S.SearchWrapper>
      <S.LabelSearchBar>
        <S.SearchBar
          placeholder='Job Title, Company, or Keywords'
          type='text'
        />
      </S.LabelSearchBar>
    </S.SearchWrapper>
  );
};

export default SearchBar;
