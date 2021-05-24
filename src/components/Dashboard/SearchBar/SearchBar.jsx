/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as S from "./style";

const SearchBar = (props) => {

  return (
    <S.SearchWrapper>
      <S.LabelSearchBar>
        <S.SearchBar
          placeholder="Job Title, Company, or Keywords"
          type="text"
          onChange={(e) => {
            props.onSearch(e.target.value);
          }}
        />
      </S.LabelSearchBar>
    </S.SearchWrapper>
  );
};

export default SearchBar;
