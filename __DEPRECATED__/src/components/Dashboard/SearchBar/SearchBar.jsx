/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './style';

const SearchBar = (props) => {
    const { t } = useTranslation();
    return (
        <S.SearchWrapper>
            <S.LabelSearchBar>
                <S.SearchBar
                    placeholder={t('dashboard.navbar.searchBar')}
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
