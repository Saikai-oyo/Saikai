import React from 'react';
import * as S from './style';
import titles from '../../helpers/titles';
import translatedListTitles from '../../helpers/translatedListTitles';
const StatusInput = ({ tabIndex, edit, id, placeholder, name, onChange, value, t, selectedLang }) => {
    return (
        <S.StatusInput
            value={value}
            edit={edit}
            selectedLang={selectedLang}
            id={id}
            tabIndex={tabIndex}
            placeholder={placeholder}
            name={name}
            onChange={onChange}>
            {titles.map((title) => (
                <option key={title.label} value={title.value}>
                    {translatedListTitles(t, title.label)}
                </option>
            ))}
        </S.StatusInput>
    );
};

export default StatusInput;
